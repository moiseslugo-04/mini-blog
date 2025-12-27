import type { Metadata } from 'next'
import { geistMono, geistSans } from '@ui/fonts'
import Head from 'next/head'
import '@ui/globals.css'
import { ThemeProvider } from '@components/darkMode/theme-provider'
import { Navbar } from '@components/navbar'
import { Footer } from '@components/Footer'
import { SessionProvider } from 'next-auth/react'
export const metadata: Metadata = {
  title: 'Moises Lugo - Frontend Developer Portfolio',
  description:
    'Personal portfolio of Moises Lugo, a frontend developer showcasing projects and writing about what he learns in web development, including Next.js, React, and TailwindCSS.',
  keywords: [
    'Moises Lugo',
    'Frontend Developer',
    'Portfolio',
    'Next.js',
    'React',
    'TailwindCSS',
    'Web Development',
    'JavaScript',
    'Frontend Portfolio',
  ],
  authors: [{ name: 'Moises Lugo', url: 'https://moisesdev.com' }],
  creator: 'Moises Lugo',
  openGraph: {
    title: 'Moises Lugo - Frontend Developer Portfolio',
    description:
      'Personal portfolio of Moises Lugo, featuring frontend projects and a blog where he shares what he is learning about modern web development.',
    url: 'https://moisesdev.com',
    siteName: 'Moises Lugo Portfolio',
    images: [
      {
        url: 'https://res.cloudinary.com/dnrlarkyn/image/upload/v1760510816/uploads/j5osl8zjrotgclosmiyx.png',
        width: 1200,
        height: 630,
        alt: 'Moises Lugo Portfolio Banner',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Moises Lugo - Frontend Developer Portfolio',
    description:
      'Frontend developer portfolio with projects and blog posts about learning Next.js, React, and modern web development.',
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
      <body
        suppressHydrationWarning
        className='antialiased h-full min-h-screen flex flex-col bg-background text-foreground relative'
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <SessionProvider>
            <Navbar />
            <main className='flex flex-1 w-full '>{children}</main>
            <Footer />
          </SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
