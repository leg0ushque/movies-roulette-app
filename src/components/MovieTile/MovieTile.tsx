import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import movieTilePropsValidator from '../../shared/utils/movieTilePropsValidator';

import type IMovie from '../../shared/types/IMovie';

export interface IMovieTileProps extends IMovie {
  id: string
  title: string
  imageUrl: string
  releaseYear: string
  genresList: string[]
  onClick: (genreId: string) => void
  onContextMenu: (event: React.MouseEvent, id: string) => void
}

const MovieTile: React.FC<IMovieTileProps> = (props) => {
  const [movieInfo] = useState<IMovie>(movieTilePropsValidator(props));

  return (
    <Col lg={4} className='movieTile' role='movieTile' onClick={() => { props.onClick(props.id) }} onContextMenu={(e) => {
      props.onContextMenu(e, props.id);
    }}>
      <Row>
        <Col className='image'><img src={movieInfo.imageUrl} role='image'/></Col>
      </Row>
      <Row>
        <Col sm={10} className='title'><span role='title'>{movieInfo.title}</span></Col>
        <Col sm={2} className='releaseYear'><span role='releaseYear'>{movieInfo.releaseYear}</span></Col>
      </Row>
      <Row>
        <Col className='genres'><span role='genresList'>{movieInfo.genresList}</span></Col>
      </Row>
    </Col>
  );
}

export default MovieTile;