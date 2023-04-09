import React from 'react';

import { action } from '@storybook/addon-actions';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import Dialog from '../components/Dialog';
import testData from '../shared/constants/test-data';
import MovieFormWrapper, { type IMovieFormWrapperProps } from './MovieFormWrapper';

import type IGenre from '../shared/types/IGenre';

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
    <Dialog logo={''} title={'Add movie'} isNotification={false} isCentered={false} onClose={() => { alert('Dialog close called') }}>
      <Story />
    </Dialog>
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
    <Dialog logo={''} title={'Edit movie'} isNotification={false} isCentered={false} onClose={() => { alert('Dialog close called') }}>
      <Story />
    </Dialog>
  )
];
