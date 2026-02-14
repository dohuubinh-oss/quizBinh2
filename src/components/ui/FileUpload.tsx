
import React, { useRef } from 'react';

interface FileUploadProps {
  icon: React.ReactElement;
  name: string;
  accept: string;
}

/**
 * FileUpload Component
 * 
 * @param icon - Icon hiển thị trong ô upload.
 * @param name - Tên của input (quan trọng cho FormData).
 * @param accept - Các loại file được chấp nhận (ví dụ: "image/*").
 * 
 * @description
 * Component này tạo ra một khu vực cho phép người dùng kéo thả hoặc chọn file để tải lên.
 * Nó được sử dụng cho cả tải ảnh và âm thanh, thể hiện tính tái sử dụng cao.
 * 
 * Lợi ích:
 * - **Tái sử dụng:** Một component cho nhiều loại file-upload khác nhau.
 * - **Gói gọn logic:** Logic xử lý input file được gói gọn.
 * - **Giao diện nhất quán:** Đảm bảo các ô upload file có giao diện giống hệt nhau.
 */
const FileUpload: React.FC<FileUploadProps> = ({ icon, name, accept }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="group flex flex-col items-center justify-center gap-3 rounded-lg border-2 border-dashed border-gray-200 p-6 transition-all bg-gray-50/50">
      <div className="size-12 rounded-full bg-[#2b8cee]/10 flex items-center justify-center text-[#2b8cee]">
        {icon}
      </div>
      <input 
        ref={inputRef}
        name={name}
        accept={accept}
        type="file" 
        className="text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#2b8cee]/10 file:text-[#2b8cee] hover:file:bg-[#2b8cee]/20 cursor-pointer"
      />
    </div>
  );
};

export default FileUpload;
