import React from 'react';
import styled from 'styled-components';

import { action } from '@storybook/addon-actions';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import MovieTileContextMenu, {
  type IMovieTileContextMenuProps
} from '../components/MovieTileContextMenu';
import { EDIT_DELETE_CONTEXT_MENU_ITEMS } from '../components/MovieTileContextMenu/constants';

const WIDE_DIV = styled.div`
  background: lightgreen;
  height: 300px;
  width: 300px;
  position: relative;
  `;

const NARROW_DIV = styled.div`
  background: var(--color2);
  color: var(--color5);
  height: 50px;
  width: 210px;
  `;

const MovieTileContextMenuStory: ComponentMeta<typeof MovieTileContextMenu> = {
  title: 'Components/MovieTileContextMenu',
  component: MovieTileContextMenu
}
export default MovieTileContextMenuStory;

const Template: ComponentStory<typeof MovieTileContextMenu> = (props: IMovieTileContextMenuProps) => <MovieTileContextMenu {...props} />;

export const Default = {
  ...Template.bind({}),
  args: {
    id: 'blabla',
    menuIsVisible: true,
    items: EDIT_DELETE_CONTEXT_MENU_ITEMS,
    hideMenu: action('Hide menu called!')
  }
};

Default.decorators = [
  (Story) => (
    <WIDE_DIV>
      this is a parent div
      <Story />
      <NARROW_DIV>this is a child div</NARROW_DIV>
    </WIDE_DIV>
  )
]
