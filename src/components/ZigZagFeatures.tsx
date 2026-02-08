import React from 'react';
import Link from 'next/link';
import { TrendingUp, Gamepad2, ArrowRight } from 'lucide-react';
import FeatureRow from './ui/FeatureRow'; // TÁI CẤU TRÚC: Import component FeatureRow

// --- GIẢI THÍCH THAY ĐỔI ---
// FILE NÀY ĐÃ ĐƯỢC TÁI CẤU TRÚC HOÀN TOÀN ĐỂ SỬ DỤNG COMPONENT `FeatureRow`.
// 1. GỌN GÀNG & KHAI BÁO: Toàn bộ logic hiển thị phức tạp đã được chuyển vào `FeatureRow`. Component `ZigZagFeatures` giờ chỉ còn trách nhiệm khai báo dữ liệu cho mỗi hàng, làm cho code cực kỳ dễ đọc.
// 2. DỄ BẢO TRÌ: Nếu muốn thêm một hàng zig-zag mới, chỉ cần thêm một object vào mảng `featuresData` mà không cần đụng đến JSX.
// 3. TÁI SỬ DỤNG TỐI ĐA: Component này là minh chứng cho việc áp dụng thành công nguyên tắc "Don't Repeat Yourself" (DRY).

const featuresData = [
  {
    direction: 'left' as const,
    imageSrc: "https://images.unsplash.com/photo-1551288049-bbb6534647f1?q=80&w=1200",
    imageAlt: "Analytics Dashboard",
    tagIcon: <TrendingUp size={18} />,
    tagName: "Theo dõi tiến độ",
    tagBgColor: "bg-blue-100",
    tagTextColor: "text-blue-700",
    title: "Lộ trình học cá nhân hóa",
    description: "Không còn học lan man. Dựa trên kết quả bài kiểm tra đầu vào, EnglishMaster sẽ thiết kế một lộ trình riêng biệt, tập trung vào những kỹ năng bạn cần cải thiện nhất để đạt mục tiêu điểm số.",
    checklist: ['Xác định trình độ chính xác', 'Gợi ý bài tập theo ngày', 'Báo cáo tiến độ chi tiết'],
  },
  {
    direction: 'right' as const,
    imageSrc: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200",
    imageAlt: "Happy Students",
    tagIcon: <Gamepad2 size={18} />,
    tagName: "Gamification",
    tagBgColor: "bg-purple-100",
    tagTextColor: "text-purple-700",
    title: "Học mà chơi, chơi mà học",
    description: "Biến việc ôn thi nhàm chán thành những thử thách thú vị. Tích lũy điểm thưởng, leo bảng xếp hạng và nhận quà tặng hấp dẫn khi hoàn thành các cột mốc học tập.",
    actionLink: (
      <Link href="/features" className="flex items-center text-[#2b8cee] font-bold hover:underline gap-2 group">
        Xem các tính năng khác 
        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
      </Link>
    )
  }
];

const ZigZagFeatures: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 flex flex-col gap-24 lg:gap-32">
        {featuresData.map((feature, index) => (
          <FeatureRow key={index} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default ZigZagFeatures;
