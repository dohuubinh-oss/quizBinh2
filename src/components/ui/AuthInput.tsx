'use client';

import React from 'react';

// NOTE: The 'label' prop has been removed. The label should be handled by the parent form.
interface AuthInputProps {
  id: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon: React.ReactNode;
  required?: boolean;
  children?: React.ReactNode;
  className?: string;
}

const AuthInput: React.FC<AuthInputProps> = ({ 
  id, 
  type, 
  placeholder, 
  value, 
  onChange, 
  icon, 
  required = false, 
  children,
  className = ''
}) => {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#617589]">
        {icon}
      </div>
      <input 
        id={id}
        name={id}
        required={required}
        className={`block w-full rounded-lg border-[#dbe0e6] pl-10 pr-3 py-3 text-[#111418] bg-white placeholder-[#617589] focus:border-[#2b8cee] focus:ring-[#2b8cee] focus:ring-1 sm:text-sm ${className}`} 
        placeholder={placeholder} 
        type={type} 
        value={value}
        onChange={onChange}
      />
      {children}
    </div>
  );
};

export default AuthInput;
