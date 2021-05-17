import { Book } from '@src/services';

export interface BooksDataState {
  book: { state: 'loading' | 'loaded'; bookData?: Book | null };
  books: { index: number; list: Book[]; state: 'loading' | 'loaded'; query: string };
  favoriteBooks: { [key: string]: boolean };
}
