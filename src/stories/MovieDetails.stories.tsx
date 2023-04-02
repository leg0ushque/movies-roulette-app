import React from 'react';
import styled from 'styled-components';

import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import MovieDetails, { type IMovieDetailsProps } from '../components/MovieDetails';
import { GENRES_LIST } from './constants';

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

export const Default = {
  ...Template.bind({}),
  args: {
    id: '3076',
    imageUrl: 'https://m.media-amazon.com/images/I/715QHVj8vaL._SL1302_.jpg',
    title: 'John Wick 4',
    releaseYear: '2023',
    genresList: GENRES_LIST.map(item => item.name),
    rating: 9.5,
    duration: '2h 49m',
    description: 'John Wick (Keanu Reeves) uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nisi sunt odio libero magni assumenda soluta consectetur quia eveniet cumque error sit deserunt temporibus recusandae similique, enim fugit qui autem?'
  }
};
