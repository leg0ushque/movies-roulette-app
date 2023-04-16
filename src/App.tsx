import './App.css';
import './assets/styles/fonts.css';

import React, { useEffect, useState } from 'react';

import sortWays from './components/SortControl/sortWays';
import MovieListPage, { type IMovieListPageProps } from './pages/MovieListPage';
import testData from './shared/constants/test-data';
import { type IContextMenuItem, type IGenre, type IMovie } from './shared/types';

import type IMovieTileContent from './shared/types/IMovieTileContent';

function onSearchCallback (value: string): void {
  console.log('onSearchCallback called with value=' + value);
}

function onSortChange (value: string): void {
  console.log('onSortChange called with value=' + value);
}

function onSelectGenreCallback (genreId: string): void {
  console.log('onSelectGenre callback called with genreId=' + genreId);
}

interface IAppProps {
  selectedGenreId?: string
}

const MOVIE_TILE_MENU_ITEMS: IContextMenuItem[] = [
  {
    name: 'Edit',
    clickHandler: (id: string) => { console.log(`EDIT: ${id}`) }
  },
  {
    name: 'Delete',
    clickHandler: (id: string) => { console.log(`DELETE: ${id}`) }
  }
];

const App: React.FC<IAppProps> = (props) => {
  const genres = testData.genres;
  const movies = testData.movies;
  const moviesSortWays = sortWays;

  const [selectedGenreId, setSelectedGenreId] = useState('0');
  const [selectedMovieId, setSelectedMovieId] = useState<string | undefined>(undefined);

  useEffect(() => {
    onSelectGenreCallback(selectedGenreId);
  }, [selectedGenreId])

  const onMovieTileClick = (id: string): void => {
    setSelectedMovieId(id)
    console.log('onMovieTileClick called with value=' + id);
  }

  const [selectedSortId, setSelectedSortId] = useState(moviesSortWays[0].id);
  useEffect(() => {
    onSortChange(selectedSortId);
  }, [selectedSortId])

  const movieListPageProps: IMovieListPageProps = {
    selectedMovieId,
    onSearch: onSearchCallback,
    genres,
    selectedGenreId,
    onGenreSelect: setSelectedGenreId,
    sortWays: moviesSortWays,
    selectedSortId,
    onSortChange: setSelectedSortId,
    movieTiles: movies.map((movie: IMovie) => {
      const movieGenres = movie.genreIds.map((id: string) => genres.find((x: IGenre) => x.id === id)) as IGenre[]
      const movieTileContent: IMovieTileContent = { movie, genres: movieGenres };
      return movieTileContent;
    }),
    onMovieTileClick,
    clickMenuItems: MOVIE_TILE_MENU_ITEMS
  }

  return (
    <div className="App">
      <MovieListPage {...movieListPageProps}/>
    </div>
  );
}

export default App;
