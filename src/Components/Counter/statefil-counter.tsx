import * as React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps, IProps, State} from './statefil-counter_index';
import { Button } from '../Button/Button';


export class ClassCounter extends React.Component<IProps, State> {
 
  render() {
    const { label } = this.props;


    return (
      <div>
        <Button type="left" onClick={this.props.onPrev}/>
        <span>
          {label}: {this.props.active}
        </span>
        <Button type="right" onClick={this.props.onNext}/>
      </div>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ClassCounter);;