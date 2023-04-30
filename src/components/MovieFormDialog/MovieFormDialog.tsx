
import React from 'react';
import { useLoaderData } from 'react-router-dom';

import { useCancelToken, useNavigateRedirections } from '../../hooks';
import MovieService from '../../services/MovieService';
import { EMPTY_INPUT, MIN_DURATION, MIN_RATING } from '../../shared/constants/form';
import { type IMovie, type IMovieTileContent } from '../../shared/types';
import Dialog from '../Dialog';
import MovieForm from '../MovieForm';

export interface IMovieFormDialogProps {
  title: string
}

const MovieFormDialog: React.FC<IMovieFormDialogProps> = ({ title }) => {
  const { newCancelToken, cancelPreviousRequest, isCancel } = useCancelToken();
  const { redirectTo, redirectWithCurrentQuery } = useNavigateRedirections();

  const movieTileContent = useLoaderData() as IMovieTileContent;

  const handleClose = (): void => {
    redirectWithCurrentQuery('/')
  }

  const movieServiceCreate = (movie: IMovie): void => {
    cancelPreviousRequest();

    MovieService.create(movie, newCancelToken()).then((response) => {
      redirectWithCurrentQuery(`/${response}`)
    }).catch((error) => {
      if (isCancel(error)) return;
      console.log(error)
      return {
        status: error.status,
        data: error.response
      }
    });
  }

  const movieServiceUpdate = (movie: IMovie): void => {
    cancelPreviousRequest();

    MovieService.update(movie, newCancelToken()).then((response) => {
      redirectTo(`/${response}`)
    }).catch((error) => {
      if (isCancel(error)) return;
      console.log(error)
      return {
        status: error.status,
        data: error.response
      }
    });
  }

  const handleSubmit = (formData: IMovie): void => {
    if (movieTileContent?.movie?.id) {
      movieServiceUpdate({ ...formData, id: movieTileContent.movie.id })
    } else {
      movieServiceCreate(formData)
    }
  }

  return (
    <Dialog title={title} isWide hasScrollableBody onClose={handleClose}>
      <MovieForm
        initialTitle={movieTileContent?.movie?.title ?? EMPTY_INPUT}
        initialDescription={movieTileContent?.movie?.description ?? EMPTY_INPUT}
        initialDuration={movieTileContent?.movie?.duration ?? MIN_DURATION}
        initialMovieUrl={movieTileContent?.movie?.movieUrl ?? EMPTY_INPUT}
        initialRating={movieTileContent?.movie?.rating ?? MIN_RATING}
        InitialReleaseDate={movieTileContent?.movie?.releaseDate ?? new Date()}
        initialGenreIds={movieTileContent?.movie?.genreIds ?? []}
        onSubmit={ handleSubmit }
      />
    </Dialog>
  );
}

export default MovieFormDialog
