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
// ĐỊNH NGHĨA CHO HỆ THỐNG CÂU HỎI (QUẢN LÝ & TẠO MỚI)
// =======================================================================

/**
 * Định nghĩa các định dạng câu hỏi có thể có.
 */
export enum QuestionFormat {
  MULTIPLE_CHOICE = 'Multiple Choice',
  FILL_IN_THE_BLANK = 'Fill in the Blank',
  MATCHING = 'Matching',
  TRUE_FALSE = 'True/False',
  SHORT_ANSWER = 'Short Answer',
}

/**
 * Định nghĩa các mức độ khó của câu hỏi.
 */
export enum Difficulty {
  EASY = 'Dễ',
  MEDIUM = 'Trung bình',
  HARD = 'Khó',
}

/**
 * Định nghĩa các chủ đề hoặc kỹ năng chính mà câu hỏi có thể liên quan.
 */
export enum Topic {
  GRAMMAR = 'Ngữ pháp',
  VOCABULARY = 'Từ vựng',
  READING = 'Đọc hiểu',
  LISTENING = 'Nghe hiểu',
  WRITING = 'Viết',
  GENERAL = 'Chủ đề chung',
}

/**
 * Đại diện cho một câu hỏi con, là phần tương tác cốt lõi.
 * Một câu hỏi chính có thể chứa một hoặc nhiều câu hỏi con này.
 */
export interface SubQuestion {
  _id?: string | ObjectId; // ID tùy chọn từ database
  content: string; // Nội dung của chính câu hỏi
  image?: string; // URL đến ảnh tùy chọn
  audio?: string; // URL đến file âm thanh tùy chọn
  options: string[]; // Mảng các câu trả lời có thể có
  correctAnswer: string[]; // Mảng chứa (các) câu trả lời đúng
  explanation: string; // Giải thích tại sao câu trả lời đó đúng
  tags: string[]; // Các từ khóa để tìm kiếm và lọc
}

/**
 * Chứa siêu dữ liệu về câu hỏi, chẳng hạn như nguồn và độ khó.
 */
export interface QuestionMetadata {
  level: Difficulty; // Mức độ khó từ enum
  source?: string; // Nguồn gốc câu hỏi (ví dụ: 'Cambridge 18')
  [key: string]: any; // Cho phép các trường siêu dữ liệu linh hoạt khác
}

/**
 * Đại diện cho đối tượng Câu hỏi chính, kết nối mọi thứ lại với nhau.
 * Đây là cấu trúc dữ liệu chính cho một câu hỏi trong database.
 */
export interface Question {
  _id?: string | ObjectId; // ID tùy chọn từ database
  category: string; // Loại bài thi (ví dụ: 'TOEIC', 'IELTS')
  part: number; // Phần cụ thể của bài thi (ví dụ: 5 cho TOEIC Reading)
  topic: Topic; // Kỹ năng/chủ đề chính từ enum
  format: QuestionFormat; // Định dạng câu hỏi từ enum
  subQuestions: SubQuestion[]; // Một mảng chứa một hoặc nhiều câu hỏi con
  metadata: QuestionMetadata; // Siêu dữ liệu bổ sung
  createdAt?: Date; // Dấu thời gian khi được tạo
  updatedAt?: Date; // Dấu thời gian của lần cập nhật cuối cùng
}
