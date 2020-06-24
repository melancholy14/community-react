import React from 'react';

type ButtonProps = {
  type?: 'button' | 'reset' | 'submit';
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
};

function Button({ type, className, children, onClick }: ButtonProps) {
  return (
    <button
      type={type || 'button'}
      className={`bg-purple-500 rounded-lg py-2 px-4 focus:outline-none ${
        className || ''
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
