'use client';

import React from 'react';
import { Settings, Save, PlusCircle } from 'lucide-react';

// Import enums
import { Difficulty, Topic, QuestionFormat } from '@/lib/definitions';

// --- FINAL, FINAL CORRECTED IMPORTS ---
import SelectInput from '@/components/ui/SelectInput'; // Default
import TagInput from '@/components/ui/TagInput'; // Default
import { Button } from '@/components/ui/Button'; // Named
import Card from '@/components/ui/Card'; // Default
import Label from '@/components/ui/Label'; // Default
import { Input } from '@/components/ui/Input'; // CORRECTED: This is a NAMED export

// Helper component for form fields
interface FormFieldProps {
  label: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: 'text' | 'number';
  disabled?: boolean;
}

const FormField: React.FC<FormFieldProps> = ({ label, value, onChange, placeholder, type = 'text', disabled = false }) => (
  <div>
    <Label className="mb-2 text-sm font-medium text-gray-700">{label}</Label>
    <Input 
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      className="w-full"
    />
  </div>
);

// Props interface for the main sidebar component
interface CreateQuestionSidebarProps {
  difficulty: string;
  setDifficulty: (v: string) => void;
  topic: string;
  setTopic: (v: string) => void;
  tags: string[];
  setTags: (v: string[]) => void;
  category: string;
  setCategory: (v: string) => void;
  part: number;
  setPart: (v: number) => void;
  format: string;
  setFormat: (v: string) => void;
  source: string;
  setSource: (v: string) => void;
  onSave: () => void;
  onSaveAndContinue: () => void;
  onCancel: () => void;
  isSaving: boolean;
}

const CreateQuestionSidebar: React.FC<CreateQuestionSidebarProps> = ({ 
  difficulty, setDifficulty, 
  topic, setTopic, 
  tags, setTags, 
  category, setCategory,
  part, setPart,
  format, setFormat,
  source, setSource,
  onSave, onSaveAndContinue, onCancel,
  isSaving
}) => {

  return (
    <Card as="aside" className="sticky top-8 flex flex-col gap-6">
        <h3 className="text-lg font-bold border-b border-gray-200 pb-4 flex items-center gap-3">
          <Settings size={22} className="text-[#2b8cee]" />
          Phân loại & Hành động
        </h3>
        
        <div className="flex flex-col gap-5">
          <FormField 
            label="Loại bài thi (Category)"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Ví dụ: TOEIC, IELTS"
            disabled={isSaving}
          />

          <FormField 
            label="Phần thi (Part)"
            type="number"
            value={part}
            onChange={(e) => setPart(parseInt(e.target.value, 10) || 0)}
            disabled={isSaving}
          />

          <SelectInput 
            label="Định dạng (Format)"
            options={Object.values(QuestionFormat)}
            value={format}
            onChange={(e) => setFormat(e.target.value)}
            disabled={isSaving}
          />

          <SelectInput 
            label="Độ khó"
            options={Object.values(Difficulty)}
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            disabled={isSaving || !difficulty} 
          />

          <SelectInput 
            label="Chủ đề"
            options={Object.values(Topic)}
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            disabled={isSaving || !topic}
          />

          <FormField 
            label="Nguồn (Source)"
            value={source}
            onChange={(e) => setSource(e.target.value)}
            placeholder="Ví dụ: Cambridge 18, ETS 2023"
            disabled={isSaving}
          />

          <TagInput tags={tags} setTags={setTags} />
        </div>

        <div className="pt-6 border-t border-gray-200 flex flex-col gap-3">
          <Button 
            onClick={onSave}
            disabled={isSaving}
            className="w-full justify-center text-base"
          >
            {isSaving ? 'Đang lưu...' : <><Save size={18} /> Lưu câu hỏi</>}
          </Button>
          <Button 
            onClick={onSaveAndContinue}
            variant="secondary"
            disabled={isSaving}
            className="w-full justify-center text-base border border-gray-200"
          >
             {isSaving ? 'Đang lưu...' : <><PlusCircle size={18} /> Lưu & Tiếp tục</>}
          </Button>
          <Button 
            onClick={onCancel}
            variant="secondary"
            disabled={isSaving}
            className="w-full justify-center text-red-500 hover:bg-red-50 hover:border-red-500/0 text-base"
          >
            Hủy bỏ
          </Button>
        </div>
    </Card>
  );
};

export default CreateQuestionSidebar;
