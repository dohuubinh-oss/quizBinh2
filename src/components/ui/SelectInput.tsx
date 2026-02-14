
import React from 'react';
import { ChevronDown } from 'lucide-react';

interface SelectInputProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: readonly string[];
}

/**
 * SelectInput Component
 * 
 * @param label - Nhãn hiển thị phía trên dropdown.
 * @param options - Một mảng các chuỗi (string) để hiển thị trong các thẻ <option>.
 * @param props - Các props chuẩn của thẻ <select> (ví dụ: value, onChange).
 * 
 * @description
 * Component này tạo ra một dropdown (thẻ select) với giao diện được chuẩn hóa.
 * Nó được sử dụng cho cả "Độ khó" và "Chủ đề" trong sidebar, thể hiện tính tái sử dụng.
 * 
 * Lợi ích:
 * - **Nhất quán:** Đảm bảo tất cả các dropdown trong ứng dụng có cùng một giao diện.
 * - **Gói gọn:** HTML và CSS cho một dropdown được gói gọn ở một nơi, làm sạch component cha.
 * - **Dễ bảo trì:** Thay đổi style ở một nơi, áp dụng cho tất cả.
 */
const SelectInput: React.FC<SelectInputProps> = ({ label, options, ...props }) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-bold text-gray-700">{label}</label>
      <div className="relative">
        <select 
          {...props}
          className="w-full appearance-none rounded-lg border border-gray-200 bg-gray-50 p-3 pr-8 text-base focus:border-[#2b8cee] focus:ring-1 focus:ring-[#2b8cee] transition-all cursor-pointer"
        >
          {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
        </select>
        <ChevronDown size={18} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400" />
      </div>
    </div>
  );
};

export default SelectInput;
