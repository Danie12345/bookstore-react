/* eslint-disable import/extensions */
import BookstoreService from '../../services/BookstoreService.js';

// Actions
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const ADD_ALL_BOOKS = 'bookstore/books/ADD_ALL_BOOKS';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const defaultState = [];

// Reducer
export default function reducer(state = defaultState, action = {}) {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        action.payload,
      ];
    case ADD_ALL_BOOKS:
      return action.payload;
    case REMOVE_BOOK:
      return state.filter((item) => item.item_id !== action.payload);
    default:
      return state;
  }
}

// Action Creators
export const addBook = (obj) => async (dispatch) => {
  await BookstoreService.createBook(obj);
  dispatch({ type: ADD_BOOK, payload: obj });
};

export const removeBook = (bookId) => async (dispatch) => {
  dispatch({ type: REMOVE_BOOK, payload: bookId });
  await BookstoreService.deleteBook(bookId);
};

export const getBooks = async (dispatch) => {
  const res = await BookstoreService.getBooks();
  const books = Object.keys(res.data).map((id) => (
    { ...res.data[id][0], item_id: id }
  ));
  dispatch({ type: ADD_ALL_BOOKS, payload: books });
};
