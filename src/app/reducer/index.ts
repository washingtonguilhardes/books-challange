import { combineReducers } from 'redux';

import { AppState } from './app-state.types';
import { books } from './books';

export default combineReducers<AppState>({
  booksData: books.reducer,
});

export * from './books';
