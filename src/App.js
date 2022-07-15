import './App.css';
import Timer from './Timer';

import jsonData from './data.json';



const boxes = JSON.parse(JSON.stringify(jsonData));

function App() {


  return (
    <div className="App">
      <header className="App-header">
        {boxes.map((box) => {
          return <Timer color={box.cor} timeLimit={box.tempo} />
        })}
      </header>
    </div>
  );
}

export default App;
