import '../components/MovieTile/styles.css';

import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import styled from 'styled-components';

import { type Args, type PartialStoryFn } from '@storybook/csf';
import { type ComponentMeta, type ComponentStory, type ReactFramework } from '@storybook/react';

import MovieTile, { type IMovieTileProps } from '../components/MovieTile';
import { GENRES_LIST } from './constants';

const StyledDiv = styled.div`
  background: var(--color3)
  `;

const MovieTileStory: ComponentMeta<typeof MovieTile> = {
  title: 'Components/MovieTile',
  component: MovieTile,
  decorators: [
    (Story: PartialStoryFn<ReactFramework, Args>) => (
      <StyledDiv className='decorator'>
        <Container>
          <Row>
            <Story/>
          </Row>
        </Container>
      </StyledDiv>
    )
  ]
}
export default MovieTileStory;

const Template: ComponentStory<typeof MovieTile> = (props: IMovieTileProps) => <MovieTile {...props} />;

export const NoDataProvided = {
  ...Template.bind({}),
  args: {
    imageUrl: ''
  }
};

export const DefaultSingle = {
  ...Template.bind({}),
  args: {
    imageUrl: 'https://m.media-amazon.com/images/I/715QHVj8vaL._SL1302_.jpg',
    title: 'John Wick 4',
    releaseYear: '2023',
    genresList: GENRES_LIST.map(item => item.name)
  }
};
