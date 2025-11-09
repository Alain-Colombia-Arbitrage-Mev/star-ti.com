import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

interface BaseInputProps {
  label?: string;
  error?: string;
  helperText?: string;
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement>, BaseInputProps {}

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>, BaseInputProps {}

export function Input({ label, error, helperText, className = "", ...props }: InputProps) {
  const inputId = props.id || `input-${props.name || "default"}`;
  
  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={inputId}
          className="block text-sm font-semibold text-gray-700 mb-2"
        >
          {label}
          {props.required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <input
        {...props}
        id={inputId}
        className={`
          w-full px-4 py-3
          border rounded-lg
          transition-all duration-200
          focus:ring-2 focus:ring-blue-500 focus:border-transparent
          disabled:bg-gray-50 disabled:cursor-not-allowed
          ${error ? "border-red-500 focus:ring-red-500" : "border-gray-300"}
          ${className}
        `.trim().replace(/\s+/g, " ")}
      />
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
      {helperText && !error && (
        <p className="mt-1 text-sm text-gray-500">{helperText}</p>
      )}
    </div>
  );
}

export function Textarea({ label, error, helperText, className = "", ...props }: TextareaProps) {
  const textareaId = props.id || `textarea-${props.name || "default"}`;
  
  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={textareaId}
          className="block text-sm font-semibold text-gray-700 mb-2"
        >
          {label}
          {props.required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <textarea
        {...props}
        id={textareaId}
        className={`
          w-full px-4 py-3
          border rounded-lg
          transition-all duration-200
          focus:ring-2 focus:ring-blue-500 focus:border-transparent
          disabled:bg-gray-50 disabled:cursor-not-allowed
          resize-none
          ${error ? "border-red-500 focus:ring-red-500" : "border-gray-300"}
          ${className}
        `.trim().replace(/\s+/g, " ")}
      />
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
      {helperText && !error && (
        <p className="mt-1 text-sm text-gray-500">{helperText}</p>
      )}
    </div>
  );
}









