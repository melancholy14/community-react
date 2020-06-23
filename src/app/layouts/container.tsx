import React from 'react';

type ContainerProps = {
  children: React.ReactNode;
};

function Container({ children }: ContainerProps) {
  return <div className="container bg-purple-200 h-full-16">{children}</div>;
}

export default Container;
