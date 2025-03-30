import React, { forwardRef } from 'react';
import { BaseProps } from '../@types/common';
import { PiSpinnerGap } from 'react-icons/pi';
import { twMerge } from 'tailwind-merge';

type Props = BaseProps & {
  icon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  disabled?: boolean;
  text?: boolean;
  outlined?: boolean;
  loading?: boolean;
  onClick: () => void;
  children: React.ReactNode;
};

const Button = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  return (
    <button
      ref={ref}
      className={twMerge(
        'flex items-center justify-center whitespace-nowrap rounded-md border p-2 px-4 font-medium',
        props.text && 'border-0 text-aws-sea-blue-light dark:text-aws-sea-blue-light hover:underline',
        props.outlined && 'border-aws-squid-ink-light/50 dark:border-aws-font-color-gray/50 hover:bg-white dark:hover:bg-aws-ui-color-dark dark:text-aws-font-color-white-dark',
        !props.text &&
          !props.outlined &&
          'bg-aws-orange-light dark:bg-aws-orange-light border-aws-orange-light dark:border-aws-orange-light text-aws-font-color-white-light dark:text-aws-font-color-white-dark',
        props.disabled || props.loading ? 'opacity-50' : 'hover:bg-aws-orange-hover-light dark:hover:bg-aws-orange-hover-light',
        props.className
      )}
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
        props.onClick();
      }}
      disabled={props.disabled || props.loading}>
      {props.icon && !props.loading && (
        <div className="-ml-1 mr-2">{props.icon}</div>
      )}
      {props.loading && <PiSpinnerGap className="-ml-1 mr-2 animate-spin" />}
      {props.children}
      {props.rightIcon && <div className="ml-2">{props.rightIcon}</div>}
    </button>
  );
});

export default Button;
