import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';

import { render } from '@testing-library/react';
import events from '@testing-library/user-event';

import { BookList } from './BookList';

describe('BookList', () => {
  it('should match with snapshot', () => {
    const onClickLoadMore = jest.fn();
    const { container, getByText } = render(
      <Router>
        <BookList
          books={[{ id: '1', thumbnail: 'thumbnail', title: 'title' }]}
          favoritesBook={{}}
          onClickLoadMore={onClickLoadMore}
          InlineLoaderProps={{ title: 'loadmore' }}
        />
      </Router>
    );

    const loadmore = getByText(/loadmore/);
    events.click(loadmore);
    expect(container).toMatchSnapshot();
    expect(onClickLoadMore).toBeCalledTimes(1);
  });
});
