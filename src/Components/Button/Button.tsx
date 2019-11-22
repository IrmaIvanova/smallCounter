import React, { FC } from 'react'
import { compose } from '@bem-react/core';
import { IButtonProps, cnButton } from './index'
import { withButtonTypeLink } from './_type/Button_type_link';
import { withButtonThemeAction } from './_theme/Button_theme_action';
import { withButtonTypeRight } from './_type/Button_type_right';
import { withButtonTypeLeft} from './_type/Button_type_left';
// import './Button.scss';


export const ButtonPresenter: FC<IButtonProps> = ({
  children,
  className="",
  as: Component = 'button',
  ...props
}) => (
  <Component {...props} className={cnButton({}, [className])}>
    {children}
  </Component>
)

export const Button = compose<any, any, any, any>(
  withButtonThemeAction,
  withButtonTypeLink,
  withButtonTypeRight,
  withButtonTypeLeft
)(ButtonPresenter)