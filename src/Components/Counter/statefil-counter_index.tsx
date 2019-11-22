import {bindActionCreators, Dispatch} from 'redux'
import {onNext, onPrev} from '../../store/action/action';
type Props = {
    label: string;
  };
  
  export interface IProps extends IActions,IStateProps {
    label: string;
  }
  
  export interface State  {
    count: number;
  
  };

type IStateProps = ReturnType<typeof mapStateToProps>;
export const mapStateToProps = (store: any) =>({
  active: store.active + 1
})

type IActions = ReturnType<typeof mapDispatchToProps>;

export const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  onPrev,
      onNext
  }, dispatch);
