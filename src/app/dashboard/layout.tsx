
import type { Metadata } from "next";
import { getLayoutData } from "@/lib/get-layout-data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Dashboard Giáo Viên - Quiz App",
  description: "Khu vực quản lý dành cho giáo viên.",
};

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  // 1. LẤY DỮ LIỆU NHƯ CŨ
  // Hàm getLayoutData vẫn trả về đầy đủ các bộ link.
  const { navLinks, teacherNavLinks, footerContent } = await getLayoutData();

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 2. THAY ĐỔI QUAN TRỌNG NHẤT */}
      {/* Thay vì truyền `navLinks` (Home, About, ...), chúng ta truyền `teacherNavLinks` */}
      {/* (Tổng quan, Quản lý Câu hỏi, ...) vào component Navbar. */}
      {/* Component Navbar sẽ tự động render ra các link mà nó nhận được. */}
      <Navbar navLinks={teacherNavLinks} />

      <main className="flex-grow w-full">
        {children}
      </main>
      <Footer footerContent={footerContent} />
    </div>
  );
}
