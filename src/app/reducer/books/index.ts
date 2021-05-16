import { createAction, createSlice } from '@reduxjs/toolkit';
import { Book } from '@src/services';

import { BooksDataState } from './types';

const initialState = {
  book: { state: 'loading', bookData: null },
  books: { index: 0, list: [], state: 'loading' },
} as BooksDataState;

const name = 'booksData';

export const bookDataLoading = createAction(`${name}/book/data/loading`);
export const bookDataLoaded = createAction(`${name}/book/data/loaded`);
export const booksListLoading = createAction<number>(`${name}/books/list/loading`);
export const booksListLoaded = createAction<Book[]>(`${name}/books/list/loaded`);

export const books = createSlice({
  initialState,
  name,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(bookDataLoading, state => {
      return {
        ...state,
        book: {
          bookData: null,
          state: 'loading',
        },
      };
    });
    builder.addCase(bookDataLoaded, (state, action) => {
      return {
        ...state,
        book: {
          bookData: action.payload ?? null,
          state: 'loaded',
        },
      };
    });
    builder.addCase(booksListLoading, (state, action) => ({
      ...state,
      books: { ...state.books, index: action.payload, state: 'loading' },
    }));
    builder.addCase(booksListLoaded, (state, action) => {
      console.log('aqui', { action, state });
      return {
        ...state,
        books: {
          ...state.books,
          state: 'loaded',
          list: action.payload,
        },
      };
    });
  },
});

export * from './actions';
