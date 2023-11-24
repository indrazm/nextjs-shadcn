'use client';

import { twMerge } from 'tailwind-merge';
import { tv, type VariantProps } from 'tailwind-variants';

const buttonStyle = tv({
  base: 'tracking-tight font-medium bg-zinc-300 text-zinc-600 rounded-lg transition duration-200 ease-in-out',
  variants: {
    variant: {
      primary: 'bg-primary-600 text-primary-50 hover:bg-primary-700 active:bg-primary-800 ',
      secondary:
        'bg-secondary-100 text-secondary-700 hover:bg-secondary-200 active:bg-secondary-300',
    },
    size: {
      sm: 'py-1 px-2 text-sm',
      md: 'py-2 px-4 text-base',
      lg: 'py-3 px-6 text-lg',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});

type ButtonProps = VariantProps<typeof buttonStyle>;
type ButtonNativeProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

interface ButtonCombinedProps extends ButtonProps, ButtonNativeProps {}

export const Button: React.FC<ButtonCombinedProps> = ({ className, ...props }) => {
  return (
    <button className={twMerge(buttonStyle(props), className)} {...props}>
      {props.children}
    </button>
  );
};
