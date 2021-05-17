import React from 'react';
import { Link } from 'react-router-dom';

import { BookCard } from '@src/components/molecules';
import { InlineLoader } from '@src/components/molecules/InlineLoader/InlineLoader';

import { BookListGrid, BookListLoader } from './BookList.styles';
import { BookListProps } from './BookList.types';

export function BookList(props: BookListProps) {
  const {
    books,
    loading,
    onClickLoadMore,
    onClickFavorite,
    favoritesBook,
    InlineLoaderProps,
  } = props;

  return (
    <>
      <BookListGrid>
        {books.map(book => (
          <Link
            to={`/book/${book.id}`}
            style={{ height: '100%', width: '100%' }}
            key={book.id}>
            <BookCard
              book={book}
              onClickFavorite={onClickFavorite}
              favorite={favoritesBook[book.id]}
            />
          </Link>
        ))}
      </BookListGrid>
      <BookListLoader>
        <InlineLoader
          title="Load more"
          {...InlineLoaderProps}
          loading={loading}
          onClick={onClickLoadMore}
        />
      </BookListLoader>
    </>
  );
}
