import React from 'react';
import { twMerge } from 'tailwind-merge';
import { tv, type VariantProps } from 'tailwind-variants';

const inputStyle = tv({
  base: 'bg-transparent text-secondary-800 border-1.5 border-secondary-200 focus:border-primary-600 focus:ring-2 focus:ring-primary-100 placeholder:text-secondary-200 rounded-md focus:outline-none',
  variants: {
    size: {
      sm: 'p-1 text-sm',
      md: 'p-2 text-base',
      lg: 'p-3 text-lg',
    },
  },
});

type InputProps = VariantProps<typeof inputStyle>;
type InputNativeProps = React.InputHTMLAttributes<HTMLInputElement>;

interface InputCombinedProps extends Omit<InputNativeProps, keyof InputProps>, InputProps {}

export const Input: React.FC<InputCombinedProps> = ({ size, className, ...props }) => {
  return <input className={twMerge(inputStyle({ size }), className)} {...props} />;
};
