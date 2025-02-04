import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import '@assets/styles/globals.css'
import ContainerProvider from '@components/organisms/Provider'

const geistSansPoppins = Poppins({
  variable: '--font-geist-sans-poppins',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSansPoppins.variable} antialiased`}>
        <ContainerProvider>{children}</ContainerProvider>
      </body>
    </html>
  )
}
