import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import TopNavbar from "./components/top-navbar";
import Footer from "./components/footer";
 
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Trench Industries",
    template: "%s | Trench Industries",
  },
  description: "Professional Grade Infrastructure Solutions",
  metadataBase: new URL('https://www.trench-industries.com'),
  icons: {
    icon: `/images/favicon.png`,
    apple: `/images/favicon.png`,
  },
  openGraph: {
    title: 'Trench Industries',
    description: 'Professional Grade Infrastructure Solutions',
    url: 'https://www.trench-industries.com',
    siteName: 'Trench Industries',
    images: [
      {
        url: `/images/favicon.png`,
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trench Industries',
    description: 'Professional Grade Infrastructure Solutions',
    images: [`/images/favicon.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden w-full relative`}
      >
        <TopNavbar />
        <Navbar />
        {children} 
        <Footer />
      </body>
    </html>
  );
}