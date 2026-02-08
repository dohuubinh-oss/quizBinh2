import React from 'react';
import Image from 'next/image';
import { Check, ArrowRight, HelpCircle } from 'lucide-react';
import { Button } from './ui/Button';

// --- GIẢI THÍCH THAY ĐỔI ---
// FILE NÀY ĐÃ ĐƯỢC RÀ SOÁT VÀ CẬP NHẬT THEO CÁC NGUYÊN TẮC MỚI:
// 1. LOẠI BỎ DARK MODE: Tất cả các class `dark:` đã được xóa để chỉ giữ lại giao diện sáng.
// 2. ĐỒNG BỘ MÀU SẮC: 
//    - Màu primary đã được đặt là `[#2b8cee]`.
//    - Màu text chính `text-[#111418]` đã được đổi thành `text-gray-900` của Tailwind cho nhất quán.
// 3. CHUẨN NEXT.JS: Component đã sử dụng `<Image>` và không có thẻ `<a>`.
// 4. TÁI SỬ DỤNG: Các nút bấm đã sử dụng component `<Button />` từ `components/ui`.
// 5. GIỮ NGUYÊN GIAO DIỆN: Cấu trúc HTML và các className khác được giữ nguyên để không làm thay đổi layout.

const Hero: React.FC = () => {
  return (
    <section className="relative px-4 py-12 md:py-20 lg:py-28 overflow-hidden bg-white">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-[#2b8cee]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-blue-400/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 relative z-10">
        <div className="flex flex-col gap-6 lg:w-1/2 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2b8cee]/10 border border-[#2b8cee]/20 text-[#2b8cee] text-sm font-semibold w-fit mx-auto lg:mx-0">
            <Check size={18} strokeWidth={3} />
            <span>#1 Nền tảng ôn thi trắc nghiệm</span>
          </div>

          <h1 className="text-gray-900 text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.033em]">
            Chinh phục tiếng Anh <br className="hidden lg:block" />
            <span className="text-[#2b8cee] relative inline-block">
              qua từng câu hỏi
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#2b8cee]/30" preserveAspectRatio="none" viewBox="0 0 100 10">
                <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="8"></path>
              </svg>
            </span>
          </h1>

          <p className="text-[#4b5563] text-lg font-normal leading-relaxed max-w-[600px] mx-auto lg:mx-0">
            Hệ thống ôn luyện thông minh dành cho học sinh phổ thông và luyện thi IELTS/TOEIC. Công nghệ AI phân tích điểm yếu giúp bạn bứt phá điểm số trong thời gian ngắn nhất.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-4">
            <Button variant="primary" size="large">
              <span className="mr-2">Bắt đầu học ngay</span>
              <ArrowRight size={20} />
            </Button>
            <Button variant="secondary" size="large" className="border border-[#e5e7eb]">
              <span className="mr-2">Thi thử miễn phí</span>
              <HelpCircle size={20} />
            </Button>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-4 mt-6 text-sm text-[#6b7280]">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                  <Image src={`https://picsum.photos/id/${i + 20}/64/64`} alt={`Học viên ${i}`} width={32} height={32} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <p><span className="font-bold text-gray-900">10,000+</span> học viên tin dùng</p>
          </div>
        </div>

        <div className="lg:w-1/2 relative">
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
            <Image 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200" 
              alt="Học sinh đang học bài"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              priority
            />
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur p-4 rounded-xl shadow-lg border border-gray-100 animate-bounce-slow">
              <div className="flex items-center gap-3 mb-2">
                <div className="size-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <Check size={20} strokeWidth={3} />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">Kết quả bài thi gần nhất</p>
                  <p className="text-sm font-bold text-gray-900">IELTS Mock Test #4: <span className="text-green-600">7.5 Overall</span></p>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5 mb-1">
                <div className="bg-green-500 h-1.5 rounded-full transition-all duration-1000" style={{ width: '75%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
