import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ClearIcon from '@material-ui/icons/Clear';

import { fetchBooksList, toggleLikedBook } from '@src/app/reducer';
import { AppState } from '@src/app/reducer/app-state.types';
import { BooksDataState } from '@src/app/reducer/books/types';
import { BookList, SearchBar } from '@src/components';

export const HomePage = () => {
  const dispatch = useDispatch();
  const { query, ...books } = useSelector<AppState, BooksDataState['books']>(
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
    dispatch(fetchBooksList(0, query));
  }, [dispatch, query]);

  return (
    <div>
      <SearchBar
        onSubmit={text => {
          if (text.trim()) {
            dispatch(fetchBooksList(0, text));
          }
        }}
        title="Books"
      />
      <div
        style={{
          height: 120,
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '16px',
          display: 'flex',
          alignItems: 'center',
        }}>
        {query && query !== 'a' && (
          <>
            <Typography variant="h5" component="span">
              {'Results of '}
              <Typography variant="h5" component="span">
                &ldquo;{query}&rdquo;
              </Typography>
            </Typography>
            <Button onClick={() => dispatch(fetchBooksList(0, 'a'))}>
              <ClearIcon /> CLEAR
            </Button>
          </>
        )}
      </div>
      <BookList
        loading={books.state === 'loading'}
        favoritesBook={favoritesBook}
        onClickLoadMore={handleLoadMore}
        onClickFavorite={handleFavorite}
        books={books.list.map(({ id, volumeInfo: { title, imageLinks } }) => ({
          id,
          title,
          thumbnail: imageLinks?.thumbnail ?? '',
        }))}
      />
    </div>
  );
};
