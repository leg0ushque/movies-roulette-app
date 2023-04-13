import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import MovieTileContextMenu from '../MovieTileContextMenu';
import { EDIT_DELETE_CONTEXT_MENU_ITEMS } from '../MovieTileContextMenu/constants';
import ThreeDotsButton from '../ThreeDotsButton';
import { COMING_SOON_TEXT, EPMTY_RELEASE_YEAR, IMAGE_NOT_FOUND_SRC } from './constants';

import type IMovieModel from '../../models/IMovieModel';
export interface IMovieTileProps {
  movie: IMovieModel
  onClick: (genreId: string) => void
}

const MovieTile: React.FC<IMovieTileProps> = ({ movie, onClick }) => {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  const showContextMenu = (): void => {
    setMenuIsVisible(true)
  }

  const hideContextMenu = (): void => {
    setMenuIsVisible(false)
  }

  return (
    <Col lg={4} className='movieTile prevent-select' role='movieTile' onClick={() => { onClick(movie.id) }}>
      <Row>
        <Col className='image'>
          <MovieTileContextMenu
            id={movie.id}
            menuIsVisible={menuIsVisible}
            hideMenu={hideContextMenu}
            items={EDIT_DELETE_CONTEXT_MENU_ITEMS}
          />
          <ThreeDotsButton onClick={showContextMenu}></ThreeDotsButton>
          <img src={movie.imageUrl?.length ? movie.imageUrl : IMAGE_NOT_FOUND_SRC} role='image'/>
        </Col>
      </Row>
      <Row>
        <Col sm={10} className='title'>
          <span role='title'>{movie.title?.length ? movie.title : COMING_SOON_TEXT}</span>
          </Col>
        <Col sm={2} className='releaseYear'>
          <span role='releaseYear'>{movie.releaseDate?.getFullYear() ?? EPMTY_RELEASE_YEAR}</span>
          </Col>
      </Row>
      <Row>
        <Col className='genres'>
          <span role='genresList'>{movie.genresList?.map(x => x.name).join(', ')}</span>
        </Col>
      </Row>
    </Col>
  );
}

export default MovieTile;
