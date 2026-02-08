"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { NavLink } from '@/lib/data';
import { Button } from './Button';

interface MobileMenuProps {
  navLinks: NavLink[];
}

/**
 * MobileMenu là component quản lý toàn bộ trải nghiệm điều hướng trên thiết bị di động.
 * Nó chứa state để đóng/mở, nút hamburger, và panel menu.
 * @param navLinks - Mảng các link điều hướng để hiển thị trong menu.
 */
const MobileMenu: React.FC<MobileMenuProps> = ({ navLinks }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="lg:hidden">
      {/* Nút Hamburger/Close */}
      <button 
        className="p-2 text-[#111418]"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Đóng menu" : "Mở menu"}
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Panel Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-[#e5e7eb] p-4 flex flex-col gap-4 shadow-xl animate-in fade-in slide-in-from-top-4">
          {navLinks.map((link) => (
             <Link
                key={link._id}
                href={link.href}
                className={`text-lg font-medium p-2 rounded-md transition-colors hover:bg-gray-100 hover:text-[#2b8cee] ${pathname === link.href ? 'bg-gray-100 text-[#2b8cee]' : ''}`}
                onClick={() => setIsOpen(false)} // Đóng menu khi click vào link
              >
                {link.name}
              </Link>
          ))}
          <Button variant="primary" size="large" className="w-full mt-2">
            Bắt đầu học ngay
          </Button>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
