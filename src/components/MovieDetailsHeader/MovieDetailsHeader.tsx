import './styles.css';

import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

import { useNavigateRedirections } from '../../hooks';
import { type IGenre, type IMovieTileContent } from '../../shared/types';
import AppName from '../AppName';
import MovieDetails from '../MovieDetails/MovieDetails';

const MovieDetailsHeader: React.FC = () => {
  const movieTileContent = useLoaderData() as IMovieTileContent;

  const { redirectWithCurrentQuery } = useNavigateRedirections();

  const handleRedirectClick = (): void => {
    redirectWithCurrentQuery('/')
  }

  return (
    <div className='page-header movie-details'>
      <Row className='app-name-addMovie'>
        <Col md={10} xs={12} className='app-name-col'>
          <AppName onClick={handleRedirectClick} />
        </Col>
        <Col md={2} xs={12} className='right-header-button-col'>
          <button className='search' onClick={handleRedirectClick}>
            <svg height="36px" width="36px" fill='#f65261' stroke='#232323' version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490.4 490.4" xmlSpace="preserve" transform="matrix(-1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M484.1,454.796l-110.5-110.6c29.8-36.3,47.6-82.8,47.6-133.4c0-116.3-94.3-210.6-210.6-210.6S0,94.496,0,210.796 s94.3,210.6,210.6,210.6c50.8,0,97.4-18,133.8-48l110.5,110.5c12.9,11.8,25,4.2,29.2,0C492.5,475.596,492.5,463.096,484.1,454.796z M41.1,210.796c0-93.6,75.9-169.5,169.5-169.5s169.6,75.9,169.6,169.5s-75.9,169.5-169.5,169.5S41.1,304.396,41.1,210.796z"></path> </g> </g></svg>
          </button>
        </Col>
      </Row>
      <MovieDetails movie={movieTileContent.movie} movieGenres={movieTileContent.genres as IGenre[]} />
    </div>
  );
}

export default MovieDetailsHeader;
