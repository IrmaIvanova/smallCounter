import React from 'react'
import { IButtonProps, cnButton} from '../index';
import { withBemMod } from '@bem-react/core'
// export interface IButtonTypeLinkProps extends IClassNameProps {
export interface IButtonTypeRightProps extends IButtonProps {
    className?: string;
}

// export interface IButtonTypeRightState {
//   text?: string;

// }

// export interface IButtonTypeRightProps {
//     // type?: 'button'

//   }
  
  export const withButtonTypeRight = withBemMod<any, IButtonProps>(
    cnButton(),
    { type: 'right' },
    (Presenter) => 
        (props: IButtonTypeRightProps) => 
            <Presenter {...props}>
                &gt;
            </Presenter>
  )