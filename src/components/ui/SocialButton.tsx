"use client";

import React, { ReactNode } from 'react';

interface SocialButtonProps {
  provider: 'google' | 'facebook';
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
    <path d="M12 5.16c1.58 0 2.99.54 4.1 1.62l3.15-3.15C17.45 1.99 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    <path d="M1 1h22v22H1z" fill="none"/>
  </svg>
);

const FacebookIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#1877F2">
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89H8.313v-2.89H10.44V9.6c0-2.165 1.259-3.378 3.29-3.378.932 0 1.956.166 1.956.166v2.463h-1.26c-1.07 0-1.458.647-1.458 1.41v1.94h2.8l-.444 2.89h-2.356v7.008C18.343 21.128 22 16.991 22 12z" />
    </svg>
);

const providerConfig: Record<SocialButtonProps['provider'], { icon: ReactNode; text: string }> = {
  google: {
    icon: <GoogleIcon />,
    text: 'Continue with Google',
  },
  facebook: {
    icon: <FacebookIcon />,
    text: 'Continue with Facebook',
  },
};

const SocialButton: React.FC<SocialButtonProps> = ({ onClick, provider }) => {
  const { icon, text } = providerConfig[provider];

  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center w-full px-4 py-2.5 border border-[#dbe0e6] rounded-lg shadow-sm bg-white text-sm font-medium text-[#111418] hover:bg-gray-50 transition-colors"
      type="button"
    >
      {icon}
      <span className="font-semibold ml-3">{text}</span>
    </button>
  );
};

export default SocialButton;
