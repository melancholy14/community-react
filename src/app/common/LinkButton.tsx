import React from 'react';
import { Link } from 'react-router-dom';

type LinkButtonProps = {
  to: string;
  className?: string;
  children: React.ReactNode;
};

function LinkButton({ to, className, children }: LinkButtonProps) {
  return (
    <Link to={to} className={`bg-purple-300 p-4 rounded-lg ${className || ''}`}>
      {children}
    </Link>
  );
}

export default LinkButton;
