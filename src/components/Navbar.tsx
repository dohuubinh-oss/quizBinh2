"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavLink } from '@/lib/data';
import Logo from './ui/Logo';
import { Button } from './ui/Button';
import MobileMenu from './ui/MobileMenu'; // TÁI CẤU TRÚC: Import component MobileMenu

interface NavbarProps {
  navLinks: NavLink[];
}

/**
 * Navbar là component chính cho header của trang web.
 * Sau khi tái cấu trúc, trách nhiệm chính của nó là bố trí các thành phần con:
 * - Logo: Hiển thị thương hiệu.
 * - DesktopNav: Hiển thị các link điều hướng trên màn hình lớn.
 * - AuthButtons: Các nút Đăng nhập/Đăng ký.
 * - MobileMenu: Toàn bộ trải nghiệm điều hướng trên di động.
 */
const Navbar: React.FC<NavbarProps> = ({ navLinks }) => {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-[#e5e7eb] bg-white/95 backdrop-blur-md px-4 sm:px-10 py-3">
      <Logo />

      {/* --- Điều hướng cho màn hình Desktop --- */}
      <nav className="hidden lg:flex items-center gap-8">
        {navLinks.map((link) => (
          <Link
            key={link._id}
            href={link.href}
            className={`text-sm font-medium text-[#111418] transition-colors border-b-2 ${pathname === link.href ? 'border-[#2b8cee] text-[#2b8cee] font-bold' : 'border-transparent hover:border-[#2b8cee] hover:text-[#2b8cee] hover:font-bold'}`}>
            {link.name}
          </Link>
        ))}
      </nav>

      <div className="flex gap-3 items-center">
        {/* --- Các nút xác thực --- */}
        <Button variant="secondary" className="hidden sm:flex">
          Đăng nhập
        </Button>
        <Button variant="primary" className="hidden sm:flex">
          Đăng ký ngay
        </Button>
        
        {/* TÁI CẤU TRÚC: Toàn bộ logic và UI của menu di động được chuyển vào component riêng. */}
        {/* Lợi ích: Navbar trở nên tinh gọn, dễ đọc và dễ quản lý. */}
        <MobileMenu navLinks={navLinks} />
      </div>
    </header>
  );
};

export default Navbar;
