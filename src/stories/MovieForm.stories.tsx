import React from 'react';

import { action } from '@storybook/addon-actions';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import MovieForm, { type IMovieFormProps } from '../components/MovieForm';
import testData from '../shared/constants/test-data';

const MovieFormStory: ComponentMeta<typeof MovieForm> = {
  title: 'Components/MovieForm',
  component: MovieForm
}
export default MovieFormStory;

const Template: ComponentStory<typeof MovieForm> = (props: IMovieFormProps) => <MovieForm {...props} />;

const movie = testData.movies[0]

export const DefaultEmptyForm = {
  ...Template.bind({}),
  args: {
    movie: null,
    genres: testData.genres,
    onSubmit: action('Movie form submitted:')
  }
};

export const DefaultFilledForm = {
  ...Template.bind({}),
  args: {
    movie,
    genres: testData.genres,
    onSubmit: action('Movie form submitted:')
  }
};
