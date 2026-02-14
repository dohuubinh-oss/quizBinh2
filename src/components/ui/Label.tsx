
import React from 'react';

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
  icon?: React.ReactElement; // Cho phép truyền vào một icon (component React)
}

/**
 * Label Component - v2 (Đã được nâng cấp)
 * 
 * @param children - Nội dung text của label.
 * @param icon - (Tùy chọn) Một icon để hiển thị bên cạnh text. Prop này giúp chuẩn hóa việc thêm icon vào label.
 * @param props - Các props chuẩn của thẻ <label> (ví dụ: htmlFor).
 * 
 * @description
 * Đây là phiên bản nâng cấp của component Label. So với phiên bản cũ, nó đã được khái quát hóa để:
 * 1. **Hỗ trợ Icon:** Dễ dàng thêm icon vào đầu mỗi label, giúp giao diện trực quan hơn.
 * 2. **Style nhất quán:** Áp dụng một bộ class chung (`text-base font-bold...`) phù hợp với thiết kế của trang tạo câu hỏi,
 *    thay vì các style quá cụ thể của phiên bản cũ.
 * 
 * Lợi ích:
 * - **Tái sử dụng cao:** Dùng được cho cả label có icon và không có icon.
 * - **Dễ bảo trì:** Thay đổi style của tất cả các label ở một nơi duy nhất.
 */
const Label: React.FC<LabelProps> = ({ children, icon, className, ...props }) => {
  // Các class mặc định cho label, phù hợp với thiết kế chung
  const baseClasses = "text-base font-bold flex items-center gap-3 text-gray-800";
  
  return (
    <label {...props} className={`${baseClasses} ${className || ''}`}>
      {icon} 
      {children}
    </label>
  );
};

export default Label;
