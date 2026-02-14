import React from 'react';
import { Database, CheckCircle2, TrendingUp, AlertCircle } from 'lucide-react';

const stats = [
  // Thay đổi ở dòng này: text-blue-500 -> text-[#2b8cee] để tuân thủ thỏa thuận
  { label: 'Tổng câu hỏi', value: '1,248', icon: Database, colorClass: 'bg-blue-50 text-[#2b8cee]' }, 
  { label: 'Dễ', value: '450', icon: CheckCircle2, colorClass: 'bg-green-50 text-green-500' },
  { label: 'Trung bình', value: '582', icon: TrendingUp, colorClass: 'bg-yellow-50 text-yellow-500' },
  { label: 'Khó', value: '216', icon: AlertCircle, colorClass: 'bg-red-50 text-red-500' },
];

const StatCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 3xl:gap-6 4xl:gap-8 mb-8">
      {stats.map((stat, idx) => (
        <div key={idx} className="bg-white p-4 3xl:p-6 4xl:p-8 rounded-xl border border-slate-200 flex items-center gap-4 3xl:gap-6 shadow-sm hover:shadow-md transition-shadow">
          <div className={`w-12 h-12 3xl:w-16 3xl:h-16 4xl:w-20 4xl:h-20 rounded-lg 3xl:rounded-xl flex items-center justify-center ${stat.colorClass}`}>
            <stat.icon size={24} className="3xl:w-8 3xl:h-8 4xl:w-10 4xl:h-10" />
          </div>
          <div>
            <p className="text-xs 3xl:text-sm font-semibold text-slate-400 uppercase tracking-tight">{stat.label}</p>
            <p className="text-xl 3xl:text-3xl 4xl:text-4xl font-bold text-slate-900">{stat.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatCards;