
import type { Metadata } from "next";
import { Noto_Sans, Lexend } from "next/font/google";
import "./globals.css";
import { getLayoutData } from "@/lib/get-layout-data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const noto_sans = Noto_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-sans",
});

const lexend = Lexend({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lexend",
});

export const metadata: Metadata = {
  title: "Quiz App",
  description: "A modern and engaging quiz application.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const { navLinks, footerContent } = await getLayoutData();

  return (
    <html lang="en">
      <body
        className={`${noto_sans.variable} ${lexend.variable} antialiased min-h-screen bg-background-light text-[#111418] transition-colors duration-300 flex flex-col`}
      >
        <Navbar navLinks={navLinks} />
        <main className="flex-grow w-full">
          {children}
        </main>
        <Footer footerContent={footerContent} />
      </body>
    </html>
  );
}
