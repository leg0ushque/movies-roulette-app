import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

import React, { type SyntheticEvent } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import { IMAGE_NOT_FOUND_SRC } from '../../shared/constants/movie';
import { type IGenre, type IMovie } from '../../shared/types';
import setMovieValues from '../../shared/utils/setMovieValues';

export interface IMovieDetailsProps {
  movie?: IMovie
  movieGenres: IGenre[]
}

const MovieDetails: React.FC<IMovieDetailsProps> = ({ movie, movieGenres }) => {
  const propsMovie = setMovieValues(movie);

  const replaceImage = (event: SyntheticEvent<HTMLImageElement, Event>): void => {
    (event?.target as HTMLImageElement).src = IMAGE_NOT_FOUND_SRC;
  }

  return (
    <Container className='movieDetails'>
      <Row>
        <Col md={4} className='image'>
          <img src={propsMovie.imageUrl} role='image' onError={replaceImage}/>
        </Col>
        <Col md={7} className='info'>
          <div className='title' role='title'>{propsMovie.title}</div>
          <div className='rating prevent-select' role='rating'>{propsMovie.rating.toFixed(1)}</div>
          <div className='genresList' role='genresList'>{movieGenres.map(x => x.name).join(', ')}</div>
          <div className='releaseYear' role='releaseYear'>{propsMovie.releaseDate?.getFullYear()}</div>
          <div className='duration' role='duration'>{propsMovie.duration}</div>
          <div className='description' role='description'>{propsMovie.description}</div>
        </Col>
      </Row>
    </Container>
  );
};

export default MovieDetails;
