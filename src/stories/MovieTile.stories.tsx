import React from 'react';
import { Container, Row } from 'react-bootstrap';
import styled from 'styled-components';

import { action } from '@storybook/addon-actions';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import MovieTile, { type IMovieTileProps } from '../components/MovieTile';
import testData from '../shared/constants/test-data';

import type IGenre from '../shared/types/IGenre';

const DarkBackgroundDiv = styled.div`
  background: var(--color3)
  `;

const MovieTileStory: ComponentMeta<typeof MovieTile> = {
  title: 'Components/MovieTile',
  component: MovieTile,
  decorators: [
    (Story) => (
    <DarkBackgroundDiv>
      <Container>
        <Row>
          <Story/>
        </Row>
      </Container>
    </DarkBackgroundDiv>
    )
  ]
}
export default MovieTileStory;

const Template: ComponentStory<typeof MovieTile> = (props: IMovieTileProps) => <MovieTile {...props} />;

const movie = testData.movies[0]
const movieGenres = movie.genreIds.map((id: string) => testData.genres.find((x: IGenre) => x.id === id)) as IGenre[];
const onClick = action('Movie tile clicked!')

export const NoDataProvided = {
  ...Template.bind({}),
  args: {
    onClick
  }
};

export const DefaultSingle = {
  ...Template.bind({}),
  args: {
    movie,
    onClick,
    movieGenres
  }
};
