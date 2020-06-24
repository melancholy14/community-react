import React from 'react';

type ContainerProps = {
  children: React.ReactNode;
};

function Container({ children }: ContainerProps) {
  return (
    <div className="bg-purple-200 pt-16 overflow-auto min-h-full">
      <div className="container h-full">{children}</div>
    </div>
  );
}

export default Container;
