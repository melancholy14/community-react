import React from 'react';
import { Link } from 'react-router-dom';

type LinkButtonProps = {
  to: string;
  className?: string;
  children: React.ReactNode;
};

function LinkButton({ to, className, children }: LinkButtonProps) {
  return (
    <Link
      to={to}
      className={`bg-purple-300 py-2 px-4 rounded-lg ${className || ''}`}
    >
      {children}
    </Link>
  );
}

export default LinkButton;
