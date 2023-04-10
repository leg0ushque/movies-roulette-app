import React from 'react';

import { action } from '@storybook/addon-actions';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import testData from '../shared/constants/test-data';
import MovieFormWrapper, { type IMovieFormWrapperProps } from './MovieFormWrapper';

import type IGenre from '../shared/types/IGenre';
import DialogWrapper from './DialogWrapper';

const MovieFormWrapperStory: ComponentMeta<typeof MovieFormWrapper> = {
  title: 'Compositions/MovieForm in Dialog',
  component: MovieFormWrapper
}
export default MovieFormWrapperStory;

const Template: ComponentStory<typeof MovieFormWrapper> = (props: IMovieFormWrapperProps) => <MovieFormWrapper {...props} />;

const movie = testData.movies[0]
movie.genresList = movie.genreIds.map((id: string) => testData.genres.find((x: IGenre) => x.id === id)) as IGenre[];

export const AddMovie = {
  ...Template.bind({}),
  args: {
    movie: null,
    genres: testData.genres,
    onClick: action('Movie tile clicked!')
  }
}

AddMovie.decorators = [
  (Story) => (
  <div>
    <DialogWrapper logo={''} title={'Add movie'} isNotification={false} isCentered={false}
      onClose={action('Dialog close called')}
    >
      <Story />
    </DialogWrapper>
  </div>
  )
];

export const EditMovie = {
  ...Template.bind({}),
  args: {
    movie,
    genres: testData.genres,
    onClick: action('Movie tile clicked!')
  }
}

EditMovie.decorators = [
  (Story) => (
    <div>
      <DialogWrapper logo={''} title={'Edit movie'} isNotification={false} isCentered={false}
        onClose={action('Dialog close called')}
      >
        <Story />
      </DialogWrapper>
    </div>
  )
];
