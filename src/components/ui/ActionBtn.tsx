import type { LucideIcon } from 'lucide-react';

interface ActionBtnProps {
  icon: LucideIcon;
  title: string;
  danger?: boolean;
}

// Component này nhận vào một Icon, title và một cờ (flag) `danger` để thay đổi màu khi hover.
// Nó được tái sử dụng cho mỗi dòng trong bảng câu hỏi.
const ActionBtn: React.FC<ActionBtnProps> = ({ icon: Icon, title, danger }) => (
  <button 
    className={`p-1.5 3xl:p-3 hover:bg-slate-100 rounded-lg text-slate-400 transition-colors ${danger ? 'hover:text-red-500' : 'hover:text-[#2b8cee]'}`} 
    title={title}
  >
    <Icon size={18} className="3xl:w-6 3xl:h-6" />
  </button>
);

export default ActionBtn;