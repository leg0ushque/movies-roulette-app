import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

import AppName from '../../components/AppName/AppName';
import GenreSelect from '../../components/GenreSelect';
import MovieTile from '../../components/MovieTile';
import SortControl from '../../components/SortControl';
import sortWays from '../../components/SortControl/sortWays';
import { useMovieListPageState, useNavigateRedirections } from '../../hooks';
import { type IContextMenuItem } from '../../shared/types';

import type IMovieTileContent from '../../shared/types/IMovieTileContent';
const MovieListPage: React.FC = () => {
  const { redirectWithCurrentQuery } = useNavigateRedirections();

  const {
    searchQuery,
    genres,
    movieTiles,
    selectedGenreId,
    selectedSortId,
    isSortDescending,
    setSelectedGenreId,
    setSelectedSortId,
    toggleSortOrder
  } = useMovieListPageState()

  const MOVIE_TILE_MENU_ITEMS: IContextMenuItem[] = [
    {
      name: 'Edit',
      clickHandler: (id: string) => { redirectWithCurrentQuery(`/${id}/edit`) }
    },
    {
      name: 'Delete',
      clickHandler: (id: string) => { redirectWithCurrentQuery(`/${id}/confirm-delete`) }
    }
  ];

  const clearMovieSelection = (): void => {
    redirectWithCurrentQuery('/', [['search', '']])
  }

  const APP_NAME: JSX.Element = (
    <AppName onClick={clearMovieSelection} />
  )

  const handleSortChange = (id: string): void => {
    setSelectedSortId(id);
  }

  const handleGenreSelect = (id: string): void => {
    setSelectedGenreId(id);
  }

  const handleMovieTileClick = (id: string): void => {
    redirectWithCurrentQuery(`${id}`)
  }

  const movieTilesElement = (movieTiles ?? [])?.map((item: IMovieTileContent) =>
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
      <Outlet />
      <div className='page-content'>
        <Row className='genresList-sortControl'>
          <Col md={9} xs={12} className='pr-0'>
            <GenreSelect genres={genres} selectedGenreId={selectedGenreId} onSelect={handleGenreSelect}/>
            <div className="filler">&nbsp;</div>
          </Col>
          <Col md={3} className='pl-0'>
            <SortControl sortWays={sortWays} selectedSortId={selectedSortId} onChange={handleSortChange}
              isSortDesc={isSortDescending} toggleSortOrder={toggleSortOrder} />
          </Col>
        </Row>
        <Row className='movies-amount'>
          <span><b>{movieTiles?.length}</b> movie(s) found{searchQuery && <> by <i>{searchQuery}</i></>}</span>
        </Row>
        <Row className='movieTiles'>
          {movieTilesElement}
        </Row>
      </div>
      <Row className='page-footer'>
        {APP_NAME}
      </Row>
    </div>
  )
};

export default MovieListPage;
