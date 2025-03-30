import React from 'react';
import { BaseProps } from '../@types/common';
import { twMerge } from 'tailwind-merge';

type Props = BaseProps & {
  disabled?: boolean;
  onClick: () => void;
  children: React.ReactNode;
};

const ButtonIcon: React.FC<Props> = (props) => {
  return (
    <button
      className={twMerge(
        'flex items-center justify-center rounded-md p-2 text-xl hover:shadow',
        'text-aws-sea-blue-light dark:text-aws-sea-blue-light hover:shadow-aws-sea-blue-light/20',
        props.disabled ? 'opacity-50' : 'hover:text-aws-sea-blue-hover-light dark:hover:text-aws-sea-blue-hover-light',
        props.className
      )}
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
        props.onClick();
      }}
      disabled={props.disabled}>
      {props.children}
    </button>
  );
};

export default ButtonIcon;
