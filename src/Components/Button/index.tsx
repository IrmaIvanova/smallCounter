import { ReactType } from 'react'
import { IClassNameProps } from '@bem-react/core'
import { cn } from '@bem-react/classname'

export interface IButtonProps extends IClassNameProps {
  type?: 'link' | 'right' | 'left';
  as?: ReactType<any>;
  onClick: () => void;
}

export const cnButton = cn('Button')