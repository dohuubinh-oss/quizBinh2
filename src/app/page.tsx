import { getHomePageData } from "@/lib/get-home-page-data";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import WhyChooseUs from "@/components/WhyChooseUs";
import ZigZagFeatures from "@/components/ZigZagFeatures";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import { HomePageData } from "@/lib/definitions";

// --- GIẢI THÍCH THAY ĐỔI LỚN ---
// 1. ASYNC COMPONENT: `Page` giờ là một `async function` để có thể `await` dữ liệu từ database.
// 2. FETCH DỮ LIỆU: Nó gọi `getHomePageData()` để lấy toàn bộ nội dung động cho trang chủ.
// 3. PASSING PROPS: Dữ liệu lấy được (ví dụ: `homeData.hero`, `homeData.stats`) được truyền xuống các component con tương ứng thông qua props.
// 4. XỬ LÝ LỖI: Nếu không lấy được dữ liệu (`!homeData`), component sẽ hiển thị một thông báo lỗi thân thiện thay vì crash.

export default async function Page() {
  const homeData: HomePageData | null = await getHomePageData();

  // Xử lý trường hợp không lấy được dữ liệu từ database
  if (!homeData) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
        <h1 className="text-4xl font-bold text-red-600 mb-4">Lỗi Tải Dữ Liệu</h1>
        <p className="text-lg text-gray-700">
          Rất tiếc, đã có lỗi xảy ra khi tải nội dung của trang. Vui lòng thử lại sau.
        </p>
      </div>
    );
  }

  // Nếu có dữ liệu, render các component với props tương ứng
  return (
    <main>
      <Hero data={homeData.hero} />
      <Stats data={homeData.stats} />
      <WhyChooseUs data={homeData.whyChooseUs} />
      <ZigZagFeatures data={homeData.zigZagFeatures} />
      <Testimonials data={homeData.testimonials} />
      <CTA data={homeData.cta} />
    </main>
  );
}
