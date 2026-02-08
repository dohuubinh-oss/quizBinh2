import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Check, ArrowRight, LucideProps } from 'lucide-react';

// --- GIẢI THÍCH THAY ĐỔI LỚN ---
// FILE NÀY ĐÃ ĐƯỢC CẬP NHẬT ĐỂ TRỞ THÀNH COMPONENT DO DỮ LIỆU ĐIỀU KHIỂN (DATA-DRIVEN).
// 1. PROPS THÔNG MINH HƠN:
//    - `tagIconComponent`: Nhận vào một component React (React.ElementType) thay vì một ReactNode đã được render. Điều này cho phép `FeatureRow` tự tạo element với kích thước mong muốn.
//    - `actionLink`: Nhận vào một object `{ href, text }` thay vì một component Link đã được build sẵn.
// 2. TỰ RENDER CÁC THÀNH PHẦN PHỨC TẠP:
//    - Icon: `React.createElement` được sử dụng để render component icon được truyền vào qua `tagIconComponent`.
//    - Link hành động: Component tự render thẻ `<Link>` của Next.js với đầy đủ style và icon `ArrowRight`, dựa trên dữ liệu từ prop `actionLink`.
// 3. TĂNG TÍNH ĐÓNG GÓI: Logic hiển thị (cách một icon hay một link trông như thế nào) giờ đây nằm hoàn toàn bên trong `FeatureRow`, giúp `ZigZagFeatures` chỉ cần tập trung vào việc "cung cấp dữ liệu gì".

interface FeatureRowProps {
  direction: 'left' | 'right';
  imageSrc: string;
  imageAlt: string;
  tagIconComponent: React.ElementType<LucideProps>; // THAY ĐỔI: Nhận component
  tagName: string;
  tagBgColor: string;
  tagTextColor: string;
  title: string;
  description: string;
  checklist?: string[];
  actionLink?: { href: string; text: string; }; // THAY ĐỔI: Nhận object
}

const FeatureRow: React.FC<FeatureRowProps> = ({
  direction,
  imageSrc,
  imageAlt,
  tagIconComponent,
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
          {/* THAY ĐỔI: Tự tạo icon */}
          {React.createElement(tagIconComponent, { size: 18 })}
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

        {/* THAY ĐỔI: Tự render Link */}
        {actionLink && (
            <Link href={actionLink.href} className="flex items-center text-[#2b8cee] font-bold hover:underline gap-2 group">
                <span>{actionLink.text}</span> 
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
        )}
      </div>
    </div>
  );
};

export default FeatureRow;
