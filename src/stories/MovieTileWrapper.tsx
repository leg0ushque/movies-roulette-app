import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import styled from 'styled-components';

import ContextMenu from '../components/ContextMenu';
import MovieTile, { type IMovieTileProps } from '../components/MovieTile';
import { movieContextMenuItems } from '../shared/utils/movieContextMenuItems';

import type IContextMenuState from '../shared/types/IContextMenuState';
export interface IMovieTileWrapperProps extends IMovieTileProps { }

const DarkBackgroundDiv = styled.div`
  background: var(--color3)
  `;

const MovieTileWrapper: React.FC<IMovieTileWrapperProps> = (props) => {
  const [contextMenuState, setContextMenuState] = useState<IContextMenuState>({ id: '', posX: 0, posY: 0, isVisible: false });

  const showContextMenu = (event: React.MouseEvent, id: string): void => {
    event.preventDefault();
    setContextMenuState(() => {
      return {
        id,
        posX: event.pageX,
        posY: event.pageY,
        isVisible: true
      }
    })
  }

  const hideContextMenu = (): void => {
    setContextMenuState((state) => {
      return {
        ...state,
        isVisible: false
      }
    })
  }

  return (
      <>
        <ContextMenu
          menuState={contextMenuState}
          hideMenu={hideContextMenu}
          items={movieContextMenuItems}
        />
        <DarkBackgroundDiv>
          <Container>
            <Row>
              <MovieTile
                id={props.id}
                title={props.title}
                imageUrl={props.imageUrl}
                releaseYear={props.releaseYear}
                genresList={props.genresList}
                onClick={props.onClick}
                onContextMenu={(e) => {
                  showContextMenu(e, props.id);
                }}
              ></MovieTile>
            </Row>
          </Container>
        </DarkBackgroundDiv>
      </>
  );
}

export default MovieTileWrapper;
