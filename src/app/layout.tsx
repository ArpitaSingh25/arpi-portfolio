import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Arpita | Product Designer",
  description: "My Portfolio ",
  keywords: ["product design", "UX/UI", "portfolio", "Uber", "design", "user experience"],
  authors: [{ name: "Arpita" }],
  creator: "Arpita",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Arpita | Product Designer",
    description: "Product Design Portfolio for Uber Internship Application",
    siteName: "Arpita Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
