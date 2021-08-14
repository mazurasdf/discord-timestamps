import { useState } from 'react';
import './App.css';
import AmountPicker from './components/AmountPicker';

function App() {
  const [timeTarget, setTimeTarget] = useState(Math.floor(Date.now().valueOf() / 1000));

  const formatDate = (unixTime, format) => {
    const convertedTime = new Date(unixTime * 1000);
    let dtString = "";

    switch(format){
      case("R"):
        dtString = "in X timespan";
        break;
      case("t"):
      case("F"):
        dtString = convertedTime.toLocaleTimeString();
        break;
    }

    return dtString;
  }

  return (
    <div className="App">
      <h1 id="title">hey it's me!</h1>
      <AmountPicker setTimeTarget={setTimeTarget}/>

      <ul className="elementBox">
        <li><h3><span className="smallDisplay boxElement">{`<t:${timeTarget}:R>`}</span> {'>'} <span className="smallDisplay boxElement">in X timespan</span></h3></li>
        <li><h3><span className="smallDisplay boxElement">{`<t:${timeTarget}:F>`}</span> {'>'} <span className="smallDisplay boxElement">Sunday, June 27, 2021 9:48 PM</span></h3></li>
        <li><h3><span className="smallDisplay boxElement">{`<t:${timeTarget}:D>`}</span> {'>'} <span className="smallDisplay boxElement">June 27, 2021</span></h3></li>
        <li><h3><span className="smallDisplay boxElement">{`<t:${timeTarget}:t>`}</span> {'>'} <span className="smallDisplay boxElement">{formatDate(timeTarget, "t")}</span></h3></li>
      </ul>

      <footer>Michael Mazur &copy; 2021 | background from <a href="https://www.heropatterns.com/">hero patterns</a> <a href="https://creativecommons.org/licenses/by/4.0/">CC 4.0</a></footer>
    </div>
  );
}

export default App;
