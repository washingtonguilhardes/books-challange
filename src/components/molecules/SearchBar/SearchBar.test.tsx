import React from 'react';

import { render } from '@testing-library/react';

import { SearchBar } from './SearchBar';

describe('SearchBar', () => {
  it('should match with snapshot', () => {
    const onSubmitFn = jest.fn();
    const { container } = render(<SearchBar onSubmit={onSubmitFn} title="title" />);
    expect(container).toMatchSnapshot();
  });
});
