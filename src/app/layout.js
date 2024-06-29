import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL('https://www.kylegatudan.com/'),
  title: "Kyle Gatudan",
  description: "Website Portfolio",
  openGraph: {
    title: 'Kyle Gatudan',
    description: 'Website Portfolio',
    url: 'https://www.kylegatudan.com/',
    images: '/projects/personal.png',
    type: 'website',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
        <Analytics />  
      </body>
    </html>
  );
}
