import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export interface IMovieDetailsProps {
  id: string
  title: string
  description: string
  releaseYear: string
  rating: number
  duration: string
  imageUrl: string
  genresList: string[]
}

const MovieDetails: React.FC<IMovieDetailsProps> = (props) => {
  return (
    <Container className='movieDetails'>
      <Row>
        <Col md={4} className='image'>
          <img src={props.imageUrl}/>
        </Col>
        <Col md={7} className='info'>
          <div className='title'>{props.title}</div>
          <div className='rating prevent-select'>{props.rating}</div>
          <div className='genresList'>{props.genresList.join(', ')}</div>
          <div className='releaseYear'>{props.releaseYear}</div>
          <div className='duration'>{props.duration}</div>
          <div className='description'>{props.description}</div>
        </Col>
      </Row>
    </Container>
  );
};

export default MovieDetails;
