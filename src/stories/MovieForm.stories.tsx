import React from 'react';

import { action } from '@storybook/addon-actions';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import testData from '../shared/constants/test-data';
import MovieFormWrapper, { type IMovieFormWrapperProps } from './MovieFormWrapper';

import type IGenre from '../shared/types/IGenre';

const MovieFormWrapperStory: ComponentMeta<typeof MovieFormWrapper> = {
  title: 'Components/MovieForm',
  component: MovieFormWrapper
}
export default MovieFormWrapperStory;

const Template: ComponentStory<typeof MovieFormWrapper> = (props: IMovieFormWrapperProps) => <MovieFormWrapper {...props} />;

const movie = testData.movies[0]
movie.genresList = movie.genreIds.map((id: string) => testData.genres.find((x: IGenre) => x.id === id)) as IGenre[];

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
