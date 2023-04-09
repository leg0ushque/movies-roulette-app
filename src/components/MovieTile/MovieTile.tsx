import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import type IMovieModel from '../../models/IMovieModel';
import { COMING_SOON_TEXT, EPMTY_RELEASE_YEAR, IMAGE_NOT_FOUND_SRC } from './constants';

export interface IMovieTileProps {
  movie: IMovieModel
  onClick: (genreId: string) => void
  onContextMenu: (event: React.MouseEvent, id: string) => void
}

const MovieTile: React.FC<IMovieTileProps> = (props) => {
  const [movieInfo] = useState<IMovieModel>(props.movie);

  return (
    <Col lg={4} className='movieTile' role='movieTile' onClick={() => { props.onClick(props.movie.id) }} onContextMenu={(e) => {
      props.onContextMenu(e, props.movie.id);
    }}>
      <Row>
        <Col className='image'><img src={movieInfo.imageUrl.length > 0 ? movieInfo.imageUrl : IMAGE_NOT_FOUND_SRC} role='image'/></Col>
      </Row>
      <Row>
        <Col sm={10} className='title'><span role='title'>{movieInfo.title.length > 0 ? movieInfo.title : COMING_SOON_TEXT}</span></Col>
        <Col sm={2} className='releaseYear'><span role='releaseYear'>{movieInfo.releaseDate?.getFullYear() ?? EPMTY_RELEASE_YEAR}</span></Col>
      </Row>
      <Row>
        <Col className='genres'><span role='genresList'>{movieInfo.genresList?.map(x => x.name).join(', ')}</span></Col>
      </Row>
    </Col>
  );
}

export default MovieTile;
