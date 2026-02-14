
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'article'; // Allow specifying the root element type
}

/**
 * Card Component
 * 
 * @param children - Nội dung bên trong card.
 * @param className - Các class CSS bổ sung để tùy chỉnh.
 * @param as - (Tùy chọn) Thẻ HTML gốc để render (mặc định là 'div').
 * 
 * @description
 * Đây là một component UI chung, có thể tái sử dụng để tạo các khung (container) cho nội dung.
 * Việc tách Card ra thành một component riêng giúp:
 * - **Nhất quán:** Đảm bảo tất cả các "thẻ" trong ứng dụng có cùng một kiểu dáng và cấu trúc cơ bản.
 * - **Dễ bảo trì:** Nếu cần thay đổi thiết kế của tất cả các card (ví dụ: đổi bo góc, đổ bóng), 
 *   chỉ cần sửa ở một nơi duy nhất.
 * - **Tái sử dụng:** Có thể dùng cho bất kỳ loại nội dung nào cần được bao bọc trong một khung trực quan.
 */
const Card: React.FC<CardProps> = ({ children, className = '', as: Component = 'div' }) => {
  const baseClasses = "bg-white rounded-xl p-6 shadow-sm border border-gray-200 flex flex-col gap-5";
  
  return (
    <Component className={`${baseClasses} ${className}`}>
      {children}
    </Component>
  );
};

export default Card;
