import http from '../http-common';

import {
  appsEndpoint, booksEndpoint,
} from '../modules/endpoints';

import storage from '../modules/localStorage';

const createApp = () => http.post(appsEndpoint);

storage.getLocal(createApp);

const createBook = (data) => http.post(`${appsEndpoint}/${storage.appId}${booksEndpoint}`, data);

const getBooks = () => http.get(`${appsEndpoint}/${storage.appId}${booksEndpoint}`);

const deleteBook = (bookId) => http.delete(
  `${appsEndpoint}/${storage.appId}${booksEndpoint}/${bookId}`,
);

const BookstoreService = {
  createApp,
  createBook,
  getBooks,
  deleteBook,
};

export default BookstoreService;
