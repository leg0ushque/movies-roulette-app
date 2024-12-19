import '@testing-library/jest-dom/extend-expect';

import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import SortControl from './SortControl';
import sortWays from './sortWays';

describe('SortControl', () => {
  const onChangeMock = jest.fn();
  const toggleSortOrderMock = jest.fn();
  const selectedSortId = sortWays[0].id

  test('has all sort ways passed in props rendered as buttons', () => {
    const { getByRole } = render(<SortControl
      selectedSortId={selectedSortId}
      sortWays={sortWays}
      onChange={onChangeMock}
      isSortDesc={true}
      toggleSortOrder={toggleSortOrderMock}
      />)

    const ul = getByRole('sortList')

    expect(ul.children.length).toBe(sortWays.length);
  });

  test('has onChange called when sort way was changed', () => {
    const clickedIndex = 1; // should be in range of sortWays

    const { getByRole } = render(<SortControl
      selectedSortId={selectedSortId}
      sortWays={sortWays}
      onChange={onChangeMock}
      isSortDesc={true}
      toggleSortOrder={toggleSortOrderMock}
      />)

    const ul = getByRole('sortList')

    fireEvent.click(ul.children[clickedIndex]);

    // onChange is called using useEffect
    // we have 1 call after click + 2 calls during mounts
    // (tsconfig.json with true 'strict mode' mounts twice)
    expect(onChangeMock).toBeCalledTimes(3)
    expect(onChangeMock).toBeCalledWith(sortWays[clickedIndex].id)
  });
});
