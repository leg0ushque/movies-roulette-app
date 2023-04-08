import React from 'react';

import { action } from '@storybook/addon-actions';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import testData from '../shared/constants/test-data';
import type IGenre from '../shared/types/IGenre';
import MovieTileWrapper, { type IMovieTileWrapperProps } from './MovieTileWrapper';

const MovieTileWrapperStory: ComponentMeta<typeof MovieTileWrapper> = {
  title: 'Components/MovieTile',
  component: MovieTileWrapper
}
export default MovieTileWrapperStory;

const Template: ComponentStory<typeof MovieTileWrapper> = (props: IMovieTileWrapperProps) => <MovieTileWrapper {...props} />;

const movie = testData.movies[0]
movie.genresList = movie.genreIds.map((id: string) => testData.genres.find((x: IGenre) => x.id === id)) as IGenre[];

export const NoDataProvided = {
  ...Template.bind({}),
  args: {
    movie: {
      id: '',
      imageUrl: ''
    }
  }
};

export const DefaultSingle = {
  ...Template.bind({}),
  args: {
    movie,
    onClick: action('Movie tile clicked!')
  }
};
