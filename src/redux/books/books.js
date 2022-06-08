import BookstoreDataService from '../../services/BookstoreService';

// Actions
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
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
    case REMOVE_BOOK:
      return state.filter((item) => item.id !== action.payload.id);
    default:
      return state;
  }
}

// Action Creators
export const addBook = (obj) => async (dispatch) => {
  try {
    const res = await BookstoreDataService.createBook(obj);
    dispatch({ type: ADD_BOOK, payload: obj });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const removeBook = (obj) => async (dispatch) => {
  try {
    const res = await BookstoreDataService.deleteBook(obj.id);
    dispatch({ type: REMOVE_BOOK, payload: obj });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
