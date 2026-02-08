import { connectToDatabase } from './mongodb';
import type { NavLink, FooterContent } from './definitions';

// Hàm này sẽ được dùng trong Server Components để lấy tất cả dữ liệu cần thiết cho layout.
export async function getLayoutData() {
  try {
    const { db } = await connectToDatabase();

    // Sử dụng Promise.all để thực hiện các truy vấn song song
    const [navLinks, footerContent] = await Promise.all([
      db.collection<NavLink>('navlinks').find({}).toArray(),
      db.collection<FooterContent>('footers').findOne({}),
    ]);

    if (!footerContent) {
      console.warn('Không tìm thấy dữ liệu cho footer.');
    }

    // Dùng JSON.parse(JSON.stringify(...)) là một cách an toàn và đơn giản
    // để chuyển đổi các đối tượng từ BSON thành các đối tượng JavaScript thuần túy.
    return {
      navLinks: JSON.parse(JSON.stringify(navLinks)),
      footerContent: JSON.parse(JSON.stringify(footerContent)),
    };

  } catch (error) {
    console.error('Lỗi nghiêm trọng khi lấy dữ liệu layout:', error);
    // Ném lỗi để Next.js có thể bắt và hiển thị trang lỗi (error.tsx)
    throw new Error('Không thể tải dữ liệu cần thiết cho layout của trang.');
  }
}
