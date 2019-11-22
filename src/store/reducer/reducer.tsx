import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { INCREAMENT, DECREAMENT } from "../action/action";
// readonly props: Props = {
//     label: ' ',
//   };

//   readonly state: State = {
//     count: 0,
//   };

//   handleIncrement = () => {
//     this.setState({ count: this.state.count + 1 });
//   };
//   handleDecrement = () => {
//     this.setState({ count: this.state.count - 1 });
//   };

interface IAction {
    type: string;
    payload: any
}

const Counter = (state = { active: 0 }, action: IAction) => {
    switch (action.type) {
        case 'SET_DATA':
            return {
                ...state,
                ...action.payload
            }
        case INCREAMENT:
            return {
                ...state,
                active: (state.active + 1) 
            }
        case DECREAMENT:
            return {
                ...state,
                active: state.active - 1
            }
        default:
            return state
    }
}
var store = createStore(Counter, compose(
    applyMiddleware(thunk)));

export default store;