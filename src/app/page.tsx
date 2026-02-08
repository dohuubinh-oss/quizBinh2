// --- GIẢI THÍCH THAY ĐỔI ---
// 1. VÌ SAO CẦN THAY ĐỔI:
//    - Yêu cầu của bạn là muốn nội dung chính của trang có cùng chiều rộng với Navbar và Footer.
//    - Trước đó, tôi đã gỡ bỏ giới hạn chiều rộng khỏi thẻ <main> trong `layout.tsx`, khiến nội dung trang chủ tràn ra toàn màn hình.
//
// 2. GIẢI QUYẾT VẤN ĐỀ GÌ:
//    - Thay thế thẻ `<main>` không hợp lệ bằng thẻ `<div>`.
//    - Thêm một `div` bao bọc bên ngoài nội dung của trang chủ. Div này sẽ đóng vai trò là "container" cho trang.
//    - Áp dụng các class quan trọng vào `div` này:
//      - `max-w-[1280px] mx-auto`: Giới hạn chiều rộng và căn giữa, đảm bảo nội dung trang chủ thẳng hàng với Navbar và Footer.
//      - `px-4 sm:px-6 lg:px-8`: Thêm padding ngang để nội dung không dính vào mép màn hình trên các thiết bị khác nhau.
//      - `py-12`: Thêm padding dọc để tạo khoảng trống với Navbar và Footer.
//
// 3. LỢI ÍCH SO VỚI CÁCH CŨ:
//    - Khắc phục lỗi hiển thị, đưa chiều rộng của nội dung về đúng như yêu cầu.
//    - Duy trì cấu trúc layout linh hoạt: layout chung (`layout.tsx`) không áp đặt chiều rộng, cho phép các trang đặc biệt có thể có layout toàn màn hình nếu muốn. Chỉ các trang cần giới hạn (như trang chủ) mới tự thêm container.
//    - Bố cục trang chủ giờ đây hoàn toàn nhất quán với thiết kế chung của ứng dụng.

export default function Page() {
  return (
    <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
        <span className="block">Chào mừng đến với</span>
        <span className="block text-blue-600">EnglishMaster</span>
      </h1>
      <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-xl">
        Nâng cao kỹ năng tiếng Anh của bạn mỗi ngày thông qua các bài kiểm tra thú vị và đầy thử thách. Bắt đầu hành trình chinh phục ngôn ngữ ngay hôm nay!
      </p>
    </div>
  );
}
