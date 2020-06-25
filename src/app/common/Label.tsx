import React from 'react';

type LabelProps = {
  label: string;
  id: string;
  children: React.ReactNode;
};

function Label({ label, id, children }: LabelProps) {
  return (
    <div className="flex items-center my-4">
      <label htmlFor={id} className="w-1/6">
        {label}
      </label>
      {children}
    </div>
  );
}

export default Label;
