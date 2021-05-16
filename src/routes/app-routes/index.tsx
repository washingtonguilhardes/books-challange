import { BrowserRouter as Router, Switch } from 'react-router-dom';

import { HomeRoutes } from '../home/home.routes';
import { BookRoutes } from './../book/book.routes';

export function AppRoutes() {
  return (
    <Router>
      <Switch>
        <HomeRoutes />
        <BookRoutes />
      </Switch>
    </Router>
  );
}
