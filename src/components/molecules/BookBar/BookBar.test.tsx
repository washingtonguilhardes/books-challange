import React from 'react';

import { render } from '@testing-library/react';

import { BookBar } from './BookBar';

describe('SearchBar', () => {
  it('should match with snapshot', () => {
    const { container } = render(<BookBar title="title" />);
    expect(container).toMatchSnapshot();
  });
});
