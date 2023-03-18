import "./App.css";
import { Counter } from "./components/Counter";
import { SearchForm } from "./components/SearchForm";

function onSearchCallback (value) {
  console.log('onSearch callback called with value=' + value);
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>movies-roulette</h1>
        <Counter value="321"></Counter>
        <br></br>
        <SearchForm defaultValue="" onSearch={onSearchCallback}></SearchForm>
      </header>
    </div>
  );
}

export default App;
