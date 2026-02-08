import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Hàm tiện ích để kết hợp các class name một cách an toàn.
 * @param inputs - Danh sách các class name. Có thể là chuỗi, object, hoặc mảng.
 * @returns Chuỗi class name đã được hợp nhất và không có xung đột.
 * 
 * Luồng hoạt động:
 * 1. `clsx` nhận vào tất cả các input và tạo ra một chuỗi class name dựa trên các điều kiện.
 *    Ví dụ: cn("p-4", { "bg-red-500": true }, false && "text-white") -> "p-4 bg-red-500"
 * 2. `twMerge` nhận chuỗi class name từ `clsx` và giải quyết các xung đột của Tailwind CSS.
 *    Ví dụ: twMerge("p-2", "p-4") -> "p-4"
 *    Ví dụ: twMerge("p-4 bg-red-500", "bg-blue-500") -> "p-4 bg-blue-500"
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
