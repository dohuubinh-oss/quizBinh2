'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Plus, 
  Search, 
  Filter, 
  Volume2, 
  Type as TypeIcon, 
  Eye, 
  Edit3, 
  Trash2, 
  Info, 
  ChevronLeft, 
  ChevronRight,
} from 'lucide-react';

// Import các component và định nghĩa từ cấu trúc mới
import StatCards from '@/components/questions/StatCards';
import BulkActions from '@/components/questions/BulkActions';
import ActionBtn from '@/components/ui/ActionBtn';
import PaginationBtn from '@/components/ui/PaginationBtn';
import { Question, Difficulty } from '@/lib/definitions';

const INITIAL_QUESTIONS: Question[] = [
  {
    id: '#Q-7821',
    content: '"If I ___ rich, I would travel around the world." Choose the correct verb form.',
    topic: 'Grammar',
    difficulty: Difficulty.MEDIUM,
    createdAt: '24/05/2024',
    imageUrl: 'https://picsum.photos/seed/q1/200/200',
    type: 'image'
  },
  {
    id: '#Q-7822',
    content: "Synonym of 'Abundant' is:",
    topic: 'Vocabulary',
    difficulty: Difficulty.EASY,
    createdAt: '22/05/2024',
    type: 'text'
  },
  {
    id: '#Q-7823',
    content: 'Based on the reading passage, what is the main purpose of the research mentioned?',
    topic: 'IELTS Reading',
    difficulty: Difficulty.HARD,
    createdAt: '20/05/2024',
    imageUrl: 'https://picsum.photos/seed/q3/200/200',
    type: 'image'
  },
  {
    id: '#Q-7824',
    content: 'Listen to the conversation and select the time they decided to meet.',
    topic: 'Listening',
    difficulty: Difficulty.MEDIUM,
    createdAt: '18/05/2024',
    type: 'audio'
  }
];

export default function QuestionManagementPage() {
  const [questions] = useState<Question[]>(INITIAL_QUESTIONS);
  const [selectedIds, setSelectedIds] = useState<string[]>(['#Q-7821', '#Q-7822']);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredQuestions = useMemo(() => {
    return questions.filter(q => 
      q.content.toLowerCase().includes(searchTerm.toLowerCase()) || 
      q.id.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [questions, searchTerm]);

  const toggleSelect = (id: string) => {
    setSelectedIds(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const toggleSelectAll = () => {
    if (selectedIds.length === filteredQuestions.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(filteredQuestions.map(q => q.id));
    }
  };

  return (
    <>
      <main className="max-w-[1280px] mx-auto p-4 lg:p-8 3xl:p-12 4xl:p-16 transition-all">
        {/* Breadcrumbs & Header */}
        <header className="mb-8 3xl:mb-12 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <nav className="flex text-xs 3xl:text-sm text-slate-400 mb-2 gap-2">
              <Link className="hover:text-[#2b8cee] transition-colors uppercase tracking-wider font-semibold" href="/dashboard">Dashboard</Link>
              <span>/</span>
              <span className="uppercase tracking-wider font-semibold text-slate-600">Ngân hàng câu hỏi</span>
            </nav>
            <h1 className="text-2xl 3xl:text-4xl font-bold text-slate-900">Quản lý Ngân hàng Câu hỏi</h1>
            <p className="text-slate-500 text-sm 3xl:text-lg mt-1 3xl:mt-2">Quản lý, tìm kiếm và cập nhật hệ thống câu hỏi trắc nghiệm tiếng Anh.</p>
          </div>
          <Link href="/dashboard/teacher/questions/create" className="bg-[#2b8cee] hover:bg-[#2b8cee]/90 text-white px-5 py-2.5 3xl:px-8 3xl:py-4 rounded-xl flex items-center gap-2 font-medium shadow-lg shadow-[#2b8cee]/20 transition-all transform active:scale-95 text-sm 3xl:text-lg">
            <Plus size={20} className="3xl:w-6 3xl:h-6" />
            Thêm câu hỏi mới
          </Link>
        </header>

        <StatCards />

        <BulkActions selectedCount={selectedIds.length} onClear={() => setSelectedIds([])} />

        {/* Filters */}
        <div className="bg-white border border-slate-200 rounded-xl p-4 3xl:p-6 mb-6 3xl:mb-10 shadow-sm">
          <div className="flex flex-col lg:flex-row gap-4 3xl:gap-6">
            <div className="relative flex-1 group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#2b8cee] transition-colors 3xl:w-6 3xl:h-6" size={20} />
              <input 
                className="w-full pl-12 pr-4 py-2.5 3xl:py-4 bg-slate-50 border-none rounded-lg focus:ring-2 focus:ring-[#2b8cee]/20 text-sm 3xl:text-base" 
                placeholder="Tìm kiếm câu hỏi, từ khóa..." 
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="w-full lg:w-64 3xl:w-80">
              <select className="w-full bg-slate-50 border-none rounded-lg py-2.5 3xl:py-4 text-sm 3xl:text-base focus:ring-2 focus:ring-[#2b8cee]/20 cursor-pointer">
                <option value="">Tất cả chủ đề</option>
                <option value="grammar">Grammar (Ngữ pháp)</option>
                <option value="vocabulary">Vocabulary (Từ vựng)</option>
                <option value="listening">Listening (Nghe)</option>
                <option value="reading">Reading (Đọc)</option>
              </select>
            </div>
            <div className="w-full lg:w-56 3xl:w-72">
              <select className="w-full bg-slate-50 border-none rounded-lg py-2.5 3xl:py-4 text-sm 3xl:text-base focus:ring-2 focus:ring-[#2b8cee]/20 cursor-pointer">
                <option value="">Tất cả độ khó</option>
                <option value="easy">Dễ</option>
                <option value="medium">Trung bình</option>
                <option value="hard">Khó</option>
              </select>
            </div>
            <button className="bg-slate-100 hover:bg-slate-200 px-3 py-2.5 3xl:px-6 3xl:py-4 rounded-lg text-slate-600 transition-colors border border-slate-200 flex items-center justify-center">
              <Filter size={20} className="3xl:w-6 3xl:h-6" />
            </button>
          </div>
        </div>

        {/* Table Container */}
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm transition-all">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50 text-slate-400 uppercase text-[11px] 3xl:text-xs font-bold tracking-widest border-b border-slate-100">
                  <th className="px-6 py-4 3xl:px-8 3xl:py-6 w-12 3xl:w-16 text-center">
                    <input 
                      className="w-5 h-5 3xl:w-6 3xl:h-6 rounded text-[#2b8cee] focus:ring-[#2b8cee] border-slate-300 bg-white cursor-pointer" 
                      type="checkbox"
                      checked={selectedIds.length === filteredQuestions.length && filteredQuestions.length > 0}
                      onChange={toggleSelectAll}
                    />
                  </th>
                  <th className="px-6 py-4 3xl:px-8 3xl:py-6">Nội dung câu hỏi</th>
                  <th className="px-6 py-4 3xl:px-8 3xl:py-6">Chủ đề</th>
                  <th className="px-6 py-4 3xl:px-8 3xl:py-6">Độ khó</th>
                  <th className="px-6 py-4 3xl:px-8 3xl:py-6">Ngày tạo</th>
                  <th className="px-6 py-4 3xl:px-8 3xl:py-6 text-right">Thao tác</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredQuestions.map((q) => (
                  <tr 
                    key={q.id} 
                    className={`hover:bg-slate-50/80 transition-colors ${selectedIds.includes(q.id) ? 'bg-blue-50/30' : ''}`}
                  >
                    <td className="px-6 py-4 3xl:px-8 3xl:py-6 text-center">
                      <input 
                        className="w-5 h-5 3xl:w-6 3xl:h-6 rounded text-[#2b8cee] focus:ring-[#2b8cee] border-slate-300 bg-white cursor-pointer" 
                        type="checkbox"
                        checked={selectedIds.includes(q.id)}
                        onChange={() => toggleSelect(q.id)}
                      />
                    </td>
                    <td className="px-6 py-4 3xl:px-8 3xl:py-6 max-w-md 3xl:max-w-2xl">
                      <div className="flex items-center gap-4 3xl:gap-6">
                        {q.imageUrl ? (
                          <Image className="w-10 h-10 3xl:w-14 3xl:h-14 rounded-lg object-cover flex-shrink-0" src={q.imageUrl} alt="Question" width={56} height={56} />
                        ) : (
                          <div className="w-10 h-10 3xl:w-14 3xl:h-14 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0">
                            {q.type === 'audio' ? <Volume2 size={18} className="text-slate-400 3xl:w-6 3xl:h-6" /> : <TypeIcon size={18} className="text-slate-400 3xl:w-6 3xl:h-6" />}
                          </div>
                        )}
                        <div>
                          <p className="text-sm 3xl:text-lg font-medium text-slate-900 line-clamp-2">{q.content}</p>
                          <span className="text-[10px] 3xl:text-xs text-slate-400 font-medium font-mono uppercase">ID: {q.id}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 3xl:px-8 3xl:py-6">
                      <span className="text-xs 3xl:text-sm px-2.5 py-1 3xl:px-4 3xl:py-2 bg-[#2b8cee]/5 text-[#2b8cee] font-medium rounded-full border border-[#2b8cee]/10">
                        {q.topic}
                      </span>
                    </td>
                    <td className="px-6 py-4 3xl:px-8 3xl:py-6">
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 3xl:w-3 3xl:h-3 rounded-full ${q.difficulty === Difficulty.EASY ? 'bg-green-400' : q.difficulty === Difficulty.MEDIUM ? 'bg-yellow-400' : 'bg-red-400'}`}></div>
                        <span className="text-xs 3xl:text-sm font-medium text-slate-600">{q.difficulty}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 3xl:px-8 3xl:py-6 text-xs 3xl:text-sm text-slate-500">{q.createdAt}</td>
                    <td className="px-6 py-4 3xl:px-8 3xl:py-6 text-right space-x-1 3xl:space-x-2">
                      <ActionBtn icon={Eye} title="Xem chi tiết" />
                      <ActionBtn icon={Edit3} title="Chỉnh sửa" />
                      <ActionBtn icon={Trash2} title="Xóa" danger />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Pagination */}
          <div className="px-6 py-4 3xl:px-10 3xl:py-8 bg-slate-50 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100">
            <p className="text-xs 3xl:text-base text-slate-500">
              Đang hiển thị <span className="font-bold text-slate-900">1 - {filteredQuestions.length}</span> trong tổng số <span className="font-bold text-slate-900">1,248</span> câu hỏi
            </p>
            <div className="flex items-center gap-2 3xl:gap-3">
              <PaginationBtn icon={ChevronLeft} disabled />
              <PaginationBtn label="1" active />
              <PaginationBtn label="2" />
              <PaginationBtn label="3" />
              <span className="text-slate-400 px-1 text-xs 3xl:text-sm">...</span>
              <PaginationBtn label="125" />
              <PaginationBtn icon={ChevronRight} />
            </div>
          </div>
        </div>

        {/* Tip Box */}
        <div className="mt-8 3xl:mt-16 flex items-center gap-3 3xl:gap-6 p-4 3xl:p-8 bg-[#2b8cee]/5 border border-[#2b8cee]/20 rounded-xl animate-in fade-in slide-in-from-bottom-2 duration-700">
          <Info size={24} className="text-[#2b8cee] 3xl:w-8 3xl:h-8" />
          <p className="text-sm 3xl:text-lg text-slate-600 leading-relaxed">
            <span className="font-bold text-[#2b8cee]">Mẹo:</span> Chọn nhiều hàng để thực hiện các thao tác hàng loạt như xóa hoặc đổi chủ đề. Bạn cũng có thể kéo thả tệp Excel để nhập dữ liệu nhanh chóng.
          </p>
        </div>
      </main>
    </>
  );
}