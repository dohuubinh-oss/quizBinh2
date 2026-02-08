import Link from 'next/link';

interface LinkItem {
  name: string;
  href: string;
}

interface LinkColumnProps {
  title: string;
  links: LinkItem[];
}

const LinkColumn: React.FC<LinkColumnProps> = ({ title, links }) => {
  return (
    <div className="flex flex-col gap-3">
      <h4 className="text-[#111418] font-bold mb-1">{title}</h4>
      {links.map((link) => (
        <Link key={link.name} href={link.href} className="text-[#4b5563] text-sm hover:text-[#2b8cee] transition-colors font-body">
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default LinkColumn;
