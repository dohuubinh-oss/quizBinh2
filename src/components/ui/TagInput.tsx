'use client';

import React, { useState } from 'react';
import { X } from 'lucide-react';

interface TagInputProps {
  tags: string[];
  setTags: (tags: string[]) => void;
}

/**
 * TagInput Component
 * 
 * @param tags - Mảng các tag hiện tại.
 * @param setTags - Hàm để cập nhật mảng tag.
 * 
 * @description
 * Component này cung cấp một trường nhập liệu cho phép người dùng thêm và xóa các "tag" (thẻ).
 * Nó đóng gói hoàn toàn logic: nhập text, nhấn Enter để thêm, và nhấn nút X để xóa.
 * 
 * Lợi ích:
 * - **Đóng gói Logic:** Component cha không cần quan tâm đến cách tag được thêm/xóa.
 * - **Tái sử dụng:** Có thể dễ dàng sử dụng ở bất kỳ đâu cần chức năng nhập tag.
 * - **Tương tác người dùng tốt hơn:** Cung cấp phản hồi tức thì khi thêm/xóa tag.
 */
const TagInput: React.FC<TagInputProps> = ({ tags, setTags }) => {
  const [inputValue, setInputValue] = useState('');

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      e.preventDefault();
      if (!tags.includes(inputValue.trim())) {
        setTags([...tags, inputValue.trim()]);
      }
      setInputValue('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-bold text-gray-700">Thẻ (Tags)</label>
      <div className="flex flex-wrap items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 p-2">
        {tags.map((tag) => (
          <span key={tag} className="flex items-center gap-1.5 rounded bg-[#2b8cee]/10 px-2 py-1 text-xs font-medium text-[#2b8cee]">
            {tag}
            <button type="button" onClick={() => removeTag(tag)} className="hover:text-red-500">
              <X size={14} />
            </button>
          </span>
        ))}
        <input 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent p-1 text-sm placeholder-gray-400 focus:outline-none min-w-[120px]"
          placeholder={tags.length === 0 ? "Nhập tag và nhấn Enter..." : "Thêm tag..."}
          type="text"
        />
      </div>
    </div>
  );
};

export default TagInput;
