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
    default: "Paving Risers | Professional Grade Infrastructure Solutions",
    template: "%s | Paving Risers",
  },
  description: "Heavy-duty adjustment rings, catch basin frames, and paving access solutions for municipal and commercial infrastructure.",
  metadataBase: new URL('https://www.pavingrisers.com'),
  icons: {
    icon: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/favicon.png`,
    apple: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/favicon.png`,
  },
  openGraph: {
    title: 'Paving Risers',
    description: 'Professional Grade Infrastructure Solutions',
    url: 'https://www.pavingrisers.com',
    siteName: 'Paving Risers',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/favicon.png`,
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Paving Risers',
    description: 'Heavy-duty adjustment rings and paving access solutions.',
    images: [`${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/favicon.png`],
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TopNavbar />
        <Navbar />
        {children} 
        <Footer />
      </body>
    </html>
  );
}