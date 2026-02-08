import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

import { connectToDatabase } from '../src/lib/mongodb';
import type { NavLink, HomepageContent, FooterContent } from '../src/lib/definitions';
import { Db } from 'mongodb';

// --- DỮ LIỆU MẪU ---

const navLinksData: NavLink[] = [
  { name: 'Luyện thi', href: '#practice' },
  { name: 'Tài liệu', href: '#resources' },
  { name: 'Bảng giá', href: '#pricing' },
  { name: 'Blog', href: '/blog' },
];

const homepageContentData: HomepageContent = {
  hero: {
    title: 'Chinh phục mọi kỳ thi tiếng Anh',
    subtitle: 'Nền tảng luyện thi trắc nghiệm thông minh, cá nhân hóa lộ trình học và tối ưu hóa điểm số của bạn.',
    ctaText: 'Bắt đầu luyện tập miễn phí',
    ctaLink: '/register',
    imageUrl: '/images/hero-illustration.svg', // Placeholder image
  },
  features: [
    {
      icon: 'BookOpenCheck',
      title: 'Ngân hàng câu hỏi đa dạng',
      description: 'Hàng ngàn câu hỏi được biên soạn kỹ lưỡng, bám sát cấu trúc đề thi thật.',
    },
    {
      icon: 'BarChart3',
      title: 'Theo dõi tiến độ chi tiết',
      description: 'Phân tích điểm mạnh, điểm yếu qua từng bài tập để bạn tập trung cải thiện.',
    },
    {
      icon: 'Target',
      title: 'Lộ trình học cá nhân hóa',
      description: 'AI đề xuất các bài học và dạng bài tập phù hợp với trình độ và mục tiêu của bạn.',
    },
  ],
  testimonial: {
    quote: 'Giao diện thân thiện, nội dung chất lượng. Mình đã tăng 200 điểm TOEIC chỉ sau 2 tháng ôn luyện trên EnglishMaster!',
    authorName: 'Minh Anh',
    authorRole: 'Sinh viên Đại học Ngoại thương',
    authorAvatarUrl: '/images/avatar-minh-anh.png', // Placeholder avatar
  },
};

const footerData: FooterContent = {
  brandName: 'EnglishMaster',
  description: 'Nền tảng ôn luyện tiếng Anh trắc nghiệm hàng đầu Việt Nam. Giúp bạn tự tin chinh phục mọi kỳ thi.',
  socialLinks: [
    { platform: 'facebook', href: '#' },
    { platform: 'instagram', href: '#' },
    { platform: 'twitter', href: '#' },
  ],
  linkColumns: [
    {
      title: 'Sản phẩm',
      links: [
        { name: 'Tính năng', href: '#features' },
        { name: 'Bảng giá', href: '#pricing' },
        { name: 'Tải ứng dụng', href: '#' },
      ],
    },
    {
      title: 'Tài nguyên',
      links: [
        { name: 'Blog học tập', href: '/blog' },
        { name: 'Tài liệu miễn phí', href: '#resources' },
      ],
    },
    {
      title: 'Về chúng tôi',
      links: [
        { name: 'Câu chuyện', href: '#' },
        { name: 'Liên hệ', href: '#' },
      ],
    },
  ],
  policyLinks: [
    { name: 'Quyền riêng tư', href: '#' },
    { name: 'Bảo mật', href: '#' },
  ],
  copyright: '© 2024 EnglishMaster. All rights reserved.',
};

// --- HÀM SEED CHUNG ---

async function seedCollection(db: Db, collectionName: string, data: object[] | object) {
  const collection = db.collection(collectionName);
  console.log(`--- Seeding [${collectionName}] ---`);
  try {
    console.log(`  - Deleting existing data in [${collectionName}]...`);
    await collection.deleteMany({}); // Xóa tất cả dữ liệu cũ
    console.log(`  - Inserting new data into [${collectionName}]...`);
    await collection.insertMany(Array.isArray(data) ? data : [data]);
    console.log(`✅ [${collectionName}] seeded successfully.`);
  } catch (error) {
    console.error(`❌ Error seeding [${collectionName}]:`, error);
    throw error;
  }
}

// --- HÀM CHÍNH ---

async function main() {
  console.log("🚀 Starting database seeding process...");
  const { client, db } = await connectToDatabase();

  try {
    await seedCollection(db, 'navlinks', navLinksData);
    await seedCollection(db, 'homepage_content', homepageContentData);
    await seedCollection(db, 'footers', footerData);

    console.log("\n🎉 Database seeding completed successfully!");

  } catch (err) {
    console.error("\n💥 A critical error occurred during the seeding process:", err);
    process.exit(1); // Thoát khỏi script nếu có lỗi nghiêm trọng
  } finally {
    if (client) {
      await client.close();
      console.log("\n🔌 Database connection closed.");
    }
  }
}

main();
