import {
  BookCardItem,
  BookCardProps,
  InlineLoaderProps,
} from '@src/components/molecules';

export interface BookListProps {
  books: BookCardItem[];
  favoritesBook: { [key: string]: boolean };
  loading?: boolean;
  InlineLoaderProps?: InlineLoaderProps;
  onClickLoadMore?: InlineLoaderProps['onClick'];
  onClickFavorite?: BookCardProps['onClickFavorite'];
}
