import React from 'react';

import { action } from '@storybook/addon-actions';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import MovieForm, { type IMovieFormInitialValues } from '../components/MovieForm';
import testData from '../shared/constants/test-data';

const MovieFormStory: ComponentMeta<typeof MovieForm> = {
  title: 'Components/MovieForm',
  component: MovieForm
}
export default MovieFormStory;

const Template: ComponentStory<typeof MovieForm> = (props: IMovieFormInitialValues) => <MovieForm {...props} />;

const movie = testData.movies[0]

export const DefaultEmptyForm = {
  ...Template.bind({}),
  args: {
    initialTitle: '',
    initialDescription: '',
    initialDuration: '',
    initialMovieUrl: '',
    initialRating: 0.0,
    initialReleaseDate: new Date(),
    initialGenreIds: [],
    genres: testData.genres,
    onSubmit: action('Movie form submitted:')
  }
};

export const DefaultFilledForm = {
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
};
