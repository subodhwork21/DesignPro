'use client';
import React, { useState, ChangeEvent } from 'react';

interface InputProps {
  type?: string;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  required?: boolean;
  name?: string;
  id?: string;
  initialValue?: string;
  autoComplete?: string;
  disabled?: boolean;
  min?: number | string;
  max?: number | string;
  pattern?: string;
  readOnly?: boolean;
  step?: number | string;
  maxLength?: number;
  minLength?: number;
}

const Input: React.FC<InputProps> = ({
  type = "text",
  placeholder = "",
  onChange,
  className = "",
  required = false,
  name,
  id,
  initialValue = "",
  autoComplete,
  disabled = false,
  min,
  max,
  pattern,
  readOnly = false,
  step,
  maxLength,
  minLength,
}) => {
  const [value, setValue] = useState<string>(initialValue);
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (onChange) onChange(e);
  };
  
  return (
    <input 
      type={type}
      name={name}
      id={id}
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
      required={required}
      className={`border-b border-neutral-800 bg-transparent flex-grow py-2 focus:outline-none ${className}`}
      autoComplete={autoComplete}
      disabled={disabled}
      min={min}
      max={max}
      pattern={pattern}
      readOnly={readOnly}
      step={step}
      maxLength={maxLength}
      minLength={minLength}
    />
  );
};

export default Input;