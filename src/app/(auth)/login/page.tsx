'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, Lock, Eye, EyeOff, AlertCircle, User, CheckCircle } from 'lucide-react';
import Logo from '@/components/ui/Logo';
import SocialButton from '@/components/ui/SocialButton';
import AuthInput from '@/components/ui/AuthInput';
import { useAuth } from '@/context/AuthContext';

export default function AuthenticationPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginTab, setIsLoginTab] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccessMessage(null);

    try {
      if (isLoginTab) {
        const response = await fetch('/api/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
        });
        
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || 'Email hoặc mật khẩu không chính xác.');
        }

        const { token, ...userData } = data;

        if (token && userData && userData._id) {
          const userForContext = {
            _id: userData._id,
            username: userData.username,
            email: userData.email,
          };
          login(userForContext, token);
        } else {
          setError('Phản hồi từ máy chủ không chứa token hoặc thông tin người dùng cần thiết.');
        }

      } else {
        const response = await fetch('/api/auth/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, email, password }),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || 'Đăng ký không thành công. Vui lòng thử lại.');
        }

        const { token, ...userData } = data;

        if (token && userData && userData._id) {
           const userForContext = {
            _id: userData._id,
            username: userData.username,
            email: userData.email,
          };
          login(userForContext, token);
        } else {
          setSuccessMessage(data.message || 'Đăng ký thành công! Bạn có thể đăng nhập ngay bây giờ.');
          handleTabChange(true);
        }
      }

    } catch (err: unknown) {
        if (err instanceof Error) {
            setError(err.message);
        } else {
            setError('Không thể kết nối đến máy chủ. Vui lòng kiểm tra lại backend và cấu hình proxy.');
        }
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleSocialLogin = (provider: 'google') => {
    // Chuyển hướng trình duyệt đến backend để bắt đầu quy trình OAuth
    window.location.href = '/api/auth/google';
  };

  const handleTabChange = (isLogin: boolean) => {
    setIsLoginTab(isLogin);
    setError(null);
    setSuccessMessage(null);
    setUsername('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="flex min-h-screen w-full overflow-hidden">
      <div className="hidden lg:flex lg:w-1/2 relative bg-[#2b8cee]/10 items-center justify-center p-12 overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#2b8cee]/20 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-3xl opacity-50"></div>
        <div className="relative z-10 w-full max-w-lg flex flex-col gap-8">
          <div className="rounded-2xl overflow-hidden shadow-2xl transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
            <div className="relative aspect-[4/3] w-full">
              <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_p_gQSZYe679PowBmF25a2JHuvb_sYerNB4q3Skhf9soeVvo-RO9f4s61lkKv-z1FqOMBDzbTVBJe68TBahzWuC3cvmxODgQE7ODayCoFglwSM2XWdKoot_uhA_edszqz34cYJE0Pcc2RlSnjP_bMFl91hkI7jPs4kj9JWwa2xhkpMao_uraVZgqfrlt-QG70BcOwOyCSNscfWwlMgR85iVdN6n22NaVeAL9aRfr18p8VgibQLRZEESfjGvJozSRK9vZk681WRIxe" 
                alt="English learning illustration" 
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          <div className="space-y-4 text-center lg:text-left p-4">
            <h2 className="text-3xl font-bold text-[#111418] leading-tight">Chinh phục tiếng Anh,<br />mở rộng tương lai.</h2>
            <p className="text-lg text-[#617589]">Hệ thống bài tập trắc nghiệm thông minh giúp bạn luyện thi chứng chỉ quốc tế và đạt điểm cao ở trường.</p>
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-2">
              <div className="flex -space-x-3">
                <Image alt="Student" className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://picsum.photos/id/64/100/100" width={40} height={40} />
                <Image alt="Student" className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://picsum.photos/id/65/100/100" width={40} height={40} />
                <Image alt="Student" className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://picsum.photos/id/66/100/100" width={40} height={40} />
                <div className="w-10 h-10 rounded-full border-2 border-white bg-[#2b8cee] flex items-center justify-center text-white text-xs font-bold shadow-sm">+2k</div>
              </div>
              <span className="text-sm font-medium text-[#617589]">Học sinh đã tham gia</span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col h-full bg-white overflow-y-auto">
        <div className="p-6 lg:p-8 flex justify-between items-center">
          <Logo />
          <Link href="/help" className="text-sm font-medium text-[#617589] hover:text-[#2b8cee] transition-colors lg:hidden">Trợ giúp?</Link>
        </div>
        <div className="flex-1 flex flex-col justify-center px-6 sm:px-12 lg:px-24 xl:px-32 py-8">
          <div className="max-w-md w-full mx-auto space-y-8">
            <div className="text-center space-y-2">
              <h1 className="text-3xl font-bold text-[#111418] tracking-tight">{isLoginTab ? 'Chào mừng trở lại!' : 'Tham gia cùng chúng tôi!'}</h1>
              <p className="text-[#617589]">{isLoginTab ? 'Vui lòng nhập thông tin để đăng nhập.' : 'Tạo tài khoản để bắt đầu học ngay.'}</p>
            </div>
            <div className="w-full">
              <div className="flex border-b border-[#dbe0e6]">
                <button onClick={() => handleTabChange(true)} className={`flex-1 pb-3 pt-2 text-center border-b-[3px] font-bold text-sm transition-colors ${isLoginTab ? 'border-[#2b8cee] text-[#2b8cee]' : 'border-transparent text-[#617589]'}`}>Đăng nhập</button>
                <button onClick={() => handleTabChange(false)} className={`flex-1 pb-3 pt-2 text-center border-b-[3px] font-bold text-sm transition-colors ${!isLoginTab ? 'border-[#2b8cee] text-[#2b8cee]' : 'border-transparent text-[#617589]'}`}>Đăng ký</button>
              </div>
            </div>

            {successMessage && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg relative flex items-center gap-2" role="alert">
                <CheckCircle size={18} />
                <span className="block sm:inline text-sm">{successMessage}</span>
              </div>
            )}
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg relative flex items-center gap-2" role="alert">
                <AlertCircle size={18} />
                <span className="block sm:inline text-sm">{error}</span>
              </div>
            )}

            <form className="space-y-5" onSubmit={handleSubmit}>
              {!isLoginTab && (
                  <div className="space-y-2">
                      <label htmlFor="username" className="block text-sm font-medium text-[#111418]">Tên người dùng</label>
                      <AuthInput id="username" type="text" placeholder="John Doe" value={username} onChange={(e) => setUsername(e.target.value)} icon={<User size={18} />} required />
                  </div>
              )}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-[#111418]">Địa chỉ Email</label>
                <AuthInput id="email" type="email" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} icon={<Mail size={18} />} required />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium text-[#111418]">Mật khẩu</label>
                  {isLoginTab && <Link href="/forgot-password" className="text-sm font-semibold text-[#2b8cee] hover:text-blue-600">Quên mật khẩu?</Link>}
                </div>
                <AuthInput id="password" type={showPassword ? "text" : "password"} placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} icon={<Lock size={18} />} required className="pr-10">
                  <button onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#617589] hover:text-[#111418] transition-colors" type="button">
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </AuthInput>
              </div>
              
              <button type="submit" disabled={isLoading} className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white bg-[#2b8cee] hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2b8cee] transition-all transform active:scale-[0.98] disabled:bg-blue-300 disabled:cursor-not-allowed">
                {isLoading ? 'Đang xử lý...' : (isLoginTab ? 'Bắt đầu học ngay' : 'Tạo tài khoản và bắt đầu')}
              </button>
            </form>

            <div className="relative">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-[#dbe0e6]"></div></div>
              <div className="relative flex justify-center text-sm"><span className="px-2 bg-white text-[#617589]">Hoặc tiếp tục với</span></div>
            </div>
            
            <div className="grid grid-cols-1 gap-3">
              <SocialButton provider="google" onClick={() => handleSocialLogin('google')} />
            </div>

            <div className="text-center pt-2">
              <p className="text-sm text-[#617589]">{isLoginTab ? 'Bạn chưa có tài khoản?' : 'Đã có tài khoản?'} <button onClick={() => handleTabChange(!isLoginTab)} className="font-bold text-[#2b8cee] hover:underline ml-1">{isLoginTab ? 'Đăng ký miễn phí' : 'Đăng nhập ngay'}</button></p>
            </div>
          </div>
        </div>
        <div className="py-6 text-center text-xs text-[#9aa6b2]">
          © 2024 EnglishMaster. All rights reserved. <br />
          <Link href="/terms" className="hover:text-[#2b8cee]">Điều khoản</Link> • <Link href="/privacy" className="hover:text-[#2b8cee]">Bảo mật</Link>
        </div>
      </div>
    </div>
  );
}
