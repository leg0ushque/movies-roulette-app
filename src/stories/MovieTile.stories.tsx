import React from 'react';

import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { GENRES_LIST } from './constants';
import MovieTileWrapper, { type IMovieTileWrapperProps } from './MovieTileWrapper';

const MovieTileWrapperStory: ComponentMeta<typeof MovieTileWrapper> = {
  title: 'Components/MovieTile',
  component: MovieTileWrapper
}
export default MovieTileWrapperStory;

const Template: ComponentStory<typeof MovieTileWrapper> = (props: IMovieTileWrapperProps) => <MovieTileWrapper {...props} />;

export const NoDataProvided = {
  ...Template.bind({}),
  args: {
    imageUrl: ''
  }
};

export const DefaultSingle = {
  ...Template.bind({}),
  args: {
    id: '3076',
    imageUrl: 'https://m.media-amazon.com/images/I/715QHVj8vaL._SL1302_.jpg',
    title: 'John Wick 4',
    releaseYear: '2023',
    genresList: GENRES_LIST.map(item => item.name)
  }
};
