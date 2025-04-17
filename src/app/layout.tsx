// app/layout.tsx
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import LenisProvider from '@/components/LenisProvider'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata = {
  title: "Dune Abroad | Study Abroad Consultants in Mangalore",
  description:
    "Dune Abroad is a trusted study abroad consultancy in Mangalore, guiding students to top universities across the globe. Personalized counseling, visa support, and more.",
  keywords: [
    "Study Abroad Mangalore",
    "Dune Abroad",
    "Abroad Education Consultants Mangalore",
    "Student Visa Assistance",
    "Overseas Education",
    "Study in UK USA Canada Australia",
    "Best Study Abroad Agency Mangalore"
  ],
  authors: [{ name: "Dune Abroad", url: "https://duneabroad.com" }],
  creator: "Dune Abroad",
  publisher: "Dune Abroad",
  robots: "index, follow",
  openGraph: {
    title: "Dune Abroad | Top Study Abroad Agency in Mangalore",
    description:
      "Looking to study abroad? Dune Abroad in Mangalore offers expert guidance, university admissions, visa processing, and career counseling for global education.",
    url: "https://duneabroad.com",
    siteName: "Dune Abroad",
    images: [
      {
        url: "https://duneabroad.com/og-image.jpg", // Replace with actual image
        width: 1200,
        height: 630,
        alt: "Dune Abroad Study Abroad Consultants Mangalore",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dune Abroad | Study Abroad Consultants in Mangalore",
    description:
      "Get expert help to study abroad with Dune Abroad in Mangalore. University selection, admission process, visa guidance, and more!",
    images: ["https://duneabroad.com/og-image.jpg"], // Replace with actual image
    creator: "@duneabroad",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LenisProvider />
        {children}
      </body>
    </html>
  )
}
