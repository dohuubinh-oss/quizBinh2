import { connectToDatabase } from './mongodb';
import type { NavLink, FooterContent } from './definitions';

// Hàm này sẽ được dùng trong Server Components để lấy tất cả dữ liệu cần thiết cho layout.
export async function getLayoutData() {
  try {
    const { db } = await connectToDatabase();

    // 1. CẬP NHẬT PROMISE.ALL
    // Thêm một truy vấn nữa để lấy teacherNavLinks.
    // `Promise.all` vẫn là cách hiệu quả nhất để chạy các truy vấn này song song.
    const [navLinks, teacherNavLinks, footerContent] = await Promise.all([
      // Truy vấn cho navlinks (không đổi)
      db.collection<NavLink>('navlinks').find({}).sort({ order: 1 }).toArray(),
      
      // 2. TRUY VẤN MỚI CHO TEACHERNAVLINKS
      // - Chúng ta nhắm tới collection `teachernavlinks`.
      // - Dùng lại model `NavLink` vì cấu trúc tương tự.
      // - Thêm `.sort({ order: 1 })` để sắp xếp menu dựa trên trường `order`.
      //   (Bạn cần đảm bảo có trường `order: <number>` trong các document của collection này).
      db.collection<NavLink>('teachernavlinks').find({}).sort({ order: 1 }).toArray(),
      
      // Truy vấn cho footer (không đổi)
      db.collection<FooterContent>('footers').findOne({}),
    ]);

    if (!footerContent) {
      // Cảnh báo này vẫn hữu ích
      console.warn('Không tìm thấy dữ liệu cho footer.');
    }

    // 3. CẬP NHẬT GIÁ TRỊ TRẢ VỀ
    // Trả về cả `teacherNavLinks` đã được lấy từ database.
    // Việc sử dụng JSON.parse(JSON.stringify(...)) vẫn rất quan trọng để đảm bảo
    // các đối tượng có thể được truyền từ Server Component sang Client Component một cách an toàn.
    return {
      navLinks: JSON.parse(JSON.stringify(navLinks)),
      teacherNavLinks: JSON.parse(JSON.stringify(teacherNavLinks)), // <-- ĐÃ THÊM
      footerContent: JSON.parse(JSON.stringify(footerContent)),
    };

  } catch (error) {
    console.error('Lỗi nghiêm trọng khi lấy dữ liệu layout:', error);
    // Ném lỗi để Next.js có thể bắt và hiển thị trang lỗi (error.tsx)
    throw new Error('Không thể tải dữ liệu cần thiết cho layout của trang.');
  }
}
