import React from 'react'
import { IButtonProps, cnButton} from '../index';
import { withBemMod } from '@bem-react/core'
// export interface IButtonTypeLinkProps extends IClassNameProps {
export interface IButtonTypeLeftProps extends IButtonProps {
    className?: string;
}

// export interface IButtonTypeRightState {
//   text?: string;

// }

// export interface IButtonTypeRightProps {
//     // type?: 'button'

//   }
  
  export const withButtonTypeLeft = withBemMod<any, IButtonProps>(
    cnButton(),
    { type: 'left' },
    (Presenter) => 
        (props: IButtonTypeLeftProps) => 
            <Presenter {...props}>
                &lt;
            </Presenter>
  )