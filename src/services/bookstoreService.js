import http from '../http-common';

import {
  appsEndpoint, appIdEndpoint, itemIdEndpoint, booksEndpoint,
} from '../modules/endpoints';

const createApp = () => http.post(appsEndpoint);

const createBook = (data) => http.post(`${appsEndpoint}${appIdEndpoint}${booksEndpoint}`, data);

const getBooks = () => http.get(`${appsEndpoint}${appIdEndpoint}${booksEndpoint}`);

const deleteBook = (bookId) => http.delete(
  `${appsEndpoint}${appIdEndpoint}${booksEndpoint}${itemIdEndpoint(bookId)}`,
);

const BookstoreService = {
  createApp,
  createBook,
  getBooks,
  deleteBook,
};

export default BookstoreService;
