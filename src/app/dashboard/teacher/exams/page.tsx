
// Trang này sẽ là nơi giáo viên tạo và quản lý các đề thi từ ngân hàng câu hỏi.
export default function ManageExamsPage() {
  return (
    <div className="container mx-auto px-4 py-8 lg:py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Quản lý Đề thi
        </h1>
        <button className="font-semibold text-white bg-green-600 hover:bg-green-700 rounded-lg px-5 py-2.5 transition-colors duration-300">
          + Tạo đề thi mới
        </button>
      </div>
      
      {/* Placeholder cho table hoặc danh sách đề thi trong tương lai */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-8 text-center">
        <p className="text-gray-500 dark:text-gray-400">Khu vực hiển thị danh sách các đề thi sẽ được xây dựng ở đây.</p>
      </div>
    </div>
  );
}
