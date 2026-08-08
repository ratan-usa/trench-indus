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
  title: "Paving Risers",
  description: "Heavy-duty adjustment rings, catch basin frames, and paving access solutions for municipal and commercial infrastructure.",
  icons: {
    icon: 'https://pub-a9b7eff88c5d4cb7b2837afc51696bde.r2.dev/favicon.png', 
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