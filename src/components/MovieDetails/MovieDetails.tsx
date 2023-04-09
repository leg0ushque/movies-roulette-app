import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import type IMovieModel from '../../models/IMovieModel';

export interface IMovieDetailsProps {
  movie: IMovieModel
}

const MovieDetails: React.FC<IMovieDetailsProps> = (props) => {
  return (
    <Container className='movieDetails'>
      <Row>
        <Col md={4} className='image'>
          <img src={props.movie.imageUrl} role='image'/>
        </Col>
        <Col md={7} className='info'>
          <div className='title' role='title'>{props.movie.title}</div>
          <div className='rating prevent-select' role='rating'>{props.movie.rating}</div>
          <div className='genresList' role='genresList'>{props.movie.genresList.map(x => x.name).join(', ')}</div>
          <div className='releaseYear' role='releaseYear'>{props.movie.releaseDate?.getFullYear()}</div>
          <div className='duration' role='duration'>{props.movie.duration}</div>
          <div className='description' role='description'>{props.movie.description}</div>
        </Col>
      </Row>
    </Container>
  );
};

export default MovieDetails;
