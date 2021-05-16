import { BooksService } from '@src/services';
import { Dispatch } from 'redux';

import { AppState } from '../app-state.types';
import { booksListLoaded, booksListLoading } from './index';

export const fetchBooksList = (index: number, query: string) => async (
  dispatch: Dispatch<AppState>
) => {
  dispatch(booksListLoading(index));
  const list = await BooksService.getInstance().listBooks(index, query);
  dispatch(booksListLoaded(list.items));
};
