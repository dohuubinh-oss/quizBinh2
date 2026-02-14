'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Sparkles, 
  Brain, 
  Wand2, 
  FileText, 
  FileEdit, 
  CheckSquare, 
  Lightbulb, 
  PlusCircle, 
  Trash2,
  Save
} from 'lucide-react';
import toast from 'react-hot-toast';

import Card from '@/components/ui/Card'; 
import Label from '@/components/ui/Label'; 
import Textarea from '@/components/ui/Textarea'; 
import { Button } from '@/components/ui/Button'; 
import AnswerInput from '@/components/ui/AnswerInput'; 
import CreateQuestionSidebar from '@/components/questions/CreateQuestionSidebar';
import { Difficulty, Topic, Question, QuestionFormat, SubQuestion } from '@/lib/definitions';

// API Configuration
const API_BASE_PATH = '/api';

// Client-side API caller
async function callApi(endpoint: string, method: 'POST' | 'GET', body?: any) {
    const token = localStorage.getItem('token');
    if (!token) {
        toast.error("Lỗi xác thực. Vui lòng đăng nhập lại.");
        return { success: false, error: "Token not found" };
    }
    try {
        const response = await fetch(`${API_BASE_PATH}${endpoint}`, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(body),
        });
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.indexOf("application/json") !== -1) {
            const responseBody = await response.json();
            if (!response.ok) {
                throw new Error(responseBody.message || `API request failed with status ${response.status}`);
            }
            return { success: true, data: responseBody.data };
        } else {
            const textResponse = await response.text();
            throw new Error(`Expected JSON response, but received ${response.status} ${response.statusText}. Response: ${textResponse}`);
        }
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An unknown network error occurred.';
        console.error(`API call failed: ${errorMessage}`);
        return { success: false, error: errorMessage };
    }
}

// Helper to create a new, empty sub-question
const createNewSubQuestion = (): SubQuestion => ({
  content: '',
  options: ['', '', '', ''],
  correctAnswer: [],
  explanation: '',
  tags: [],
});

const CreateQuestionPage: React.FC = () => {
  const router = useRouter();
  const [isExtracting, setIsExtracting] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [rawInput, setRawInput] = useState('');

  const getInitialState = (): Partial<Question> => ({
    category: 'TOEIC', 
    part: 5,
    topic: Topic.GRAMMAR,
    format: QuestionFormat.MULTIPLE_CHOICE,
    resource: { passages: [''] },
    subQuestions: [createNewSubQuestion()],
    metadata: {
        level: Difficulty.MEDIUM,
        source: ''
    }
  });

  const [questionData, setQuestionData] = useState<Partial<Question>>(getInitialState());

  const handleAiExtract = async () => {
        if (!rawInput.trim()) {
            toast.error("Vui lòng nhập nội dung câu hỏi thô.");
            return;
        }
        setIsExtracting(true);
        const result = await callApi('/questions/generateQuestion', 'POST', { rawQuestionText: rawInput });
        setIsExtracting(false);
        if (result.success && result.data) {
            toast.success('AI đã phân tích câu hỏi thành công!');
            const aiData = result.data as Question;

            const passages = aiData.resource?.passages ? (Array.isArray(aiData.resource.passages) ? aiData.resource.passages : [aiData.resource.passages]) : [''];

            setQuestionData(prev => ({
                ...prev, 
                ...aiData, 
                resource: { ...prev.resource, ...aiData.resource, passages },
                metadata: { ...prev.metadata, ...aiData.metadata },
            }));
        } else {
            toast.error(result.error || 'AI không thể xử lý yêu cầu này.');
        }
    };

    const handleSave = async (andContinue = false) => {
        if (!questionData.subQuestions || questionData.subQuestions.some(sq => !sq.content?.trim())) {
            return toast.error("Nội dung của tất cả các câu hỏi con không được để trống.");
        }
        setIsSaving(true);
        const result = await callApi('/questions', 'POST', questionData);
        setIsSaving(false);
        if (result.success) {
            if (andContinue) {
                toast.success('Đã lưu! Sẵn sàng cho câu hỏi tiếp theo.');
                setRawInput('');
                setQuestionData(getInitialState());
            } else {
                toast.success('Câu hỏi đã được lưu thành công!');
                router.push('/dashboard/teacher/questions');
            }
        } else {
            toast.error(result.error || 'Không thể lưu câu hỏi.');
        }
    }

  const updateRootField = (field: keyof Question, value: any) => {
    setQuestionData(prev => ({ ...prev, [field]: value }));
  };

  const updateMetadataField = (field: keyof Question['metadata'], value: any) => {
    setQuestionData(prev => ({ ...prev, metadata: { ...(prev.metadata || {}), [field]: value } }));
  };

  const updatePassage = (value: string) => {
    setQuestionData(prev => ({ ...prev, resource: { ...prev.resource, passages: [value] } }));
  }

  const updateSubQuestionField = (subIndex: number, field: keyof SubQuestion, value: any) => {
    setQuestionData(prev => {
        const newSubQuestions = [...(prev.subQuestions || [])];
        newSubQuestions[subIndex] = { ...newSubQuestions[subIndex], [field]: value };
        return { ...prev, subQuestions: newSubQuestions };
    });
  };

  const updateOption = (subIndex: number, optIndex: number, value: string) => {
      const newOptions = [...(questionData.subQuestions?.[subIndex]?.options || [])];
      newOptions[optIndex] = value;
      updateSubQuestionField(subIndex, 'options', newOptions);
  };

  const setCorrectAnswer = (subIndex: number, optionText: string) => {
      updateSubQuestionField(subIndex, 'correctAnswer', [optionText]);
  }

  const addSubQuestion = () => {
      setQuestionData(prev => ({
          ...prev,
          subQuestions: [...(prev.subQuestions || []), createNewSubQuestion()]
      }));
  }

  const removeSubQuestion = (subIndex: number) => {
      if (questionData.subQuestions && questionData.subQuestions.length > 1) {
        setQuestionData(prev => ({
            ...prev,
            subQuestions: prev.subQuestions?.filter((_, i) => i !== subIndex)
        }));
      } else {
        toast.error("Phải có ít nhất một câu hỏi con.");
      }
  }

  return (
    <div className="max-w-7xl mx-auto w-full px-4 md:px-6 py-8">
        <Card as="section" className="mb-8 !p-8 shadow-xl border-2 border-[#2b8cee]/30 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none"><Sparkles size={160} className="text-[#2b8cee]" /></div>
             <div className="relative z-10 flex flex-col gap-6">
                 <div className="flex items-center gap-4">
                     <div className="p-3 rounded-lg bg-gradient-to-br from-[#2b8cee] to-blue-400 text-white shadow-md"><Brain size={28} /></div>
                     <div>
                         <h2 className="text-xl font-bold text-gray-900">Tạo nhanh với AI</h2>
                         <p className="text-sm text-gray-500">Dán nội dung từ Word, PDF hoặc Website vào đây. AI sẽ tự động tách đoạn văn và các câu hỏi con.</p>
                     </div>
                 </div>
                 <Textarea 
                    value={rawInput}
                    onChange={(e) => setRawInput(e.target.value)}
                    className="min-h-[180px] !p-6 text-base placeholder:text-gray-400"
                    placeholder="Ví dụ: Questions 1-2 refer to the following notice. The library will be closed..."
                />
                <div className="flex justify-end">
                     <Button 
                        onClick={handleAiExtract}
                        disabled={isExtracting || !rawInput.trim()}
                        className="bg-gradient-to-br from-[#2b8cee] to-blue-400 ai-glow hover:scale-[1.02] active:scale-[0.98] text-white px-8 py-4 rounded-xl font-bold text-base flex items-center gap-3 transition-all shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        <Wand2 size={24} className={isExtracting ? 'animate-spin' : 'animate-pulse'} />
                        {isExtracting ? 'Đang phân tích...' : 'Phân tích với AI'}
                    </Button>
                 </div>
             </div>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 items-start">
            <main className="lg:col-span-7 flex flex-col gap-8">
                <Card>
                    <Label icon={<FileText size={22} className="text-[#2b8cee]" />}>Đoạn văn chung (Reading Passage)</Label>
                    <Textarea 
                        value={questionData.resource?.passages?.[0] || ''}
                        onChange={(e) => updatePassage(e.target.value)}
                        className="min-h-[200px] bg-gray-50/50"
                        placeholder="Nếu có đoạn văn chung cho nhiều câu hỏi, AI sẽ tự điền vào đây..."
                    />
                </Card>

                {questionData.subQuestions?.map((sub, index) => (
                    <div key={index} className="border-2 border-dashed border-gray-200 rounded-2xl p-6 relative flex flex-col gap-8">
                        <div className="absolute -top-3 -left-3 bg-white px-3 py-1 text-sm font-bold text-[#2b8cee] border-2 border-gray-200 rounded-full">
                            Câu hỏi con #{index + 1}
                        </div>
                        <button onClick={() => removeSubQuestion(index)} className="absolute -top-3 -right-3 bg-red-100 p-2 rounded-full text-red-500 hover:bg-red-200 hover:scale-110 transition-transform">
                            <Trash2 size={16} />
                        </button>

                        <Card className="!p-0 !shadow-none !border-0">
                            <Label icon={<FileEdit size={22} className="text-[#2b8cee]" />}>Nội dung câu hỏi con #{index + 1}</Label>
                            <Textarea 
                                value={sub.content || ''}
                                onChange={(e) => updateSubQuestionField(index, 'content', e.target.value)}
                                className="min-h-[100px]"
                                placeholder={`Nội dung cho câu hỏi con #${index + 1}...`}
                            />
                        </Card>

                        <Card className="!p-0 !shadow-none !border-0">
                             <div className="flex justify-between items-center mb-4">
                                <Label icon={<CheckSquare size={22} className="text-[#2b8cee]" />}>Đáp án cho câu hỏi con #{index + 1}</Label>
                                <span className="text-xs font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Chọn đáp án đúng</span>
                             </div>
                             <div className="flex flex-col gap-4">
                                {sub.options.map((opt, i) => (
                                    <AnswerInput
                                        key={`${index}-${i}`}
                                        index={i}
                                        option={opt}
                                        isChecked={sub.correctAnswer?.[0] === opt}
                                        onCheck={() => setCorrectAnswer(index, opt)}
                                        onUpdate={(value) => updateOption(index, i, value)}
                                    />
                                ))}
                            </div>
                        </Card>

                        <Card className="!p-0 !shadow-none !border-0">
                            <Label icon={<Lightbulb size={22} className="text-[#2b8cee]" />}>Lời giải thích cho câu hỏi con #{index + 1}</Label>
                            <Textarea 
                                value={sub.explanation || ''}
                                onChange={(e) => updateSubQuestionField(index, 'explanation', e.target.value)}
                                className="min-h-[120px]"
                                placeholder={`Giải thích cho câu hỏi con #${index + 1}...`}
                            />
                        </Card>
                    </div>
                ))}

                <Button onClick={addSubQuestion} variant="outline" className="w-full py-4 text-base border-dashed hover:bg-green-50 hover:text-green-600 hover:border-green-400">
                    <PlusCircle size={20} className="mr-2" />
                    Thêm câu hỏi con
                </Button>

            </main>

            <aside className="lg:col-span-3 sticky top-8">
                <CreateQuestionSidebar 
                    category={questionData.category || ''}
                    setCategory={(val) => updateRootField('category', val)}
                    part={questionData.part || 0}
                    setPart={(val) => updateRootField('part', val)}
                    format={questionData.format || ''}
                    setFormat={(val) => updateRootField('format', val)}
                    source={questionData.metadata?.source || ''}
                    setSource={(val) => updateMetadataField('source', val)}
                    difficulty={questionData.metadata?.level || Difficulty.MEDIUM}
                    setDifficulty={(val) => updateMetadataField('level', val)}
                    topic={questionData.topic || Topic.GRAMMAR}
                    setTopic={(val) => updateRootField('topic', val)}
                    tags={questionData.subQuestions?.length === 1 ? questionData.subQuestions[0].tags || [] : []}
                    setTags={(val) => questionData.subQuestions?.length === 1 && updateSubQuestionField(0, 'tags', val)}
                    onSave={() => handleSave(false)}
                    onSaveAndContinue={() => handleSave(true)}
                    onCancel={() => router.push('/dashboard/teacher/questions')}
                    isSaving={isSaving}
                />
            </aside>
        </div>
    </div>
  );
};

export default CreateQuestionPage;
