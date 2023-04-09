
import React, { useState } from 'react';

import MovieForm from '../components/MovieForm';

import type IMovieModel from '../models/IMovieModel';
import type IGenre from '../shared/types/IGenre';

export interface IMovieFormWrapperProps {
  movie: IMovieModel | null
  genres: IGenre[]
  onSubmit: () => void
}

const MovieFormWrapper: React.FC<IMovieFormWrapperProps> = (props) => {
  const propsMovie: IMovieModel = props.movie === null
    ? {
        id: '',
        title: '',
        description: '',
        duration: '',
        releaseDate: new Date(),
        rating: 0.0,
        genreIds: [],
        movieUrl: '',
        imageUrl: '',
        genresList: []
      }
    : props.movie;

  const [movie, setMovie] = useState<IMovieModel>(propsMovie);

  const recheckGenre = (id: string): void => {
    setMovie((oldMovie: IMovieModel) => {
      let newGenreIds: string[];

      if (movie?.genreIds?.some((x: string) => x === id)) {
        // clone genreIds but without the id-to-remove
        newGenreIds = oldMovie.genreIds?.filter((item) => { return item !== id });
      } else {
        // clone genreIds but with the id-to-add
        newGenreIds = [...oldMovie.genreIds, id];
      }

      return { ...oldMovie, genreIds: newGenreIds } // old movie, but genreIds are updated
    })
  };

  return (
    <MovieForm
      movie={movie}
      genres={props.genres}
      onSubmit={props.onSubmit}
      recheckGenre={recheckGenre}
    />
  );
}

export default MovieFormWrapper;
