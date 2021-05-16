import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchBooksList, toggleLikedBook } from '@src/app/reducer';
import { AppState } from '@src/app/reducer/app-state.types';
import { BooksDataState } from '@src/app/reducer/books/types';
import { BookList, SearchBar } from '@src/components';

export const HomePage = () => {
  const dispatch = useDispatch();
  const books = useSelector<AppState, BooksDataState['books']>(
    ({ booksData }) => booksData.books
  );
  const favoritesBook = useSelector<AppState, BooksDataState['favoriteBooks']>(
    ({ booksData }) => booksData.favoriteBooks
  );

  const handleLoadMore = () => {
    dispatch(fetchBooksList(books.index + 1, 'harry potter'));
  };
  const handleFavorite = (bookId: string) => {
    dispatch(toggleLikedBook(bookId));
  };
  useEffect(() => {
    dispatch(fetchBooksList(0, 'harry potter'));
  }, [dispatch]);

  return (
    <div>
      <SearchBar onSubmit={text => console.log('ITEMS', text)} title="Books" />
      <div style={{ height: 120 }} />
      <BookList
        loading={books.state === 'loading'}
        favoritesBook={favoritesBook}
        onClickLoadMore={handleLoadMore}
        onClickFavorite={handleFavorite}
        books={books.list.map(({ id, volumeInfo: { title, imageLinks } }) => ({
          id,
          title,
          thumbnail: imageLinks.thumbnail,
        }))}
      />
    </div>
  );
};
