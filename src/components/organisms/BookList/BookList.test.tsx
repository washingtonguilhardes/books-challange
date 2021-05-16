import React from 'react';

import { render } from '@testing-library/react';
import events from '@testing-library/user-event';

import { BookList } from './BookList';

describe('BookList', () => {
  it('should match with snapshot', () => {
    const onClickLoadMore = jest.fn();
    const { container, getByText } = render(
      <BookList
        books={[{ id: '1', thumbnail: 'thumbnail', title: 'title' }]}
        favoritesBook={{}}
        InlineLoaderProps={{ title: 'loadmore', onClick: onClickLoadMore }}
      />
    );

    const loadmore = getByText(/loadmore/);
    events.click(loadmore);
    expect(container).toMatchSnapshot();
    expect(onClickLoadMore).toBeCalledTimes(1);
  });
});
