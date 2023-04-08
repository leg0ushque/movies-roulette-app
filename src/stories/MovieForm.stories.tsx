import React from 'react';

import { action } from '@storybook/addon-actions';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import Dialog from '../components/Dialog';
import MovieForm, { type IMovieFormProps } from '../components/MovieForm';
import testData from '../shared/constants/test-data';
import type IGenre from '../shared/types/IGenre';

const MovieFormStory: ComponentMeta<typeof MovieForm> = {
  title: 'Components/MovieForm',
  component: MovieForm
}
export default MovieFormStory;

const Template: ComponentStory<typeof MovieForm> = (props: IMovieFormProps) => <MovieForm {...props} />;

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
    <Dialog logo={''} title={'Movie form in DIALOG'} isNotification={false} onClose={() => {}}>
      <Story />
    </Dialog>
  )
];
