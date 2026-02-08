import { ObjectId } from 'mongodb';

// Định nghĩa cho một liên kết trong thanh điều hướng
export interface NavLink {
  name: string;
  href: string;
}

// Định nghĩa cho các thành phần nội dung trên trang chủ
export interface HomepageContent {
  _id?: ObjectId; // ID của document trong MongoDB
  hero: {
    title: string;
    subtitle: string;
    ctaText: string;
    ctaLink: string;
    imageUrl: string;
  };
  features: {
    icon: string; // Tên của icon từ lucide-react
    title: string;
    description: string;
  }[];
  testimonial: {
    quote: string;
    authorName: string;
    authorRole: string;
    authorAvatarUrl: string;
  };
}

// Định nghĩa cho một liên kết đơn lẻ trong Footer
export interface FooterLink {
  name: string;
  href: string;
}

// Định nghĩa cho một cột các liên kết trong Footer
export interface FooterLinkColumn {
  title: string;
  links: FooterLink[];
}

// Định nghĩa cho một icon mạng xã hội trong Footer
export interface SocialLink {
  platform: 'facebook' | 'instagram' | 'twitter';
  href: string;
}

// Định nghĩa cấu trúc tổng thể của nội dung Footer
export interface FooterContent {
  _id?: ObjectId;
  brandName: string;
  description: string;
  socialLinks: SocialLink[];
  linkColumns: FooterLinkColumn[];
  policyLinks: FooterLink[];
  copyright: string;
}
