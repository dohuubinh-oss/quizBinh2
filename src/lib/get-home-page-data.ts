import { clientPromise } from "@/lib/mongodb";
import type { HomePageData } from "@/lib/definitions";
import { unstable_noStore as noStore } from 'next/cache';

/**
 * Lấy toàn bộ dữ liệu cho trang chủ từ collection 'homepage'.
 * Sử dụng MongoDB và có cơ chế cache.
 * @returns {Promise<HomePageData | null>} Một object chứa toàn bộ dữ liệu trang chủ, hoặc null nếu có lỗi.
 */
export async function getHomePageData(): Promise<HomePageData | null> {
  // unstable_noStore() được dùng để ngăn Next.js cache dữ liệu này
  // Điều này đảm bảo mỗi khi hàm được gọi, nó sẽ luôn lấy dữ liệu mới nhất từ database.
  // Rất hữu ích trong môi trường dev, hoặc khi bạn muốn nội dung cập nhật ngay lập tức.
  noStore();

  try {
    const client = await clientPromise;
    const db = client.db("QuizAppData"); // Tên database của bạn
    const collection = db.collection<HomePageData>("homepage");

    // Lấy ra tài liệu duy nhất trong collection này
    const homePageData = await collection.findOne({});

    if (!homePageData) {
      console.warn("Không tìm thấy dữ liệu cho trang chủ trong collection 'homepage'.");
      return null;
    }

    // Chuyển đổi ObjectId thành string nếu cần thiết cho client-side
    // (Trong trường hợp này, chúng ta không cần gửi _id nên có thể bỏ qua)
    return homePageData;

  } catch (error) {
    console.error("Lỗi khi lấy dữ liệu trang chủ từ MongoDB:", error);
    // Trong môi trường production, bạn có thể muốn xử lý lỗi này một cách tinh vi hơn
    // thay vì chỉ trả về null.
    return null;
  }
}
