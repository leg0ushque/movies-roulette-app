import './App.css';
import './assets/styles/fonts.css';

import React, { useEffect, useState } from 'react';

import Counter from './components/Counter';
import GenreSelect from './components/GenreSelect';
import SearchForm from './components/SearchForm';

import type IGenre from './shared/types/IGenre';

function onSearchCallback (value: string): void {
  console.log('onSearchCallback called with value=' + value);
}

function onSelectGenreCallback (genreId: string): void {
  console.log('onSelectGenre callback called with genreId=' + genreId);
}

function genresList (): IGenre[] {
  return [
    {
      id: '1',
      name: 'Action'
    },
    {
      id: '2',
      name: 'Comedy'
    }]
}

interface IAppProps {
  selectedGenreId: string
}

const App: React.FC<IAppProps> = (props) => {
  const [selectedGenreId, setSelectedGenreId] = useState(props.selectedGenreId);

  useEffect(() => {
    onSelectGenreCallback(selectedGenreId);
  }, [selectedGenreId])

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
