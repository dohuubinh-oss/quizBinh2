'use client'; // Required because AuthProvider and Toaster use client-side hooks

import { Noto_Sans, Lexend } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext"; // Import AuthProvider
import { Toaster } from "react-hot-toast"; // Import the Toaster component

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
        <AuthProvider> 
          {/* The Toaster component will render the notifications */} 
          <Toaster 
            position="top-center"
            reverseOrder={false}
            gutter={8}
            toastOptions={{
              // Define default options
              className: '',
              duration: 5000,
              style: {
                background: '#363636',
                color: '#fff',
              },
              // Default options for specific types
              success: {
                duration: 3000,
                theme: {
                  primary: 'green',
                  secondary: 'black',
                },
              },
            }}
          />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
