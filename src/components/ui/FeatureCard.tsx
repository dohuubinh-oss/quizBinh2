import React from 'react';

// --- GIẢI THÍCH COMPONENT ---
// Component `FeatureCard` là một "UI Component" dùng chung.
// - Lý do: Cấu trúc thẻ này (icon, tiêu đề, mô tả) có thể được tái sử dụng ở nhiều nơi khác trong trang web để hiển thị các tính năng, lợi ích, hoặc các mục thông tin tương tự. Việc tách ra giúp code ở component cha (WhyChooseUs) gọn hơn và dễ quản lý hơn.
// - Props:
//   - icon: ReactNode, dùng để hiển thị biểu tượng của tính năng.
//   - title: string, tiêu đề của tính năng.
//   - description: string, mô tả chi tiết về tính năng.
//   - color: string, các class CSS của Tailwind để định dạng màu cho icon.
// - Trường hợp sử dụng: Hiển thị một mục trong danh sách các tính năng, lợi ích sản phẩm, các bước trong một quy trình, v.v.

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, color }) => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[#2b8cee]/20 group hover:-translate-y-2">
      <div className={`size-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${color}`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
