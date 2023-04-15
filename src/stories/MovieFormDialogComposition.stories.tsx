import React from 'react';

import { action } from '@storybook/addon-actions';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import MovieForm, { type IMovieFormProps } from '../components/MovieForm';
import testData from '../shared/constants/test-data';
import DialogWrapper from './DialogWrapper';

const MovieFormStory: ComponentMeta<typeof MovieForm> = {
  title: 'Compositions/MovieForm in Dialog',
  component: MovieForm
}
export default MovieFormStory;

const Template: ComponentStory<typeof MovieForm> = (props: IMovieFormProps) => <MovieForm {...props} />;

const movie = testData.movies[0]

export const AddMovie = {
  ...Template.bind({}),
  args: {
    genres: testData.genres,
    onClick: action('Movie tile clicked!')
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
    movie,
    genres: testData.genres,
    onClick: action('Movie tile clicked!')
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
