import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import CircularProgress from '@material-ui/core/CircularProgress';

import { fetchBook, toggleLikedBook } from '@src/app/reducer';
import { AppState } from '@src/app/reducer/app-state.types';
import { BooksDataState } from '@src/app/reducer/books/types';
import { BookDetails } from '@src/components';
import { BookBar } from '@src/components/molecules/BookBar';

export function BookPage() {
  const book = useSelector<AppState, BooksDataState['book']>(
    ({ booksData }) => booksData.book
  );
  const favoriteBooks = useSelector<AppState, BooksDataState['favoriteBooks']>(
    ({ booksData }) => booksData.favoriteBooks
  );

  const dispatch = useDispatch();
  const { push } = useHistory();

  const { id } = useParams<{ id: string }>();

  const handleFavorite = () => {
    dispatch(toggleLikedBook(id));
  };

  useEffect(() => {
    if (id) {
      dispatch(fetchBook(id));
    }
  }, [dispatch, id]);

  return (
    <div>
      <BookBar
        title={book.bookData?.volumeInfo.title ?? ''}
        onClickBack={() => push('/')}
        onClickFavorite={handleFavorite}
        favorite={favoriteBooks[id]}
      />
      {book.state === 'loading' && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            minHeight: 500,
          }}>
          <CircularProgress size={50} color="primary" />
        </div>
      )}
      {book.bookData?.volumeInfo && <BookDetails volumeInfo={book.bookData.volumeInfo} />}
    </div>
  );
}
