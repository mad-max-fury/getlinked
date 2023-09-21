import { montserrat } from '@/styles/fonts'
import '../styles/globals.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
    metadataBase: new URL('https://acme.com'),
  title: {
    default: 'GetLinked',
    template: '%s | GetLinked ',
  },
  description:
    `Getlinked Tech Hackathon is a technology
innovation program established by a group 
of organizations with the aim of showcasing 
young and talented individuals in the field 
of technology.`,
  openGraph: {
    title: 'GetLinked',
    description:
       `Getlinked Tech Hackathon is a technology
innovation program established by a group 
of organizations with the aim of showcasing 
young and talented individuals in the field 
of technology.`,
    images: [`/api/og?title=GetLinked Hackathon`],
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
   
      <body className={`${montserrat.variable} bg-system-purple-dark`}>
        <div>Nav bar</div>
        {children}
        </body>
    </html>
  )
}
