import axios from 'axios';

import { BooksService } from './books.service';

jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('BookService', () => {
  it('BookService.getInstance(...)', async () => {
    const service = BooksService.getInstance();
    expect(service).toBeTruthy();
  });

  it('BookService#listBooks(startIndex, query)', async () => {
    const mokedResponse = {
      kind: 'kind',
      totalItems: 2,
      items: [
        { kind: 'kind', id: 'id-1', etag: 'etag', selfLink: 'selfLink' },
        { kind: 'kind', id: 'id-2', etag: 'etag', selfLink: 'selfLink' },
      ],
    };

    mockedAxios.get.mockResolvedValue({
      data: mokedResponse,
    });
    const booksService = BooksService.getInstance();

    const result = await booksService.listBooks(0, 'test');

    expect(booksService).toBeTruthy();
    expect(result).toMatchObject(mokedResponse);
  });

  it('BookService#getBook(id)', async () => {
    const mokedResponse = {
      data: { kind: 'kind', id: 'id-1', etag: 'etag', selfLink: 'selfLink' },
    };

    mockedAxios.get.mockResolvedValue({
      data: mokedResponse,
    });
    const booksService = BooksService.getInstance();

    const result = await booksService.getBook('test');

    expect(booksService).toBeTruthy();
    expect(result).toMatchObject(mokedResponse);
  });
});
