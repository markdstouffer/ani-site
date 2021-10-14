import React from 'react';
import Title from './components/Title';
import Buttons from './components/Buttons'
import example from './example.gif'

const App = ()  => {
  return (
    <div className='container'>
      <Title />
      <img src={example} className='gif'/>
      <Buttons />
    </div>
  );
}

export default App;
