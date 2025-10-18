import type { Metadata } from 'next'
import { geistMono, geistSans } from '@ui/fonts'
import '@ui/globals.css'
import { ThemeProvider } from '@components/darkMode/theme-provider'
import { Navbar } from '@components/navbar'
import { Footer } from '@components/Footer'
import { SessionProvider } from 'next-auth/react'
export const metadata: Metadata = {
  title: 'Moises Lugo - Frontend Developer & Mini Blog',
  description:
    'Personal blog of Moises Lugo, an aspiring frontend developer sharing projects, tutorials, and insights on Next.js, React, TailwindCSS, and modern web development.',
  keywords: [
    'Frontend',
    'Next.js',
    'React',
    'TailwindCSS',
    'Blog',
    'Web Development',
    'Programming',
    'Moises Lugo',
  ],
  authors: [{ name: 'Moises Lugo', url: 'https://moisesdev.com' }],
  creator: 'Moises Lugo',
  openGraph: {
    title: 'Moises Lugo - Frontend Developer & Mini Blog',
    description:
      'Personal blog of Moises Lugo, an aspiring frontend developer sharing projects, tutorials, and insights on Next.js, React, TailwindCSS, and modern web development.',
    url: 'https://moisesdev.com',
    siteName: 'Moises Lugo Blog',
    images: [
      {
        url: 'https://res.cloudinary.com/dnrlarkyn/image/upload/v1760510816/uploads/j5osl8zjrotgclosmiyx.png',
        width: 1200,
        height: 630,
        alt: 'Moises Lugo Blog Banner',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Moises Lugo - Frontend Developer & Mini Blog',
    description:
      'Personal blog of Moises Lugo, an aspiring frontend developer sharing projects, tutorials, and insights on Next.js, React, TailwindCSS, and modern web development.',
    images: [
      'https://res.cloudinary.com/dnrlarkyn/image/upload/v1760510816/uploads/j5osl8zjrotgclosmiyx.png',
    ],
    creator: '@moiseslugo', // tu Twitter handle si tienes
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body
        suppressHydrationWarning
        className='antialiased h-full min-h-screen flex flex-col bg-background text-foreground'
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <SessionProvider>
            <Navbar />
            <main className='flex-1 w-full flex flex-col items-center '>
              {children}
            </main>
            <Footer />
          </SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
