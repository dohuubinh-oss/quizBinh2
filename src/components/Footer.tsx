import React from 'react';
// Sửa: Xóa MessageCircle và import lại Facebook
import { GraduationCap, Instagram, Twitter, Facebook } from 'lucide-react';
import Link from 'next/link';
import LinkColumn from './ui/LinkColumn';
import { FooterContent } from '@/lib/definitions';

const socialIconMap: { [key: string]: React.ReactNode } = {
  // Sửa: Sử dụng lại icon Facebook theo yêu cầu
  facebook: <Facebook size={20} />,
  instagram: <Instagram size={20} />,
  twitter: <Twitter size={20} />,
};

const Footer: React.FC<{ footerContent: FooterContent }> = ({ footerContent }) => {
  const { brandName, description, socialLinks, linkColumns, policyLinks, copyright } = footerContent;

  return (
    <footer className="bg-background-light border-t border-[#e5e7eb] py-12 px-4 sm:px-10">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 lg:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-2 text-[#111418]">
              <div className="text-[#2b8cee]">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-lg font-bold uppercase tracking-tight">{brandName}</h3>
            </div>
            <p className="text-[#4b5563] text-sm leading-relaxed max-w-xs font-body">
              {description}
            </p>
            <div className="flex gap-4 mt-2">
              {socialLinks.map((item) => (
                <Link key={item.platform} href={item.href} aria-label={item.platform} className="text-[#6b7280] hover:text-[#2b8cee] transition-colors p-2 bg-gray-100 rounded-full flex items-center justify-center">
                  {socialIconMap[item.platform]}
                </Link>
              ))}
            </div>
          </div>

          {linkColumns.map((col) => (
            <LinkColumn key={col.title} title={col.title} links={col.links} />
          ))}

        </div>
        
        <div className="border-t border-[#e5e7eb] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#9ca3af] text-sm font-body">{copyright}</p>
          <div className="flex gap-6">
            {policyLinks.map((item) => (
              <Link key={item.name} href={item.href} className="text-[#9ca3af] text-sm hover:text-[#2b8cee] transition-colors font-body">
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
