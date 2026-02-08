import React, { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Check } from 'lucide-react';

// --- GIẢI THÍCH COMPONENT ---
// Component `FeatureRow` là một "UI Component" dùng chung.
// - Lý do: Được tách ra từ `ZigZagFeatures` để tái sử dụng và làm sạch code. Nó chịu trách nhiệm hiển thị một hàng duy nhất gồm hình ảnh và văn bản.
// - Props:
//   - direction: 'left' | 'right', quyết định vị trí của hình ảnh.
//   - imageSrc, imageAlt: thông tin cho ảnh.
//   - tagIcon, tagName: nội dung cho huy hiệu nhỏ (tag) phía trên tiêu đề.
//   - title, description: nội dung chính.
//   - checklist: một mảng các chuỗi để hiển thị danh sách các mục.
//   - actionLink: một component (ReactNode) để hiển thị một liên kết hoặc nút hành động.
// - Trường hợp sử dụng: Hiển thị các cặp tính năng (ảnh + chữ) theo layout xen kẽ.

interface FeatureRowProps {
  direction: 'left' | 'right';
  imageSrc: string;
  imageAlt: string;
  tagIcon: React.ReactNode;
  tagName: string;
  tagBgColor: string;
  tagTextColor: string;
  title: string;
  description: string;
  checklist?: string[];
  actionLink?: React.ReactNode;
}

const FeatureRow: React.FC<FeatureRowProps> = ({
  direction,
  imageSrc,
  imageAlt,
  tagIcon,
  tagName,
  tagBgColor,
  tagTextColor,
  title,
  description,
  checklist,
  actionLink
}) => {
  const imageOrder = direction === 'left' ? 'order-1' : 'order-2';
  const contentOrder = direction === 'left' ? 'order-2' : 'order-1';

  return (
    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
      {/* Cột hình ảnh */}
      <div className={`lg:w-1/2 ${imageOrder}`}>
        <div className="relative rounded-2xl overflow-hidden shadow-2xl group aspect-video">
          {direction === 'left' && (
            <div className="absolute inset-0 bg-[#2b8cee]/20 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
          )}
          <Image 
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>

      {/* Cột nội dung */}
      <div className={`lg:w-1/2 ${contentOrder}`}>
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${tagBgColor} ${tagTextColor} text-sm font-semibold mb-4`}>
          {tagIcon}
          <span>{tagName}</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
        <p className="text-lg text-gray-600 mb-6">
          {description}
        </p>
        
        {checklist && (
          <ul className="space-y-4 mb-6">
            {checklist.map((item, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <div className="bg-green-100 text-green-600 rounded-full p-1">
                  <Check size={16} strokeWidth={3} />
                </div>
                <span className="text-gray-900 font-medium">{item}</span>
              </li>
            ))}
          </ul>
        )}

        {actionLink}
      </div>
    </div>
  );
};

export default FeatureRow;
