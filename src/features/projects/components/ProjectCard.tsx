'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@shared/ui/card'
import { Button } from '@/shared/ui/button'
import {
  CheckCircle,
  ExternalLink,
  Github,
  ChevronRight,
  X,
  Maximize2,
  Minimize2,
} from 'lucide-react'
import { Badge } from '@/shared/ui/badge'
import { cn } from '@lib/utils'

interface ProjectCardProps {
  projectName?: string
  description?: string
  technologies?: Array<{
    name: string
    checked?: boolean
    description?: string
  }>
  liveDemoUrl?: string
  repoUrl?: string
  className?: string
}

export default function ProjectCard({
  projectName = 'Awesome Web App',
  description = 'A sophisticated web application to enhance productivity, featuring Next.js, React, TypeScript, and Prisma.',
  technologies = [
    {
      name: 'Next.js',
      checked: false,
      description:
        'A React framework for server-side rendering and dynamic content generation.',
    },
    {
      name: 'React',
      checked: true,
      description: 'A JavaScript library for building user interfaces.',
    },
    {
      name: 'TypeScript',
      checked: true,
      description:
        'A typed superset of JavaScript that compiles into plain JavaScript.',
    },
    {
      name: 'Prisma',
      checked: true,
      description: 'A next-generation ORM for Node.js and TypeScript.',
    },
  ],
  liveDemoUrl = '#',
  repoUrl = '#',
  className = '',
}: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [panelPosition, setPanelPosition] = useState<'right' | 'left'>('right')
  const [panelSize, setPanelSize] = useState<'compact' | 'full'>('compact')
  const [cardPosition, setCardPosition] = useState({
    top: 0,
    left: 0,
    width: 0,
    height: 0,
  })
  const cardRef = useRef<HTMLDivElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Calcular posición y dimensiones de la tarjeta
  const updateCardPosition = useCallback(() => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    console.log(window.screenY)
    setCardPosition({
      top: rect.top + window.scrollY,
      left: rect.left + window.scrollX,
      width: rect.width,
      height: rect.height,
    })
  }, [])

  // Calcular espacio disponible
  const checkAvailableSpace = useCallback(() => {
    if (!cardRef.current) return 'right'

    const rect = cardRef.current.getBoundingClientRect()
    const viewportWidth = window.innerWidth

    // Espacio disponible a la derecha
    const spaceRight = viewportWidth - (rect.right + 20)

    // Espacio disponible a la izquierda
    const spaceLeft = rect.left - 20

    // Si hay más espacio a la izquierda que a la derecha
    if (spaceRight < 100 && spaceLeft > spaceRight) {
      return 'left'
    }

    return 'right'
  }, [])

  const toggleExpand = () => {
    const newState = !isExpanded
    setIsExpanded(newState)

    if (newState) {
      updateCardPosition()
      const position = checkAvailableSpace()
      setPanelPosition(position)

      // Disparar reflow para asegurar mediciones precisas
      requestAnimationFrame(() => {
        updateCardPosition()
      })
    }
  }

  const closePanel = () => {
    setIsExpanded(false)
    setPanelSize('compact')
  }

  const togglePanelSize = () => {
    setPanelSize((prev) => (prev === 'compact' ? 'full' : 'compact'))
  }

  // Actualizar posición de la tarjeta cuando se expande
  useEffect(() => {
    if (isExpanded) {
      updateCardPosition()
    }
  }, [isExpanded, updateCardPosition])

  // Detectar cambios en el tamaño de la ventana y scroll
  useEffect(() => {
    const handleResize = () => {
      if (isExpanded) {
        updateCardPosition()
        const position = checkAvailableSpace()
        setPanelPosition(position)
      }
    }

    const handleScroll = () => {
      if (isExpanded) {
        updateCardPosition()
      }
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleScroll)

    handleResize() // Llamar inicialmente

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isExpanded, updateCardPosition, checkAvailableSpace])

  // Detectar clics fuera del panel
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isExpanded &&
        panelRef.current &&
        !panelRef.current.contains(event.target as Node) &&
        cardRef.current &&
        !cardRef.current.contains(event.target as Node)
      ) {
        closePanel()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isExpanded])

  // Calcular estilos del panel basado en el tamaño y posición
  const getPanelStyles = () => {
    if (!isExpanded) return 'hidden'

    const viewportHeight = window.innerHeight
    const cardCenterY = cardPosition.top + cardPosition.height / 2
    const availableSpaceAbove = cardCenterY - 20 // 20px de margen
    const availableSpaceBelow = viewportHeight - cardCenterY - 20

    if (panelSize === 'full') {
      // Panel ocupa toda la altura disponible con márgenes
      return `
        fixed ${panelPosition === 'right' ? 'left' : 'right'}:calc(${
          panelPosition === 'right'
            ? cardPosition.left + cardPosition.width + 20
            : '100vw - ' + (cardPosition.left - 20)
        }px)
        top:20px
        bottom:20px
        w-96
        z-50
      `
    } else {
      // Panel compacto que se ajusta al espacio disponible
      const maxHeight = Math.min(
        Math.max(availableSpaceAbove, availableSpaceBelow) * 2,
        viewportHeight - 40
      )

      return `
        fixed ${panelPosition === 'right' ? 'left' : 'right'}:calc(${
          panelPosition === 'right'
            ? cardPosition.left + cardPosition.width + 20
            : '100vw - ' + (cardPosition.left - 20)
        }px)
        top:${Math.max(20, cardCenterY - maxHeight / 2)}px
        h-[${maxHeight}px]
        w-96
        z-50
      `
    }
  }

  // Calcular estilos del conector
  const getConnectorStyles = () => {
    const connectorStyle = `
      absolute ${panelPosition === 'right' ? 'left-0' : 'right-0'}
      top-1/2 -translate-y-1/2
      flex items-center
    `

    return connectorStyle
  }

  // Calcular altura dinámica del contenido
  const calculateContentHeight = () => {
    if (panelSize === 'full') {
      return 'h-full'
    }

    // Para tamaño compacto, usar altura automática pero con scroll si es necesario
    return 'max-h-full'
  }

  return (
    <div
      ref={containerRef}
      className={cn('relative max-w-2xl mx-auto p-4', className)}
    >
      {/* Tarjeta principal */}
      <div
        className={cn(
          'relative transition-all duration-300',
          isExpanded ? 'z-50' : 'z-10'
        )}
      >
        <Card
          ref={cardRef}
          className={cn(
            'border-gray-200 shadow-md transition-all duration-300',
            isExpanded
              ? 'shadow-xl bg-gradient-to-br from-white to-blue-50/50 border-blue-200 scale-105'
              : 'bg-white hover:shadow-lg border-gray-200 hover:scale-[1.02]'
          )}
          style={{
            transformOrigin:
              panelPosition === 'right' ? 'left center' : 'right center',
          }}
        >
          <CardHeader className='pb-3'>
            <div className='flex justify-between items-start'>
              <div>
                <CardTitle className='text-2xl font-bold text-gray-900'>
                  {projectName}
                </CardTitle>
                <CardDescription className='text-gray-600 mt-2 text-base'>
                  {description}
                </CardDescription>
              </div>

              <Button
                variant={isExpanded ? 'default' : 'outline'}
                size='sm'
                className={cn(
                  'flex items-center gap-1 transition-all',
                  isExpanded
                    ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md'
                    : 'border-gray-300 hover:bg-gray-50'
                )}
                onClick={toggleExpand}
              >
                <span>{isExpanded ? 'close' : 'details'}</span>
                <ChevronRight
                  className={cn(
                    'h-4 w-4 transition-transform',
                    isExpanded ? 'rotate-90' : ''
                  )}
                />
              </Button>
            </div>

            <div className='flex flex-wrap gap-2 mt-4'>
              {technologies.map((tech) => (
                <Badge
                  key={tech.name}
                  variant={isExpanded ? 'default' : 'outline'}
                  className={cn(
                    'px-3 py-1 text-sm font-medium transition-all',
                    tech.checked
                      ? isExpanded
                        ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white'
                        : 'bg-blue-50 text-blue-700 border-blue-200'
                      : isExpanded
                        ? 'bg-gray-800 text-white'
                        : 'bg-gray-50 text-gray-700 border-gray-200'
                  )}
                >
                  {tech.name}
                </Badge>
              ))}
            </div>
          </CardHeader>

          <div
            className={cn(
              'border-t transition-colors',
              isExpanded ? 'border-blue-200' : 'border-gray-100'
            )}
          ></div>
        </Card>
      </div>

      {/* Panel lateral inteligente que usa espacio disponible */}
      {isExpanded && (
        <>
          {/* Overlay semi-transparente */}
          <div
            className='fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity duration-300'
            onClick={closePanel}
          />

          {/* Panel de detalles */}
          <div
            ref={panelRef}
            className={cn(
              'fixed w-96 z-50',
              'transition-all duration-300 ease-out',
              'shadow-2xl rounded-lg overflow-hidden',
              'bg-white',
              panelSize === 'full'
                ? 'animate-in slide-in-from-right-80 duration-300'
                : 'animate-in zoom-in-95 duration-200'
            )}
            style={{
              [panelPosition === 'right' ? 'left' : 'right']: `calc(${
                panelPosition === 'right'
                  ? cardPosition.left + cardPosition.width + 20
                  : '100vw - ' + (cardPosition.left - 20)
              }px)`,
              top:
                panelSize === 'full'
                  ? '20px'
                  : `${Math.max(20, cardPosition.top + window.scrollY)}px`,
              bottom: panelSize === 'full' ? '20px' : 'auto',
              height: panelSize === 'full' ? 'calc(100vh - 40px)' : 'auto',
              maxHeight:
                panelSize === 'compact' ? 'calc(100vh - 40px)' : 'none',
            }}
          >
            <Card className='h-full border-0 rounded-none shadow-none'>
              {/* Header del panel */}
              <div className='sticky top-0 z-20 bg-white/95 backdrop-blur-sm border-b border-gray-200 p-4 flex justify-between items-center'>
                <h3 className='font-semibold text-gray-900'>Project Details</h3>
                <div className='flex items-center gap-2'>
                  <Button
                    variant='ghost'
                    size='icon'
                    className='h-8 w-8'
                    onClick={togglePanelSize}
                    title={panelSize === 'full' ? 'Minimizar' : 'Maximizar'}
                  >
                    {panelSize === 'full' ? (
                      <Minimize2 className='h-4 w-4' />
                    ) : (
                      <Maximize2 className='h-4 w-4' />
                    )}
                  </Button>
                  <Button
                    variant='ghost'
                    size='icon'
                    className='h-8 w-8'
                    onClick={closePanel}
                  >
                    <X className='h-4 w-4' />
                  </Button>
                </div>
              </div>

              {/* Conector visual */}
              <div
                className={cn(
                  'absolute top-1/2 -translate-y-1/2 z-10',
                  panelPosition === 'right' ? '-left-4' : '-right-4'
                )}
              >
                <div
                  className={cn(
                    'w-8 h-8 rounded-full bg-white border-2 border-blue-300',
                    'flex items-center justify-center shadow-lg'
                  )}
                >
                  <div className='w-2 h-2 bg-blue-500 rounded-full'></div>
                </div>
                <div
                  className={cn(
                    'absolute top-1/2 w-4 h-[2px] bg-gradient-to-r from-blue-300 to-purple-300',
                    panelPosition === 'right' ? '-left-4' : '-right-4'
                  )}
                />
              </div>

              {/* Contenido con scroll */}
              <div
                className={cn(
                  'overflow-y-auto',
                  panelSize === 'full'
                    ? 'h-[calc(100%-3.5rem)]'
                    : 'max-h-[calc(100vh-10rem)]'
                )}
              >
                <CardContent className='p-6'>
                  <div className='space-y-6'>
                    <div>
                      <h3 className='text-lg font-semibold text-gray-900 mb-3'>
                        Project Overview
                      </h3>
                      <p className='text-gray-700 text-sm leading-relaxed'>
                        This web application is designed to enhance productivity
                        and streamline workflows using Next.js for the frontend,
                        React for UI components, TypeScript for strong typing,
                        and Prisma for querying the database with a modern,
                        modular, and scalable codebase.
                      </p>
                    </div>

                    <div>
                      <h3 className='text-lg font-semibold text-gray-900 mb-3'>
                        Technologies & Tools
                      </h3>
                      <ul className='space-y-3'>
                        {technologies.map((tech) => (
                          <li
                            key={tech.name}
                            className='flex items-start gap-3 group p-3 rounded-lg hover:bg-gray-50 transition-all'
                          >
                            <div className='mt-1'>
                              {tech.checked ? (
                                <CheckCircle className='h-5 w-5 text-green-500 group-hover:scale-110 transition-transform' />
                              ) : (
                                <div className='h-5 w-5 rounded-full border border-gray-300 group-hover:border-gray-400 transition-colors'></div>
                              )}
                            </div>
                            <div className='flex-1'>
                              <span
                                className={`font-medium ${
                                  tech.checked
                                    ? 'text-gray-900'
                                    : 'text-gray-500'
                                } group-hover:text-gray-900 transition-colors`}
                              >
                                {tech.name}
                              </span>
                              <p className='text-gray-600 text-sm mt-1 leading-relaxed'>
                                {tech.description}
                              </p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className='pt-4 border-t border-gray-100'>
                      <h3 className='text-lg font-semibold text-gray-900 mb-3'>
                        Links
                      </h3>
                      <div className='flex flex-wrap gap-3'>
                        <Button
                          asChild
                          className='gap-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-sm hover:shadow'
                        >
                          <a
                            href={liveDemoUrl}
                            target='_blank'
                            rel='noopener noreferrer'
                          >
                            <ExternalLink className='h-4 w-4' />
                            Live Demo
                          </a>
                        </Button>
                        <Button
                          asChild
                          variant='outline'
                          className='gap-2 border-gray-300 hover:bg-gray-50 hover:border-gray-400'
                        >
                          <a
                            href={repoUrl}
                            target='_blank'
                            rel='noopener noreferrer'
                          >
                            <Github className='h-4 w-4' />
                            Repository
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </>
      )}
    </div>
  )
}
