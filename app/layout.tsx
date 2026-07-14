import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar2";
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
  title: "Ben & Ben's Mega Paving Risers",
  description: "Heavy-duty adjustment rings, catch basin frames, and paving access solutions for municipal and commercial infrastructure.",
  icons: {
    icon: '/favicon.png', 
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