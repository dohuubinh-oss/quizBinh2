import React from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';

interface ReviewCardProps {
  name: string;
  role: string;
  quote: string;
  avatar: string;
}

// --- GIẢI THÍCH THAY ĐỔI ---
// Đã sửa lỗi `react/no-unescaped-entities`.
// - Lý do: Sử dụng ký tự ngoặc kép `"` trực tiếp trong JSX có thể gây ra lỗi hiển thị.
// - Giải pháp: Thay thế `"` bằng `&quot;` để đảm bảo nó được render một cách an toàn dưới dạng text.

const ReviewCard: React.FC<ReviewCardProps> = ({ name, role, quote, avatar }) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-md flex flex-col h-full hover:shadow-lg transition-shadow">
      <div className="flex items-center gap-1 text-yellow-400 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={18} fill="currentColor" />
        ))}
      </div>
      <p className="text-gray-900 text-lg font-medium italic mb-6 flex-1">
        &quot;{quote}&quot;
      </p>
      <div className="flex items-center gap-4">
        <Image src={avatar} alt={name} width={48} height={48} className="size-12 rounded-full object-cover" />
        <div>
          <p className="font-bold text-gray-900">{name}</p>
          <p className="text-sm text-[#2b8cee]">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
