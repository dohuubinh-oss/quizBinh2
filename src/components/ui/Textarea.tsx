
import React from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

/**
 * Textarea Component
 * 
 * @param props - Các props chuẩn của thẻ <textarea> (value, onChange, placeholder, className, ...).
 * 
 * @description
 * Component này chuẩn hóa giao diện cho tất cả các vùng nhập văn bản (textarea) trong ứng dụng.
 * Bằng cách trừu tượng hóa <textarea> ra component riêng, chúng ta đảm bảo rằng tất cả chúng đều có:
 * - Cùng một kiểu dáng (bo góc, viền, màu nền, hiệu ứng focus).
 * - Cùng một cách hoạt động.
 * 
 * Lợi ích:
 * - **Nhất quán:** Giao diện đồng bộ trên toàn trang.
 * - **Dễ dàng cập nhật:** Chỉ cần sửa đổi ở một nơi nếu muốn thay đổi giao diện của tất cả textarea.
 */
const Textarea: React.FC<TextareaProps> = ({ className, ...props }) => {
  const baseClasses = "w-full resize-none rounded-lg border border-gray-200 bg-gray-50 focus:border-[#2b8cee] focus:ring-2 focus:ring-[#2b8cee]/20 p-4 text-base transition-all";
  
  return (
    <textarea 
      className={`${baseClasses} ${className || ''}`}
      {...props}
    />
  );
};

export default Textarea;
