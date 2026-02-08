import { ObjectId } from 'mongodb';

// =======================================================================
// ĐỊNH NGHĨA CHUNG (CHO LAYOUT)
// =======================================================================

export interface NavLink {
  name: string;
  href: string;
}

export interface FooterLink {
  name: string;
  href: string;
}

export interface FooterLinkColumn {
  title: string;
  links: FooterLink[];
}

export interface SocialLink {
  platform: 'facebook' | 'instagram' | 'twitter';
  href: string;
}

export interface FooterContent {
  _id?: ObjectId;
  brandName: string;
  description: string;
  socialLinks: SocialLink[];
  linkColumns: FooterLinkColumn[];
  policyLinks: FooterLink[];
  copyright: string;
}

// =======================================================================
// ĐỊNH NGHĨA DỮ LIỆU TRANG CHỦ (HOMEPAGE)
// =======================================================================

// --- 1. Hero Section ---
export interface CtaButton {
  text: string;
  link: string;
}

export interface HeroContent {
  badge: string;
  title: string; // Có thể chứa thẻ <br /> hoặc <span> đơn giản
  subtitle: string;
  primaryCta: CtaButton;
  secondaryCta: CtaButton;
  socialProof: {
    avatars: string[]; // Mảng các URL ảnh
    text: string;
  };
  mainImage: {
    src: string;
    alt: string;
  };
  floatingCard: {
    title: string;
    result: string;
    progressPercent: number;
  };
}

// --- 2. Stats Section ---
export interface StatItem {
  value: string;
  label: string;
}

// --- 3. Why Choose Us Section ---
export interface FeatureItem {
  icon: string; // Tên của icon từ thư viện lucide-react (vd: "BookOpen")
  title: string;
  description: string;
}

export interface WhyChooseUsContent {
  title: string;
  subtitle: string;
  features: FeatureItem[];
}

// --- 4. ZigZag Features Section ---
export interface ZigZagFeature {
  direction: 'left' | 'right';
  tag: {
    icon: string; // Tên của icon từ lucide-react (vd: "TrendingUp")
    name: string;
  };
  title: string;
  description: string;
  image: {
      src: string;
      alt: string;
  };
  checklist?: string[]; // Danh sách các điểm nhấn (tùy chọn)
  actionLink?: {
      text: string;
      href: string;
  }; // Link hành động (tùy chọn)
}

// --- 5. Testimonials Section ---
export interface Review {
    name: string;
    role: string; // Vai trò/Nghề nghiệp
    quote: string; // Nội dung đánh giá
    avatar: string; // URL ảnh avatar
}

export interface TestimonialsContent {
    title: string;
    subtitle: string;
    reviews: Review[];
}

// --- 6. CTA Section ---
export interface CTAContent {
  title: string;
  subtitle: string;
  primaryCta: CtaButton;
  secondaryCta: CtaButton;
}

// === CẤU TRÚC TỔNG THỂ CHO COLLECTION `homepage` ===
export interface HomePageData {
  _id?: ObjectId;
  hero: HeroContent;
  stats: StatItem[];
  whyChooseUs: WhyChooseUsContent;
  zigZagFeatures: ZigZagFeature[];
  testimonials: TestimonialsContent;
  cta: CTAContent;
}
