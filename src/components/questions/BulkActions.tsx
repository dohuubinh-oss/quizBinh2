import React from 'react';
import { CheckCircle2, Layers, Trash2, X } from 'lucide-react';

interface BulkActionsProps {
  selectedCount: number;
  onClear: () => void;
}

const BulkActions: React.FC<BulkActionsProps> = ({ selectedCount, onClear }) => {
  if (selectedCount === 0) return null;

  return (
    // Thay thế bg-primary và shadow-primary/20 bằng màu đã thỏa thuận
    <div className="sticky top-[70px] z-40 bg-[#2b8cee] text-white rounded-xl shadow-lg shadow-[#2b8cee]/20 flex items-center justify-between px-6 h-16 mb-6 transition-all animate-in slide-in-from-top duration-300">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <CheckCircle2 size={20} className="text-white/80" />
          <span className="text-sm font-semibold">Đã chọn {selectedCount} câu hỏi</span>
        </div>
        <div className="h-6 w-[1px] bg-white/20 mx-2"></div>
        <p className="text-sm text-white/90 hidden md:block italic">Áp dụng hành động cho các mục đã chọn</p>
      </div>
      
      <div className="flex items-center gap-3">
        <button className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm font-medium transition-colors border border-white/10">
          <Layers size={18} />
          Thay đổi chủ đề
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg text-sm font-medium transition-colors border border-red-400/30">
          <Trash2 size={18} />
          Xóa các mục đã chọn
        </button>
        <button 
          onClick={onClear}
          className="p-2 hover:bg-white/10 rounded-lg transition-colors" 
          title="Bỏ chọn tất cả"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
};

export default BulkActions;