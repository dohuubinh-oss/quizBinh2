import React from 'react';

// Định nghĩa props cho component Button
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'default' | 'large';
}

/**
 * Button là một component UI chung, có thể tái sử dụng cho các nút bấm trong toàn bộ ứng dụng.
 * Component này quản lý các biến thể style (primary, secondary) và kích thước bằng logic điều kiện bên trong.
 * @param className - Lớp CSS bổ sung để tùy chỉnh.
 * @param variant - Biến thể của nút ('primary' hoặc 'secondary').
 * @param size - Kích thước của nút ('default' hoặc 'large').
 * @param props - Các props khác của thẻ button.
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'default', ...props }, ref) => {

    // Base styles cho tất cả các nút
    const baseStyles = 'inline-flex items-center justify-center rounded-full text-sm font-bold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';

    // Styles cho các biến thể (variant)
    const variantStyles = {
      primary: 'bg-[#2b8cee] text-white shadow-md shadow-[#2b8cee]/30 hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5 active:scale-95',
      secondary: 'bg-transparent text-[#111418] hover:bg-gray-100',
    };

    // Styles cho các kích thước (size)
    const sizeStyles = {
      default: 'h-10 px-6',
      large: 'h-12 px-8',
    };

    // Kết hợp các class lại với nhau
    const combinedClassName = [
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      className, // Cho phép tùy chỉnh từ bên ngoài
    ].filter(Boolean).join(' ');

    return (
      <button
        className={combinedClassName}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

// Chỉ export Button
export { Button };
