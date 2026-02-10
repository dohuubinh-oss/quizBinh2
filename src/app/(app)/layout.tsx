
import type { Metadata } from "next";
import { getLayoutData } from "@/lib/get-layout-data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Quiz App",
  description: "A modern and engaging quiz application.",
};

export default async function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const { navLinks, footerContent } = await getLayoutData();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar navLinks={navLinks} />
      <main className="flex-grow w-full">
        {children}
      </main>
      <Footer footerContent={footerContent} />
    </div>
  );
}
