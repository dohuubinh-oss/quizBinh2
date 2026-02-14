
import React from 'react';

interface AnswerInputProps {
  option: string;
  index: number;
  isChecked: boolean;
  onCheck: () => void;
  onUpdate: (value: string) => void;
}

/**
 * AnswerInput Component
 * 
 * @param option - Giá trị (text) của phương án trả lời.
 * @param index - Vị trí của phương án (0, 1, 2, ...).
 * @param isChecked - Trạng thái radio button có được chọn hay không.
 * @param onCheck - Hàm callback khi người dùng chọn radio button.
 * @param onUpdate - Hàm callback khi người dùng thay đổi text trong input.
 * 
 * @description
 * Component này đại diện cho một hàng trong danh sách các phương án trả lời.
 * Nó bao gồm một radio button để chọn đáp án đúng và một text input để nhập nội dung đáp án.
 * Việc tách ra component riêng giúp:
 * - **Gói gọn logic:** Logic cho một đáp án (hiển thị, cập nhật) được quản lý ở một nơi.
 * - **Làm sạch component cha:** Component cha (trang tạo câu hỏi) sẽ chỉ cần lặp qua danh sách đáp án
 *   và render component này, thay vì chứa tất cả logic render phức tạp.
 * - **Dễ bảo trì:** Nếu muốn thay đổi cách một hàng đáp án hiển thị, chỉ cần sửa ở đây.
 */
const AnswerInput: React.FC<AnswerInputProps> = ({ option, index, isChecked, onCheck, onUpdate }) => {
  const character = String.fromCharCode(65 + index);

  return (
    <div className="flex items-center gap-4">
      <input 
        checked={isChecked}
        onChange={onCheck}
        className="size-5 border-2 border-gray-300 text-[#2b8cee] focus:ring-[#2b8cee]/50 cursor-pointer transition-all shrink-0 mt-0.5"
        name="correct_answer" 
        type="radio"
      />
      <div className="flex-1">
        <input 
          value={option}
          onChange={(e) => onUpdate(e.target.value)}
          className={`w-full rounded-lg border p-3.5 text-base transition-all ${isChecked ? 'border-[#2b8cee] bg-[#2b8cee]/5 font-semibold shadow-inner' : 'border-gray-200 bg-gray-50'}`}
          placeholder={`Đáp án ${character}...`}
          type="text" 
        />
      </div>
    </div>
  );
};

export default AnswerInput;
