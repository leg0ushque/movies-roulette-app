import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';

import GenreSelect from '../../components/GenreSelect';
import MovieDetails from '../../components/MovieDetails';
import MovieTile from '../../components/MovieTile';
import SearchForm from '../../components/SearchForm';
import SortControl from '../../components/SortControl/SortControl';
import sortWays from '../../components/SortControl/sortWays';
import testData from '../../shared/constants/test-data';
import { type IContextMenuItem, type IGenre, type IMovie } from '../../shared/types';

import type IMovieTileContent from '../../shared/types/IMovieTileContent';
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

const generateMovieDetailsFromId = (selectedMovieId: string, movies: IMovieTileContent[] | undefined): JSX.Element => {
  const selectedMovie = movies?.find(m => m.movie?.id === selectedMovieId) as IMovieTileContent;

  return <MovieDetails movie={selectedMovie.movie} movieGenres={selectedMovie.genres as IGenre[]} />
}

const MovieListPage: React.FC = () => {
  const genres = testData.genres;
  const movies = testData.movies;
  const sortOptions = sortWays;
  const movieTiles = movies.map((movie: IMovie) => {
    const movieGenres = movie.genreIds.map((id: string) => genres.find((x: IGenre) => x.id === id)) as IGenre[]
    const movieTileContent: IMovieTileContent = { movie, genres: movieGenres };
    return movieTileContent;
  })

  const [selectedGenreId, setSelectedGenreId] = useState('0');
  const [selectedMovieId, setSelectedMovieId] = useState<string | undefined>(undefined);
  const [selectedSortId, setSelectedSortId] = useState(sortOptions[0].id);
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    console.log(`selectedGenreId changed to: ${selectedGenreId}`);
  }, [selectedGenreId])

  useEffect(() => {
    console.log(`selectedSortId changed to: ${selectedSortId}`);
  }, [selectedSortId])

  const handleSearch = (query: string): void => {
    setSearchQuery(query);
  }

  const handleSortChange = (id: string): void => {
    setSelectedSortId(id);
  }

  const handleGenreSelect = (id: string): void => {
    setSelectedGenreId(id);
  }

  const handleMovieTileClick = (id: string): void => {
    setSelectedMovieId(id)
  }

  const clearMovieSelection = (): void => {
    setSelectedMovieId(undefined);
  }

  const movieTilesElement = movieTiles?.map((item: IMovieTileContent) =>
    (
    <MovieTile
      key={item.movie?.title}
      movie={item.movie}
      movieGenres={item.genres}
      clickMenuItems={MOVIE_TILE_MENU_ITEMS}
      onClick={handleMovieTileClick}
    />
    )
  );

  return (
    <div className='movie-list-page'>
      <div className={`page-header${selectedMovieId ? ' movie-details' : ''}`}>
        <Row className='app-name-addMovie'>
          <Col md={10} xs={12} className='app-name-col'>
            <span className='app-name prevent-select'><b>movies</b>roulette</span>
          </Col>
          <Col md={2} xs={12} className='add-movie-col'>
            { selectedMovieId
              ? <button className='search' onClick={clearMovieSelection}>
                  <svg height="36px" width="36px" fill='#f65261' stroke='#232323' version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490.4 490.4" xmlSpace="preserve" transform="matrix(-1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M484.1,454.796l-110.5-110.6c29.8-36.3,47.6-82.8,47.6-133.4c0-116.3-94.3-210.6-210.6-210.6S0,94.496,0,210.796 s94.3,210.6,210.6,210.6c50.8,0,97.4-18,133.8-48l110.5,110.5c12.9,11.8,25,4.2,29.2,0C492.5,475.596,492.5,463.096,484.1,454.796z M41.1,210.796c0-93.6,75.9-169.5,169.5-169.5s169.6,75.9,169.6,169.5s-75.9,169.5-169.5,169.5S41.1,304.396,41.1,210.796z"></path> </g> </g></svg>
                </button>
              : <button className='button b-0 button-gray add-movie'>+ Add movie</button>
            }
          </Col>
        </Row>
        { selectedMovieId
          ? generateMovieDetailsFromId(selectedMovieId, movieTiles)
          : <>
            <Row>
              <Col xs={12} className='p-0 prevent-select'>
                <h1>Find your movie</h1>
              </Col>
            </Row>
            <SearchForm initialValue={searchQuery} onSearch={handleSearch} />
          </>
        }
      </div>
      <div className='page-content'>
        <Row className='genresList-sortControl'>
          <Col md={9} xs={12} className='pr-0'>
            <GenreSelect genres={genres} selectedGenreId={selectedGenreId} onSelect={handleGenreSelect}/>
            <div className="filler">&nbsp;</div>
          </Col>
          <Col md={3} className='pl-0'>
            <SortControl sortWays={sortWays} selectedSortId={selectedSortId} onChange={handleSortChange}/>
          </Col>
        </Row>
        <Row className='movies-amount'>
          <span><b>{movieTiles?.length}</b> movies found</span>
        </Row>
        <Row className='movieTiles'>
          {movieTilesElement}
        </Row>
      </div>
      <Row className='page-footer'>
        <span className='app-name prevent-select'><b>movies</b>roulette</span>
      </Row>
    </div>
  )
};

export default MovieListPage;
