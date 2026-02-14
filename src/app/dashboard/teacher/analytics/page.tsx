
// Trang này sẽ hiển thị các báo cáo và thống kê về kết quả của học sinh.
export default function AnalyticsPage() {
  return (
    <div className="container mx-auto px-4 py-8 lg:py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Thống kê và Báo cáo
        </h1>
        <p className="mt-2 text-lg text-gray-500 dark:text-gray-400">
          Phân tích kết quả và hiệu suất của học sinh.
        </p>
      </div>
      
      {/* Placeholder cho các biểu đồ và báo cáo trong tương lai */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-8 text-center">
        <p className="text-gray-500 dark:text-gray-400">Các biểu đồ, đồ thị và báo cáo chi tiết sẽ được hiển thị tại đây.</p>
      </div>
    </div>
  );
}
