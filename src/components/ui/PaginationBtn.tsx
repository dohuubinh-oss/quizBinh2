import type { LucideIcon } from 'lucide-react';

interface PaginationBtnProps {
  icon?: LucideIcon;
  label?: string;
  active?: boolean;
  disabled?: boolean;
}

// Component này tạo ra một nút phân trang, có thể chứa icon hoặc số (label).
// Nó có các trạng thái `active` (nổi bật), `disabled` (bị mờ đi), và trạng thái thường.
const PaginationBtn: React.FC<PaginationBtnProps> = ({ icon: Icon, label, active, disabled }) => (
  <button 
    disabled={disabled}
    className={`w-8 h-8 3xl:w-12 3xl:h-12 flex items-center justify-center rounded-lg border text-xs 3xl:text-base transition-all ${
      active 
        ? 'bg-[#2b8cee] text-white border-[#2b8cee] font-bold' 
        : 'border-transparent text-slate-500 hover:border-slate-200 hover:bg-white'
    } ${disabled ? 'opacity-30 cursor-not-allowed' : ''}`}
  >
    {Icon ? <Icon size={16} className="3xl:w-6 3xl:h-6" /> : label}
  </button>
);

export default PaginationBtn;