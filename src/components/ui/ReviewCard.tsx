import React from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';

// --- GIẢI THÍCH COMPONENT ---
// Component `ReviewCard` là một "UI Component" dùng chung.
// - Lý do: Được tách ra từ `Testimonials` để tái sử dụng và làm sạch code. Nó chịu trách nhiệm hiển thị một thẻ đánh giá duy nhất.
// - Props:
//   - name: Tên của người đánh giá.
//   - role: Vai trò/chức danh của người đánh giá.
//   - quote: Nội dung trích dẫn/đánh giá.
//   - avatar: URL hình ảnh đại diện của người đánh giá.
// - Trường hợp sử dụng: Hiển thị các đánh giá của người dùng một cách nhất quán.

interface ReviewCardProps {
  name: string;
  role: string;
  quote: string;
  avatar: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ name, role, quote, avatar }) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-md flex flex-col h-full hover:shadow-lg transition-shadow">
      <div className="flex items-center gap-1 text-yellow-400 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={18} fill="currentColor" />
        ))}
      </div>
      <p className="text-gray-900 text-lg font-medium italic mb-6 flex-1">
        \"{quote}\"
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
