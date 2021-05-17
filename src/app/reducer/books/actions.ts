import { BooksService } from '@src/services';
import { Dispatch } from 'redux';

import { AppState } from '../app-state.types';
import {
  booksListLoaded,
  booksListLoading,
  bookDataLoading,
  bookDataLoaded,
} from './index';

export const fetchBooksList = (index: number, query: string) => async (
  dispatch: Dispatch<AppState>
) => {
  dispatch(booksListLoading({ index, query }));
  const list = await BooksService.getInstance().listBooks(index, query);
  dispatch(booksListLoaded(list.items));
};

export const fetchBook = (bookId: string) => async (dispath: Dispatch<AppState>) => {
  dispath(bookDataLoading());
  const bookData = await BooksService.getInstance().getBook(bookId);
  dispath(bookDataLoaded(bookData));
};
