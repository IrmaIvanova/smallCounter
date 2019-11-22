import React, { FC } from 'react';
// import { compose } from '@bem-react/core';
import ClassCounter from './Components/Counter/statefil-counter';
import { Button } from './Components/Button/Button';


import './App.css';

 const App: FC = () => (
  <div className="App">
    <Button>I'm basic</Button>
    <Button  type="link" href="#stub">I'm type link</Button>
    <Button className="Button_them_action_left" theme="action">I'm the button onPrev</Button>
    <Button className="Button_them_action_right" theme="action">I'm the button onNext</Button>


    <Button theme="action" type="link">I'm all together</Button>
    <Button className=".Button_them_action_right" type="right"/>
    <Button type="left"/>
    <ClassCounter label="Counter"/>
  </div>
);

export default App;