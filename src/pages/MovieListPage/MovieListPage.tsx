import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

import React from 'react';
import { Col, Row } from 'react-bootstrap';

import GenreSelect from '../../components/GenreSelect';
import MovieTile from '../../components/MovieTile';
import SearchForm from '../../components/SearchForm';
import SortControl, { type ISortWay } from '../../components/SortControl/SortControl';
import { type IContextMenuItem, type IGenre } from '../../shared/types';

import type IMovieTileContent from '../../shared/types/IMovieTileContent';

export interface IMovieListPageProps {
  selectedMovieId: string | undefined

  searchInitialValue?: string
  onSearch: (value: string) => void

  genres: IGenre[]
  selectedGenreId?: string
  onGenreSelect: (genreId: string) => void

  selectedSortId: string
  sortWays: ISortWay[]
  onSortChange: (sort: string) => void

  movieTiles?: IMovieTileContent[]
  clickMenuItems: IContextMenuItem[]
  onMovieTileClick: (genreId: string) => void
}

const MovieListPage: React.FC<IMovieListPageProps> = (
  {
    searchInitialValue, onSearch,
    genres, selectedGenreId, onGenreSelect,
    selectedSortId, sortWays, onSortChange,
    movieTiles, clickMenuItems, onMovieTileClick
  }) => {
  const movieTilesElement = movieTiles?.map((item: IMovieTileContent) =>
    (
    <MovieTile
      key={item.movie?.title}
      movie={item.movie}
      movieGenres={item.genres}
      clickMenuItems={clickMenuItems}
      onClick={onMovieTileClick}
    />
    )
  );

  return (
    <div className='movie-list-page'>
      <div className='page-header'>
        <Row>
          <Col md={10} xs={12} className='pt-3'>
            <span className='app-name prevent-select'><b>movies</b>roulette</span>
          </Col>
          <Col md={2} xs={12} className='pt-3'>
            <button className='button b-0 button-gray add-movie'> + Add movie</button>
          </Col>
        </Row>
        <Row>
          <Col xs={12} className='p-0 prevent-select'>
            <h1>Find your movie</h1>
          </Col>
        </Row>
        <SearchForm initialValue={searchInitialValue} onSearch={onSearch}></SearchForm>
      </div>
      <div className='page-content'>
        <Row className='genresList-sortControl'>
          <Col md={9} xs={12} className='pr-0'>
            <GenreSelect genres={genres} selectedGenreId={selectedGenreId} onSelect={onGenreSelect}></GenreSelect>
            <div className="filler">123123123</div>
          </Col>
          <Col md={3} className='pl-0'>
            <SortControl sortWays={sortWays} selectedSortId={selectedSortId} onChange={onSortChange}/>
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
