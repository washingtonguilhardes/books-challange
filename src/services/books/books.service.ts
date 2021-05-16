import axios from 'axios';

import { Book, BookListResponse } from './books.types';

export class BooksService {
  private static BS_INSTANCE: BooksService;

  static getInstance() {
    if (!BooksService.BS_INSTANCE) {
      BooksService.BS_INSTANCE = new BooksService();
    }
    return BooksService.BS_INSTANCE;
  }

  private client = axios.create({ baseURL: process.env.REACT_APP_GB_API_URI ?? '' });

  private maxResults = 16;

  async listBooks(startIndex: number, query?: string): Promise<BookListResponse> {
    return this.client
      .get<BookListResponse>(
        `/volumes?startIndex=${startIndex}&printType=books&maxResults=${this.maxResults}&q=${query}`
      )
      .then(({ data }) => data);
  }

  async getBook(id: string): Promise<Book> {
    return this.client.get<Book>(`/volumes/${id}`).then(({ data }) => data);
  }
}
