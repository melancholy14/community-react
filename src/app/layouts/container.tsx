import React from 'react';

type ContainerProps = {
  className?: string;
  children: React.ReactNode;
};

function Container({ className, children }: ContainerProps) {
  return (
    <div className="bg-purple-200 pt-16 overflow-auto min-h-full">
      <div className="container h-full">
        <div className={`w-3/4 m-auto ${className || ''}`}>{children}</div>
      </div>
    </div>
  );
}

export default Container;
