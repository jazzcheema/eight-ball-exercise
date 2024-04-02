import { useState } from 'react';
import './App.css';
import EightBall from './Eightball';


/** Component for entire page.
 *
 * Props: none
 * State: none
 *
 * App => EightBall
*/

function App() {
  return (
      <div className='App-div'>
        <EightBall/>
      </div>
  );
};

export default App;
