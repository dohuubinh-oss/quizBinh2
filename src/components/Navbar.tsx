
"use client";

import React, { useState } from 'react';
import { GraduationCap, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavLink } from '@/lib/data'; // Import kiểu NavLink

interface NavbarProps {
  navLinks: NavLink[];
}

const Navbar: React.FC<NavbarProps> = ({ navLinks }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-[#e5e7eb] bg-white/95 backdrop-blur-md px-4 sm:px-10 py-3">
      <Link href="/" className="flex items-center gap-2 text-[#111418] group cursor-pointer">
        <div className="text-[#2b8cee] transition-transform group-hover:scale-110">
          <GraduationCap size={32} />
        </div>
        <h2 className="text-xl font-black leading-tight tracking-[-0.015em]">EnglishMaster</h2>
      </Link>

      <nav className="hidden lg:flex items-center gap-8">
        {/* --- GIẢI THÍCH ---
            CẬP NHẬT: Thay đổi `link.label` thành `link.name`
            LÝ DO: Dữ liệu từ MongoDB sử dụng trường `name` để lưu tên của link, không phải `label`.
            LỢI ÍCH: Đảm bảo component hiển thị đúng tên link được lấy từ database.
        */}
        {navLinks.map((link) => (
          <Link
            key={link._id}
            href={link.href}
            className={`text-sm font-medium text-[#111418] transition-colors border-b-2 ${pathname === link.href ? 'border-[#2b8cee] text-[#2b8cee] font-bold' : 'border-transparent hover:border-[#2b8cee] hover:text-[#2b8cee] hover:font-bold'}`}>
            {link.name} {/* Thay đổi ở đây */}
          </Link>
        ))}
      </nav>

      <div className="flex gap-3 items-center">
        <button className="hidden sm:flex items-center justify-center rounded-full h-10 px-6 bg-transparent hover:bg-gray-100 text-[#111418] text-sm font-bold transition-colors">
          Đăng nhập
        </button>
        <button className="flex items-center justify-center rounded-full h-10 px-6 bg-[#2b8cee] hover:bg-blue-600 text-white text-sm font-bold shadow-md shadow-[#2b8cee]/20 transition-all hover:scale-105 active:scale-95">
          Đăng ký ngay
        </button>
        
        <button 
          className="lg:hidden p-2 text-[#111418]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-[#e5e7eb] p-4 flex flex-col gap-4 lg:hidden shadow-xl animate-in fade-in slide-in-from-top-4">
          {/* --- GIẢI THÍCH ---
              CẬP NHẬT: Thay đổi `link.label` thành `link.name` ở menu mobile.
              LÝ DO: Tương tự như trên, để đồng bộ với cấu trúc dữ liệu từ MongoDB.
              LỢI ÍCH: Menu trên mobile cũng sẽ hiển thị đúng tên link.
          */}
          {navLinks.map((link) => (
             <Link
                key={link._id}
                href={link.href}
                className={`text-lg font-medium p-2 rounded-md transition-colors hover:bg-gray-100 hover:text-[#2b8cee] ${pathname === link.href ? 'bg-gray-100 text-[#2b8cee]' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                {link.name} {/* Thay đổi ở đây */}
              </Link>
          ))}
          <button className="w-full h-12 rounded-xl bg-[#2b8cee] text-white font-bold mt-2">Bắt đầu học ngay</button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
