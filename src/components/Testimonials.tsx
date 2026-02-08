import React from 'react';
import ReviewCard from './ui/ReviewCard'; // TÁI CẤU TRÚC: Import component ReviewCard

// --- GIẢI THÍCH THAY ĐỔI ---
// FILE NÀY ĐÃ ĐƯỢC TÁI CẤU TRÚC ĐỂ SỬ DỤNG COMPONENT `ReviewCard`.
// 1. GỌN GÀNG & KHAI BÁO: JSX của mỗi thẻ đánh giá đã được chuyển vào `ReviewCard`. Component `Testimonials` giờ chỉ còn trách nhiệm quản lý dữ liệu và layout tổng thể.
// 2. DỄ BẢO TRÌ: Để thay đổi giao diện của tất cả các thẻ đánh giá, chỉ cần sửa file `ReviewCard.tsx`.
// 3. TÁI SỬ DỤNG: `ReviewCard` đã sẵn sàng để được sử dụng ở bất kỳ nơi nào khác trong ứng dụng.

const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: 'Minh Anh',
      role: 'Học sinh lớp 12 - THPT Chuyên',
      quote: 'Nhờ EnglishMaster mà mình đã đạt 7.5 IELTS chỉ sau 3 tháng ôn tập. Phần giải thích đáp án cực kỳ chi tiết giúp mình hiểu sâu vấn đề.',
      avatar: 'https://picsum.photos/id/64/100/100',
    },
    {
      name: 'Tuấn Kiệt',
      role: 'Sinh viên Đại học Bách Khoa',
      quote: 'Giao diện dễ sử dụng, bài tập phong phú. Tính năng theo dõi tiến độ giúp mình biết mình yếu ở đâu để cải thiện. Rất đáng tiền!',
      avatar: 'https://picsum.photos/id/65/100/100',
    },
    {
      name: 'Chị Lan',
      role: 'Phụ huynh học sinh lớp 5',
      quote: 'Con mình rất lười học tiếng Anh nhưng từ khi dùng app này, bé chủ động học hẳn. Hình ảnh sinh động, vừa học vừa chơi rất cuốn.',
      avatar: 'https://picsum.photos/id/66/100/100',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-blue-50">
      <div className="max-w-[1280px] mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-gray-900 text-3xl md:text-4xl font-bold mb-4">Cảm nhận từ học viên</h2>
          <p className="text-gray-600 text-lg">Hơn 10,000 học viên đã đạt mục tiêu. Bạn sẽ là người tiếp theo?</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <ReviewCard 
              key={idx} 
              name={review.name} 
              role={review.role} 
              quote={review.quote} 
              avatar={review.avatar} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
