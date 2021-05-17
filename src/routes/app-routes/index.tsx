import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { BookPage } from '../book/book.page';
import { HomePage } from '../home/home.page';

export function AppRoutes() {
  return (
    <Router>
      <Switch>
        <Route component={HomePage} path="/" exact />
        <Route component={BookPage} path="/book/:id" exact />
      </Switch>
    </Router>
  );
}
