import React from 'react';
import { TrendingUp, Gamepad2, LucideProps } from 'lucide-react';
import FeatureRow from './ui/FeatureRow';

// --- GIẢI THÍCH THAY ĐỔI ---
// Đã xóa các import không sử dụng (`Link` và `ArrowRight`) để sửa cảnh báo của linter và giữ cho code sạch sẽ.

const iconMap: { [key: string]: React.ElementType<LucideProps> } = {
  TrendingUp,
  Gamepad2,
};

const featuresData = [
  {
    direction: 'left' as const,
    imageSrc: "https://images.unsplash.com/photo-1551288049-bbb6534647f1?q=80&w=1200",
    imageAlt: "Analytics Dashboard",
    tagIcon: "TrendingUp",
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
    tagIcon: "Gamepad2",
    tagName: "Gamification",
    tagBgColor: "bg-purple-100",
    tagTextColor: "text-purple-700",
    title: "Học mà chơi, chơi mà học",
    description: "Biến việc ôn thi nhàm chán thành những thử thách thú vị. Tích lũy điểm thưởng, leo bảng xếp hạng và nhận quà tặng hấp dẫn khi hoàn thành các cột mốc học tập.",
    actionLink: {
      text: "Xem các tính năng khác",
      href: "/features",
    }
  }
];

const ZigZagFeatures: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 flex flex-col gap-24 lg:gap-32">
        {featuresData.map((feature, index) => (
          <FeatureRow 
            key={index} 
            {...feature} 
            tagIconComponent={iconMap[feature.tagIcon]} 
          />
        ))}
      </div>
    </section>
  );
};

export default ZigZagFeatures;
