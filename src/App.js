import { useState } from 'react';
import './App.css';
import AmountPicker from './components/AmountPicker';

function App() {
  const [timeTarget, setTimeTarget] = useState(Math.floor(Date.now().valueOf() / 1000));

  return (
    <div className="App">
      <h1 id="title">hey it's me!</h1>
      <AmountPicker setTimeTarget={setTimeTarget}/>

      <ul className="elementBox">
        <li><h3><span className="smallDisplay boxElement">{`<t:${timeTarget}:R>`}</span> {'>'} <span className="smallDisplay boxElement">display here</span></h3></li>
        <li><h3><span className="smallDisplay boxElement">{`<t:${timeTarget}:R>`}</span> {'>'} <span className="smallDisplay boxElement">display here</span></h3></li>
        <li><h3><span className="smallDisplay boxElement">{`<t:${timeTarget}:R>`}</span> {'>'} <span className="smallDisplay boxElement">display here</span></h3></li>
      </ul>

      <footer>Michael Mazur &copy; 2021</footer>
    </div>
  );
}

export default App;
