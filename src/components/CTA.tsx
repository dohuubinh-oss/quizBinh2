import React from 'react';
import Link from 'next/link';
import { Button } from './ui/Button'; // IMPORT: Component Button

// --- GIẢI THÍCH THAY ĐỔI ---
// FILE NÀY ĐÃ ĐƯỢC CẬP NHẬT ĐỂ TÁI SỬ DỤNG COMPONENT `Button`.
// 1. TÍNH NHẤT QUÁN: Các thẻ <Link> được tạo kiểu thủ công đã được thay thế bằng component `<Button>`.
// 2. SỬ DỤNG `asChild`: Prop `asChild` được thêm vào component `<Button>` để nó render dưới dạng một thẻ `<Link>` (con của nó), kết hợp được cả styling của Button và chức năng routing của Next.js Link.
// 3. MÀU SẮC ĐẶC BIỆT: 
//    - Đối với nút "Đăng ký", tôi đã sử dụng `variant="special"` vì nó có nền trắng chữ xanh - một kiểu khác với các nút "primary" và "secondary" thông thường.
//    - Đối với nút "Xem bảng giá", tôi đã thêm một className tùy chỉnh `variant="outlineWhite"` để tạo viền trắng trên nền trong suốt.

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
          
          {/* SỬA LỖI: Đảo ngược Button và Link, sử dụng asChild đúng cách */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <Button variant="special" size="large" asChild>
              <Link href="/signup">Đăng ký miễn phí</Link>
            </Button>
            <Button variant="outlineWhite" size="large" asChild>
              <Link href="/pricing">Xem bảng giá</Link>
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTA;
