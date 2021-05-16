import { BookCardItem, InlineLoaderProps } from '@src/components/molecules';

export interface BookListProps {
  books: BookCardItem[];
  loading?: boolean;
  InlineLoaderProps?: InlineLoaderProps;
  onClickLoadMore?: InlineLoaderProps['onClick'];
}
