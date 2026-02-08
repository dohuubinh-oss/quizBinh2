"use client";

import React from 'react';
import { cn } from '@/lib/utils';

// --- GIẢI THÍCH THAY ĐỔI ---
// 1. VÔ HIỆU HÓA LINT RULE: Thêm comment `eslint-disable-next-line` để bỏ qua lỗi "Cannot access refs during render".
//    - Lý do: Đây là một trường hợp báo động giả (false positive). Cách chúng ta sử dụng `React.cloneElement` để truyền `ref` khi `asChild` là true là một pattern hoàn toàn hợp lệ và cần thiết để `forwardRef` hoạt động đúng.
//    - Linter không đủ thông minh để hiểu ngữ cảnh này, vì vậy chúng ta cần chỉ cho nó biết rằng code này là an toàn và có chủ đích.

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'special' | 'outlineWhite';
  size?: 'default' | 'large';
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'default', asChild = false, children, ...props }, ref) => {

    const baseStyles = 'inline-flex items-center justify-center rounded-full text-lg font-bold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95';

    const variantStyles = {
      primary: 'bg-[#2b8cee] text-white shadow-md shadow-[#2b8cee]/30 hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5',
      secondary: 'bg-transparent text-gray-900 hover:bg-gray-100',
      special: 'bg-white text-[#2b8cee] shadow-lg hover:bg-gray-50 hover:-translate-y-1',
      outlineWhite: 'bg-transparent border-2 border-white text-white hover:bg-white/10',
    };

    const sizeStyles = {
      default: 'h-12 px-8',
      large: 'h-14 px-10',
    };
    
    const finalClassName = cn(
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      className
    );

    if (asChild) {
        const child = React.Children.only(children) as React.ReactElement;
        // eslint-disable-next-line react-hooks/refs
        return React.cloneElement(child, {
            className: cn(child.props.className, finalClassName),
            ref: ref,
            ...props
        });
    }

    return (
      <button
        className={finalClassName}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = 'Button';

export { Button };
