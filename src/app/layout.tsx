import type { Metadata } from 'next'
import { geistMono, geistSans } from '@/fonts'
import Head from 'next/head'
import '@/globals.css'
import { ThemeProvider } from '@features/theme/components/theme-provider'
import { Footer } from '@/components/Footer'
import { Analytics } from '@vercel/analytics/next'
import { Toaster } from 'sonner'
export const metadata: Metadata = {
  title: 'Moises Lugo | Junior Full Stack Developer',
  description:
    'Portfolio of Moises Lugo, a Junior Full Stack Developer focused on building modern web applications with React, Next.js, TypeScript, PostgreSQL, and Prisma.',

  keywords: [
    'Moises Lugo',
    'Junior Full Stack Developer',
    'Full Stack Developer',
    'Web Developer',
    'Next.js',
    'React',
    'TypeScript',
    'PostgreSQL',
    'Prisma',
    'Tailwind CSS',
    'JavaScript',
    'Web Development',
    'Full Stack Portfolio',
  ],

  authors: [
    {
      name: 'Moises Lugo',
      url: 'https://moisesdev.com',
    },
  ],

  creator: 'Moises Lugo',

  openGraph: {
    title: 'Moises Lugo | Junior Full Stack Developer',
    description:
      'Portfolio of Moises Lugo, a Junior Full Stack Developer building modern web applications with React, Next.js, TypeScript, PostgreSQL, and Prisma.',
    url: 'https://moisesdev.com',
    siteName: 'Moises Lugo Portfolio',

    images: [
      {
        url: 'https://res.cloudinary.com/dnrlarkyn/image/upload/v1760510816/uploads/j5osl8zjrotgclosmiyx.png',
        width: 1200,
        height: 630,
        alt: 'Moises Lugo - Junior Full Stack Developer Portfolio',
      },
    ],

    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Moises Lugo | Junior Full Stack Developer',
    description:
      'Junior Full Stack Developer portfolio featuring web applications and projects built with React, Next.js, TypeScript, PostgreSQL, and Prisma.',
    images: [
      'https://res.cloudinary.com/dnrlarkyn/image/upload/v1760510816/uploads/j5osl8zjrotgclosmiyx.png',
    ],
    creator: '@moiseslugo',
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
      <Head>
        <link rel='icon' href='/favicon.png' type='image/x-icon' />
      </Head>
      <body className='antialiased max-h-full flex flex-col bg-background text-foreground'>
        <Analytics />

        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
            {/* Main content */}
            <main className='flex-1'>{children}</main>
          {/* Footer always at bottom */}
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  )
}
