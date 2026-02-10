"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavLink } from '@/lib/definitions';
import Logo from './ui/Logo';
import { Button } from './ui/Button';
import MobileMenu from './ui/MobileMenu';

interface NavbarProps {
  navLinks: NavLink[];
}

const Navbar: React.FC<NavbarProps> = ({ navLinks }) => {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-[#e5e7eb] bg-white/95 backdrop-blur-md px-4 sm:px-10 py-3">
      <Logo />

      <nav className="hidden lg:flex items-center gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-sm font-medium text-[#111418] transition-colors border-b-2 ${pathname === link.href ? 'border-[#2b8cee] text-[#2b8cee] font-bold' : 'border-transparent hover:border-[#2b8cee] hover:text-[#2b8cee] hover:font-bold'}`}>
            {link.name}
          </Link>
        ))}
      </nav>

      <div className="flex gap-3 items-center">
        {/* ✨ GIẢI THÍCH THAY ĐỔI: Đổi văn bản của nút thành "Đăng nhập" theo yêu cầu. */}
        <Link href="/login">
          <Button variant="primary" className="hidden sm:flex">
            Đăng nhập
          </Button>
        </Link>
        
        <MobileMenu navLinks={navLinks} />
      </div>
    </header>
  );
};

export default Navbar;
