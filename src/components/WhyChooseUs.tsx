import React from 'react';
import { BookOpen, Sparkles, Monitor } from 'lucide-react';
import FeatureCard from './ui/FeatureCard'; // TÁI CẤU TRÚC: Import component FeatureCard

// --- GIẢI THÍCH THAY ĐỔI ---
// FILE NÀY ĐÃ ĐƯỢC TÁI CẤU TRÚC ĐỂ SỬ DỤNG COMPONENT `FeatureCard`.
// 1. TĂNG TÍNH TÁI SỬ DỤNG: Logic hiển thị cho mỗi thẻ tính năng đã được chuyển vào `FeatureCard.tsx`.
// 2. CODE GỌN GÀNG HƠN: Vòng lặp `map` trong `WhyChooseUs` giờ đây chỉ cần gọi component `FeatureCard` và truyền props, giúp code dễ đọc và dễ bảo trì hơn.

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      title: 'Kho đề thi khổng lồ',
      description: 'Hàng ngàn đề thi sát với thực tế từ lớp 1 đến lớp 12, đề thi THPT Quốc gia và các chứng chỉ quốc tế như IELTS, TOEIC.',
      icon: <BookOpen size={32} />,
      color: 'bg-blue-50 text-[#2b8cee]',
    },
    {
      title: 'Phân tích AI thông minh',
      description: 'Hệ thống tự động chấm điểm, phân tích lỗi sai chi tiết và gợi ý bài tập khắc phục điểm yếu ngay lập tức.',
      icon: <Sparkles size={32} />,
      color: 'bg-purple-50 text-purple-600',
    },
    {
      title: 'Học mọi lúc mọi nơi',
      description: 'Ứng dụng đa nền tảng, đồng bộ dữ liệu giúp bạn tận dụng mọi khoảng thời gian rảnh rỗi để ôn luyện hiệu quả.',
      icon: <Monitor size={32} />,
      color: 'bg-orange-50 text-orange-600',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-[1280px] mx-auto px-4">
        <div className="text-center max-w-[720px] mx-auto mb-16">
          <h2 className="text-gray-900 text-3xl md:text-4xl font-bold leading-tight mb-4">
            Tại sao chọn EnglishMaster?
          </h2>
          <p className="text-gray-600 text-lg">
            Phương pháp học tập hiện đại kết hợp công nghệ AI giúp tối ưu hóa thời gian và nâng cao hiệu quả ôn luyện.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* TÁI CẤU TRÚC: Sử dụng component FeatureCard */}
          {features.map((feature, idx) => (
            <FeatureCard
              key={idx}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              color={feature.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
