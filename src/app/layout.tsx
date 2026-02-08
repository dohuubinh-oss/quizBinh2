
import type { Metadata } from "next";
import { Noto_Sans, Lexend } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getLayoutData } from "@/lib/data";

const noto_sans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-noto-sans",
});

const lexend = Lexend({
  subsets: ["latin"],
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
        {/*
          --- GIẢI THÍCH THAY ĐỔI ---
          1. VÌ SAO CẦN THAY ĐỔI:
             - Sau khi biến đổi Navbar thành dạng "viên thuốc" tự căn giữa, việc giữ lại các class giới hạn chiều rộng trên thẻ <main> là không cần thiết và có thể gây ra lỗi layout (nested container).

          2. GIẢI QUYẾT VẤN ĐỀ GÌ:
             - Xóa các class `max-w-[1280px]`, `mx-auto`, `px-4 sm:px-6 lg:px-8`, `py-8` khỏi thẻ <main>.
             - Thêm class `flex-grow` để <main> tự động chiếm lấy khoảng không gian còn lại giữa Navbar và Footer.
             - Thêm class `w-full` để đảm bảo nó vẫn chiếm đủ chiều rộng của body.

          3. LỢI ÍCH SO VỚI CÁCH CŨ:
             - Cấu trúc layout trở nên sạch sẽ và logic hơn. `Navbar` và `Footer` tự định nghĩa chiều rộng của chúng, còn `<main>` đóng vai trò là một vùng chứa linh hoạt.
             - Mỗi trang con (trong {children}) giờ đây sẽ có toàn quyền kiểm soát padding và layout của riêng nó, giúp bạn dễ dàng tạo các trang có bố cục đặc biệt (ví dụ: trang toàn màn hình) nếu cần.
             - Đảm bảo tính nhất quán và tránh các xung đột CSS không mong muốn.
        */}
        <main className="flex-grow w-full">
          {children}
        </main>
        <Footer footerContent={footerContent} />
      </body>
    </html>
  );
}
