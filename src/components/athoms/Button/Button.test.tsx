import React from 'react';

import { render } from '@testing-library/react';

import { Button } from './Button';

describe('Button', () => {
  it('should match with snapshot', () => {
    const { container } = render(<Button>teste</Button>);
    expect(container).toMatchSnapshot();
  });
});
