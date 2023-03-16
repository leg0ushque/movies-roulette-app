import "./App.css";
import { Counter } from "./Components/Counter/index";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>movies-roulette</h1>
        <Counter value="321"></Counter>
      </header>
    </div>
  );
}

export default App;
