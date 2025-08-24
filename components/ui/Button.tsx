import { ComponentProps } from 'react';
import clsx from 'classnames';

type Props = ComponentProps<'button'> & {
  variant?: 'default' | 'primary' | 'ghost';
  size?: 'sm' | 'md';
};

export function Button({ className, variant = 'default', size = 'md', ...props }: Props) {
  return (
    <button
      className={clsx(
        'focus-ring inline-flex items-center justify-center rounded-md border text-sm transition-colors',
        {
          'px-3 py-1.5': size === 'sm',
          'px-3.5 py-2': size === 'md',
        },
        {
          'bg-white dark:bg-neutral-950': variant === 'default',
          'bg-indigo-600 text-white border-indigo-600 hover:bg-indigo-700': variant === 'primary',
          'bg-transparent border-transparent hover:bg-neutral-100 dark:hover:bg-neutral-800': variant === 'ghost',
        },
        className,
      )}
      {...props}
    />
  );
}


