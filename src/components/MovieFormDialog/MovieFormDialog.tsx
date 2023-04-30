
import React from 'react';

import { useCancelToken, useNavigateRedirections } from '../../hooks';
import MovieService from '../../services/MovieService';
import { type IMovie } from '../../shared/types';
import Dialog from '../Dialog';
import MovieForm from '../MovieForm';

export interface IMovieFormDialogProps {
  title: string
}

const MovieFormDialog: React.FC<IMovieFormDialogProps> = ({ title }) => {
  const { newCancelToken, cancelPreviousRequest, isCancel } = useCancelToken();
  const { redirectWithCurrentQuery } = useNavigateRedirections();

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

  const handleSubmit = (formData: object): void => {
    movieServiceCreate(formData as IMovie)
  }

  return (
    <>
      <Dialog title={title} isWide hasScrollableBody onClose={handleClose}>
        <MovieForm
          initialTitle=''
          initialDescription=''
          initialDuration=''
          initialMovieUrl=''
          initialRating={0.0}
          InitialReleaseDate={new Date()}
          initialGenreIds={[]}
          onSubmit={ handleSubmit }
        />
      </Dialog>
    </>
  );
}

export default MovieFormDialog
