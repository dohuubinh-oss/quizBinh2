'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavLink } from '@/lib/definitions';
import Logo from './ui/Logo';
import { Button } from './ui/Button';
import MobileMenu from './ui/MobileMenu';
import { useAuth } from '@/context/AuthContext'; // Import useAuth
import UserMenu from './ui/UserMenu'; // Import UserMenu

interface NavbarProps {
  navLinks: NavLink[];
}

const Navbar: React.FC<NavbarProps> = ({ navLinks }) => {
  const pathname = usePathname();
  // 1. LẤY THÊM THÔNG TIN `user`
  // Chúng ta không chỉ cần biết người dùng đã đăng nhập hay chưa (isAuthenticated),
  // mà còn cần biết họ là ai (thông tin `user`) để kiểm tra vai trò.
  const { isAuthenticated, isLoading, user } = useAuth();

  // 2. TẠO NAVLINK ĐỘNG CHO GIÁO VIÊN
  // Đây là một mảng mới chứa các link sẽ được thêm vào navbar
  // nếu người dùng có vai trò là 'teacher'.
  const teacherLinks: NavLink[] = [];
  if (user?.role === 'teacher') {
    teacherLinks.push({
      name: 'Teacher Dashboard',
      href: '/dashboard/teacher',
    });
  }

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-[#e5e7eb] bg-white/95 backdrop-blur-md px-4 sm:px-10 py-3">
      <Logo />

      <nav className="hidden lg:flex items-center gap-8">
        {/* 3. HIỂN THỊ CÁC LINK GỐC */}
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-sm font-medium text-[#111418] transition-colors border-b-2 ${pathname === link.href ? 'border-[#2b8cee] text-[#2b8cee] font-bold' : 'border-transparent hover:border-[#2b8cee] hover:text-[#2b8cee] hover:font-bold'}`}>
            {link.name}
          </Link>
        ))}
        
        {/* 4. HIỂN THỊ LINK CỦA GIÁO VIÊN (NẾU CÓ) */}
        {/* Sử dụng `map` để render mảng `teacherLinks`. Nếu người dùng không phải teacher, 
            mảng này sẽ rỗng và không có gì được render cả. Đây là cách làm code sạch và có điều kiện.*/}
        {teacherLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-sm font-medium text-[#111418] transition-colors border-b-2 ${pathname === link.href ? 'border-red-500 text-red-500 font-bold' : 'border-transparent hover:border-red-500 hover:text-red-500 hover:font-bold'}`}>
            {link.name}
          </Link>
        ))}
      </nav>

      <div className="flex gap-3 items-center">
        {!isLoading && (
          isAuthenticated ? (
            // UserMenu không đổi, nó sẽ nhận thông tin user từ context
            <UserMenu />
          ) : (
            <Link href="/login">
              <Button variant="primary" className="hidden sm:flex">
                Đăng nhập
              </Button>
            </Link>
          )
        )}
        
        {/* 5. CẬP NHẬT MOBILE MENU */}
        {/* Ta cần truyền cả `teacherLinks` vào MobileMenu để nó cũng có thể hiển thị link này trên giao diện mobile.*/}
        <MobileMenu navLinks={[...navLinks, ...teacherLinks]} />
      </div>
    </header>
  );
};

export default Navbar;
