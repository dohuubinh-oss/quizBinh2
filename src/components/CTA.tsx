import React from 'react';
import Link from 'next/link';

// --- GIẢI THÍCH THAY ĐỔI ---
// FILE NÀY ĐÃ ĐƯỢC TẠO MỚI VÀ TUÂN THỦ CÁC NGUYÊN TẮC:
// 1. LOẠI BỎ DARK MODE: Class `dark:` đã được xóa.
// 2. ĐỒNG BỘ MÀU SẮC: Class `bg-primary` và `text-primary` đã được thay thế bằng mã màu [#2b8cee] tương ứng.
// 3. CHUẨN NEXT.JS: Các thẻ `<button>` điều hướng đã được chuyển đổi thành component `<Link>` của `next/link` để có ngữ nghĩa tốt hơn.
// 4. XỬ LÝ CLASS TÙY CHỈNH: Class `font-body` và `animate-fade-in` không thuộc Tailwind mặc định đã được loại bỏ để đảm bảo tính nhất quán.

const CTA: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-[960px] mx-auto">
        <div className="bg-[#2b8cee] rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden group">
          {/* Hiệu ứng nền */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl transition-transform group-hover:scale-150 duration-1000"></div>
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-black opacity-10 rounded-full blur-3xl transition-transform group-hover:scale-150 duration-1000"></div>
          
          <h2 className="text-3xl md:text-5xl font-black mb-6 relative z-10">
            Sẵn sàng bứt phá điểm số?
          </h2>
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto mb-10 relative z-10">
            Đăng ký ngay hôm nay để nhận 7 ngày trải nghiệm Full tính năng Premium hoàn toàn miễn phí.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <Link href="/signup" className="flex items-center justify-center h-14 px-10 rounded-full bg-white text-[#2b8cee] text-lg font-bold shadow-lg hover:bg-gray-50 transition-all hover:-translate-y-1 active:scale-95">
              Đăng ký miễn phí
            </Link>
            <Link href="/pricing" className="flex items-center justify-center h-14 px-10 rounded-full bg-transparent border-2 border-white text-white text-lg font-bold hover:bg-white/10 transition-all active:scale-95">
              Xem bảng giá
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
