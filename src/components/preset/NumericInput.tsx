import React from 'react';

interface NumericInputProps {
  label: string;
  name: string;
  defaultValue: number;
  min?: number;
  max?: number;
  step?: number;
}

export function NumericInput({
  label,
  name,
  defaultValue,
  min,
  max,
  step = 1,
}: NumericInputProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
      </label>
      <input
        type="number"
        name={name}
        id={name}
        defaultValue={defaultValue}
        min={min}
        max={max}
        step={step}
        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      />
    </div>
  );
}