import { Route } from 'react-router-dom';

import { HomePage } from './home.page';

export function HomeRoutes() {
  return (
    <>
      <Route component={HomePage} path="/" exact />
    </>
  );
}
