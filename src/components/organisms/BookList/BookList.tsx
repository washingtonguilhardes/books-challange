import React from 'react';
import { Link } from 'react-router-dom';

import { BookCard } from '@src/components/molecules';
import { InlineLoader } from '@src/components/molecules/InlineLoader/InlineLoader';

import { BookListGrid, BookListLoader } from './BookList.styles';
import { BookListProps } from './BookList.types';

export function BookList(props: BookListProps) {
  const { books, loading, onClickLoadMore, InlineLoaderProps } = props;

  return (
    <>
      <BookListGrid>
        {books.map(book => (
          <Link to={`/book/${book.id}`} key={book.id}>
            <BookCard book={book} />
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
