'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';
import { useRouter } from 'next/navigation';

// 1. GIAO DIỆN USER ĐƯỢC CẬP NHẬT
// Thêm thuộc tính `role` để lưu trữ vai trò người dùng (ví dụ: 'student', 'teacher', 'admin')
// Điều này rất quan trọng để có thể phân quyền và hiển thị chức năng phù hợp.
interface User {
  _id: string;
  username: string;
  email: string;
  role: string; // <-- ĐÃ THÊM
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (user: User, token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Logic này không thay đổi. Nó sẽ tự động đọc và parse object user
    // (bao gồm cả `role`) từ localStorage khi ứng dụng tải lần đầu.
    try {
      const storedToken = localStorage.getItem('token');
      const storedUser = localStorage.getItem('user');
      if (storedToken && storedUser) {
        setToken(storedToken);
        setUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error("Failed to parse user from localStorage", error);
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    }
    setIsLoading(false);
  }, []);

  // Logic không đổi. Khi đăng nhập, ta lưu toàn bộ object user mới (đã có role)
  // và token vào state và localStorage.
  const login = useCallback((newUser: User, newToken: string) => {
    localStorage.setItem('token', newToken);
    localStorage.setItem('user', JSON.stringify(newUser));
    setToken(newToken);
    setUser(newUser);
    router.push('/');
  }, [router]);

  // Logic không đổi.
  const logout = useCallback(() => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setToken(null);
    setUser(null);
    router.push('/login');
  }, [router]);

  return (
    <AuthContext.Provider value={{ user, token, isAuthenticated: !!token, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Logic không đổi. Hook này vẫn sẽ trả về toàn bộ context, bao gồm cả `user` với thông tin `role` mới.
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
