import React from 'react';

type InputProps = {
  type?: string;
  label: string;
  id: string;
  className?: string;
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function Input({ type, label, id, className, value, onChange }: InputProps) {
  return (
    <div className={`flex flex-col ${className || ''}`}>
      <label className="font-semi" htmlFor={id}>
        {label}
      </label>
      <input id={id} type={type || 'text'} value={value} onChange={onChange} />
    </div>
  );
}

export default Input;
