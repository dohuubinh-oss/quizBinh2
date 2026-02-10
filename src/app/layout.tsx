
import type { Metadata } from "next";
import { Noto_Sans, Lexend } from "next/font/google";
import "./globals.css";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${noto_sans.variable} ${lexend.variable} antialiased min-h-screen bg-background-light text-[#111418] transition-colors duration-300`}
      >
        {children}
      </body>
    </html>
  );
}
