import React, { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import GenreSelect from './components/GenreSelect';
import SearchForm from './components/SearchForm';
import type Genre from './shared/types/IGenre';

const DEFAULT_SELECTED_GENRE_ID: string = '0';

function onSearchCallback (value: string): void {
  console.log('onSearchCallback called with value=' + value);
}

function onSelectGenreCallback (genreId: string): void {
  console.log('onSelectGenre callback called with genreId=' + genreId);
}

function genresList (): Genre[] {
  return [
    {
      id: DEFAULT_SELECTED_GENRE_ID,
      name: 'All'
    },
    {
      id: '1',
      name: 'Action'
    },
    {
      id: '2',
      name: 'Comedy'
    }]
}

interface AppProps {
  selectedGenreId: string
}

const App: React.FC<AppProps> = (props) => {
  const [selectedGenreId, setSelectedGenreId] = useState(
    props.selectedGenreId.length > 0 ? props.selectedGenreId : DEFAULT_SELECTED_GENRE_ID);

  return (
    <div className="App">
      <header className="App-header">
        <h1>movies-roulette</h1>
        <Counter initialValue={321}></Counter>
        <br></br>
        <SearchForm initialValue='' onSearch={onSearchCallback}></SearchForm>
        <br></br>
        <GenreSelect
          genres={genresList()}
          selectedGenreId={selectedGenreId}
          onSelect={(value: string) => {
            setSelectedGenreId(value);
            onSelectGenreCallback(value);
          }}
        ></GenreSelect>
      </header>
    </div>
  );
}

export default App;