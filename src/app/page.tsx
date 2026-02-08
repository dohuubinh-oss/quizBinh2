import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import WhyChooseUs from '@/components/WhyChooseUs';
import ZigZagFeatures from '@/components/ZigZagFeatures';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';

/**
 * Trang chủ của ứng dụng.
 * 
 * Component này không nhận props nào.
 * Trách nhiệm chính của nó là hiển thị các section chính của trang chủ.
 * Hiện tại, nó hiển thị các components <Hero />, <Stats />, <WhyChooseUs />, <ZigZagFeatures />, <Testimonials />, và <CTA />.
 */
export default function Page() {
  return (
    <main>
      <Hero />
      <Stats />
      <WhyChooseUs />
      <ZigZagFeatures />
      <Testimonials />
      <CTA />
    </main>
  );
}
