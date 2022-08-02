import React from 'react';
import { Randomiser } from './components/randomiser/Randomiser';
import { Counter } from './components/counter/Counter';

function App() {
  return (
    <div className="App">
      <Counter/>
      <Randomiser/>
    </div>
  );
}

export default App;
