import React from 'react';

import { action } from '@storybook/addon-actions';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import Dialog from '../components/Dialog';
import testData from '../shared/constants/test-data';
import type IGenre from '../shared/types/IGenre';
import MovieFormWrapper, { type IMovieFormWrapperProps } from './MovieFormWrapper';

const MovieFormWrapperStory: ComponentMeta<typeof MovieFormWrapper> = {
  title: 'Components/MovieForm',
  component: MovieFormWrapper
}
export default MovieFormWrapperStory;

const Template: ComponentStory<typeof MovieFormWrapper> = (props: IMovieFormWrapperProps) => <MovieFormWrapper {...props} />;

const movie = testData.movies[0]
movie.genresList = movie.genreIds.map((id: string) => testData.genres.find((x: IGenre) => x.id === id)) as IGenre[];

export const Default = {
  ...Template.bind({}),
  args: {
    movie,
    genres: testData.genres,
    onClick: action('Movie tile clicked!')
  }
};

export const AsDialogModal = {
  ...Template.bind({}),
  args: {
    movie,
    genres: testData.genres,
    onClick: action('Movie tile clicked!')
  }
}

AsDialogModal.decorators = [
  (Story) => (
    <Dialog logo={''} title={'Movie form in DIALOG'} isNotification={false} onClose={() => { alert('Dialog close called') }}>
      <Story />
    </Dialog>
  )
];
