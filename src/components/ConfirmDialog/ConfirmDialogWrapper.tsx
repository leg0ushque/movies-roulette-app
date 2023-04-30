
import React from 'react';
import { useLoaderData } from 'react-router-dom';

import { useNavigateRedirections } from '../../hooks';
import { DELETE_MOVIE_TITLE } from '../../shared/constants/application';
import { type IMovieTileContent } from '../../shared/types';
import ConfirmDialog from './ConfirmDialog';

const ConfirmDialogWrapper: React.FC = () => {
  const { redirectWithCurrentQuery } = useNavigateRedirections();

  const movieTileContent = useLoaderData() as IMovieTileContent;

  return (
    <ConfirmDialog
      title={DELETE_MOVIE_TITLE}
      text={`Are you sure you want to delete "${movieTileContent.movie?.title}" (${movieTileContent.movie?.releaseDate?.getFullYear()})?`}
      onConfirm={() => { redirectWithCurrentQuery(`/${movieTileContent.movie?.id}/delete`) }}
      onClose={() => { redirectWithCurrentQuery('/') }}
    />
  );
}

export default ConfirmDialogWrapper
