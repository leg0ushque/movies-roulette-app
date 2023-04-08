import React from 'react';
import styled from 'styled-components';

import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import MovieDetails, { type IMovieDetailsProps } from '../components/MovieDetails';
import testData from '../shared/constants/test-data';
import type IGenre from '../shared/types/IGenre';

const DarkBackgroundDiv = styled.div`
  background: var(--color3)
  `;

const MovieDetailsStory: ComponentMeta<typeof MovieDetails> = {
  title: 'Components/MovieDetails',
  component: MovieDetails,
  decorators: [
    (Story) => (
      <DarkBackgroundDiv>
        <Story/>
      </DarkBackgroundDiv>
    )
  ]
}
export default MovieDetailsStory;

const Template: ComponentStory<typeof MovieDetails> = (props: IMovieDetailsProps) => <MovieDetails {...props} />;

const movie = testData.movies[0]
movie.genresList = movie.genreIds.map((id: string) => testData.genres.find((x: IGenre) => x.id === id)) as IGenre[];

export const Default = {
  ...Template.bind({}),
  args: {
    movie
  }
};
