
import React from 'react';

import { useNavigateRedirections } from '../../hooks';
import testData from '../../shared/constants/test-data';
import Dialog from '../Dialog';
import MovieForm from '../MovieForm';

export interface IMovieFormDialogProps {
  title: string
}

const MovieFormDialog: React.FC<IMovieFormDialogProps> = ({ title }) => {
  const { redirectWithCurrentQuery } = useNavigateRedirections();

  const handleClose = (): void => {
    redirectWithCurrentQuery('/')
  }

  const handleSubmit = (formData: object): void => {
    console.log(formData);

    // EXTRA HANDLER

    redirectWithCurrentQuery('/')
  }

  const genres = testData.genres;

  return (
    <>
      <Dialog
        title={title}
        isWide
        hasScrollableBody
        onClose={handleClose}
      >
        <MovieForm genres={genres} onSubmit={ handleSubmit }/>
      </Dialog>
    </>
  );
}

export default MovieFormDialog
