import Link from 'next/link';
import { GraduationCap } from 'lucide-react';

/**
 * Logo là component UI hiển thị logo và tên thương hiệu của ứng dụng.
 * Nó được tách ra để đảm bảo tính nhất quán và tái sử dụng ở nhiều nơi (Header, Footer, v.v.).
 * Component này không nhận props và tự quản lý style của mình.
 */
const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2 text-[#111418] group cursor-pointer">
      <div className="text-[#2b8cee] transition-transform group-hover:scale-110">
        <GraduationCap size={32} />
      </div>
      <h2 className="text-xl font-black leading-tight tracking-[-0.015em]">EnglishMaster</h2>
    </Link>
  );
};

export default Logo;
