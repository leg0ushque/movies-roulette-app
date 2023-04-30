import React from 'react';

import { action } from '@storybook/addon-actions';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import MovieForm, { type IMovieFormInitialValues } from '../components/MovieForm';
import testData from '../shared/constants/test-data';
import DialogWrapper from './DialogWrapper';

const MovieFormCompositionStory: ComponentMeta<typeof MovieForm> = {
  title: 'Compositions/MovieForm in Dialog',
  component: MovieForm
}
export default MovieFormCompositionStory;

const Template: ComponentStory<typeof MovieForm> = (props: IMovieFormInitialValues) => <MovieForm {...props} />;

const movie = testData.movies[0]

export const AddMovie = {
  ...Template.bind({}),
  args: {
    onSubmit: action('Movie form submitted:')
  }
}
AddMovie.decorators = [
  (Story) => (
  <div>
    <DialogWrapper title={'Add movie'} isWide hasScrollableBody
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
    initialTitle: movie.title,
    initialDescription: movie.description,
    initialDuration: movie.duration,
    initialMovieUrl: movie.movieUrl,
    initialRating: movie.rating,
    initialReleaseDate: movie.releaseDate,
    initialGenreIds: movie.genreIds,
    onSubmit: action('Movie form submitted:')
  }
}

EditMovie.decorators = [
  (Story) => (
    <div>
      <DialogWrapper title={'Edit movie'} isWide hasScrollableBody
        onClose={action('Dialog close called')}
      >
        <Story />
      </DialogWrapper>
    </div>
  )
];
