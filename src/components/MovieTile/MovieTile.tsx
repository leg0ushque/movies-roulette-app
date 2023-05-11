import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

import Image from 'next/image';
import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';

import { IMAGE_NOT_FOUND_SRC } from '@/shared/constants/movie';
import { IContextMenuItem, IGenre, IMovie } from '@/shared/types';
import setMovieValues from '@/shared/utils/setMovieValues';

import MovieTileContextMenu from '../MovieTileContextMenu';
import ThreeDotsButton from '../ThreeDotsButton';

export interface IMovieTileProps {
  movie?: IMovie
  movieGenres?: IGenre[]
  clickMenuItems: IContextMenuItem[]
  onClick: (genreId: string) => void
}

const MovieTile: React.FC<IMovieTileProps> = ({ movie, movieGenres, clickMenuItems, onClick }) => {
  const [src, setSrc] = React.useState(movie?.imageUrl);

  const propsMovie = setMovieValues(movie);

  const replaceImage = (): void => {
    setSrc(IMAGE_NOT_FOUND_SRC);
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
        <Col className='image-col'>
          <MovieTileContextMenu
            id={propsMovie.id}
            menuIsVisible={menuIsVisible}
            hideMenu={toggleContextMenu}
            items={clickMenuItems}
          />
          <ThreeDotsButton onClick={toggleContextMenu} />
          <Image className='image' src={src ?? IMAGE_NOT_FOUND_SRC} alt='tile image' width={300} height={200}  role='image' onError={replaceImage}/>
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
