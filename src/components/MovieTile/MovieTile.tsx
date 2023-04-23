import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

import React, { useState, type SyntheticEvent } from 'react';
import { Col, Row } from 'react-bootstrap';

import { IMAGE_NOT_FOUND_SRC } from '../../shared/constants/movie';
import { type IContextMenuItem, type IGenre, type IMovie } from '../../shared/types';
import setMovieValues from '../../shared/utils/setMovieValues';
import MovieTileContextMenu from '../MovieTileContextMenu';
import ThreeDotsButton from '../ThreeDotsButton';

export interface IMovieTileProps {
  movie?: IMovie
  movieGenres?: IGenre[]
  clickMenuItems: IContextMenuItem[]
  onClick: (genreId: string) => void
}

const MovieTile: React.FC<IMovieTileProps> = ({ movie, movieGenres, clickMenuItems, onClick }) => {
  const propsMovie = setMovieValues(movie);

  const replaceImage = (event: SyntheticEvent<HTMLImageElement, Event>): void => {
    (event?.target as HTMLImageElement).src = IMAGE_NOT_FOUND_SRC;
  }

  const [menuIsVisible, setMenuIsVisible] = useState(false);

  const toggleContextMenu = (): void => {
    setMenuIsVisible((prev) => !prev)
  }

  return (
    <Col md={4} className='movieTile prevent-select' role='movieTile' onClick={() => {
      onClick(propsMovie.id)

      if (menuIsVisible) {
        toggleContextMenu()
      }
    }}
    >
      <Row>
        <Col className='image'>
          <MovieTileContextMenu
            id={propsMovie.id}
            menuIsVisible={menuIsVisible}
            hideMenu={toggleContextMenu}
            items={clickMenuItems}
          />
          <ThreeDotsButton onClick={toggleContextMenu} />
          <img src={propsMovie.imageUrl} role='image' onError={replaceImage}/>
        </Col>
      </Row>
      <Row className='title-releaseYear'>
        <Col sm={10} className='title'>
          <span role='title'>{propsMovie.title}</span>
          </Col>
        <Col sm={2} className='releaseYear'>
          <span role='releaseYear'>{propsMovie.releaseDate?.getFullYear()}</span>
          </Col>
      </Row>
      <Row>
        <Col className='genres'>
          <span role='genresList'>{movieGenres?.map(x => x.name).join(', ')}</span>
        </Col>
      </Row>
    </Col>
  );
}

export default MovieTile;
