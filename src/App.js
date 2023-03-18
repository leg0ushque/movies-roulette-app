import "./App.css";
import { Counter } from "./components/Counter";
import { GenreSelect } from "./components/GenreSelect";
import { SearchForm } from "./components/SearchForm";

function onSearchCallback(value) {
  console.log("onSearchCallback called with value=" + value);
}

function onSelectGenre(genre) {
  console.log("onSelectGenre callback called with genre=" + genre);
}

function genresList() {
  return ["Action", "Comedy"];
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>movies-roulette</h1>
        <Counter value="321"></Counter>
        <br></br>
        <SearchForm defaultValue="" onSearch={onSearchCallback}></SearchForm>
        <br></br>
        <GenreSelect
          genres={genresList()}
          selected=""
          onSelect={onSelectGenre}
        ></GenreSelect>
      </header>
    </div>
  );
}

export default App;
