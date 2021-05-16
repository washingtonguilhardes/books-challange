import React from 'react';

import { render } from '@testing-library/react';

import { BookCard } from './BookCard';

describe('BookCard', () => {
  it('should match with snapshot', () => {
    const { container } = render(
      <BookCard book={{ id: '1', thumbnail: 'thumbnail', title: 'title' }} />
    );
    expect(container).toMatchSnapshot();
  });
});
