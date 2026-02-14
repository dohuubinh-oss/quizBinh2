'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { LogOut } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

const UserMenu = () => {
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  if (!user) {
    return null;
  }

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-sm font-medium text-[#111418] hover:text-[#2b8cee] transition-colors focus:outline-none"
      >
        <Image
          // Using a placeholder image based on user email to have some variation
          src={`https://picsum.photos/seed/${user.email}/40/40`}
          alt={user.username || 'User Avatar'}
          width={32}
          height={32}
          className="rounded-full object-cover border-2 border-transparent group-hover:border-primary-500"
        />
        <span className="hidden sm:inline font-semibold">{user.username}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg py-2 z-50 border border-[#e5e7eb] ring-1 ring-black ring-opacity-5">
          <div className="px-4 py-3 border-b border-[#e5e7eb]">
            <p className="text-sm font-semibold text-[#111418]">{user.username}</p>
            <p className="text-sm text-[#617589] truncate">{user.email}</p>
          </div>
          <div className="py-1">
            <button
              onClick={() => {
                logout();
                setIsOpen(false);
              }}
              className="w-full text-left flex items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50 hover:text-red-700 transition-colors"
            >
              <LogOut size={16} />
              <span>Đăng xuất</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
