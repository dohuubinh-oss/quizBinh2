'use client';

import React, { useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { jwtDecode } from 'jwt-decode';
import { Loader2 } from 'lucide-react';

// Định nghĩa kiểu dữ liệu cho payload của token đã giải mã để an toàn hơn
interface DecodedToken {
  id: string;
  username: string;
  email: string;
  // Thêm các trường khác từ JWT payload của bạn nếu có, ví dụ: role, plan
  iat: number;
  exp: number;
}

function SocialCallback() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { login } = useAuth();

  useEffect(() => {
    const token = searchParams.get('token');

    if (token) {
      try {
        // Giải mã token để lấy thông tin người dùng
        const decodedToken = jwtDecode<DecodedToken>(token);

        // Tái cấu trúc đối tượng user theo định dạng mà AuthContext mong đợi
        const user = {
          _id: decodedToken.id,       // Giả định payload có `id`
          name: decodedToken.username,  // Giả định payload có `username`
          email: decodedToken.email,    // Giả định payload có `email`
        };

        // Gọi hàm login từ context
        login(user, token);
        
        // AuthContext sẽ tự động chuyển hướng, nhưng đây là phương án dự phòng
        router.push('/');

      } catch (error) {
        console.error("Lỗi giải mã token hoặc đăng nhập:", error);
        // Nếu token không hợp lệ, chuyển về trang đăng nhập với thông báo lỗi
        router.push('/login?error=invalid_token');
      }
    } else {
      // Nếu không tìm thấy token, chuyển về trang đăng nhập
      console.error("Không tìm thấy token trong URL.");
      router.push('/login?error=no_token');
    }
  }, [searchParams, login, router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="flex items-center gap-4 text-gray-700">
        <Loader2 className="h-8 w-8 animate-spin text-[#2b8cee]" />
        <p className="text-xl font-semibold">Đang hoàn tất đăng nhập...</p>
      </div>
      <p className="mt-4 text-gray-500">Vui lòng đợi trong giây lát, chúng tôi đang chuyển bạn về trang chủ.</p>
    </div>
  );
}

// Bọc component trong <Suspense> theo yêu cầu của useSearchParams
export default function SocialCallbackPage() {
    return (
        <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Đang tải...</div>}>
            <SocialCallback />
        </Suspense>
    );
}
