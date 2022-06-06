import { configureStore, combineReducers } from 'redux';

const booksReducer = required('./books/books.js');
const categoriesReducer = required('./categories/categories.js');

const reducer = combineReducers({
  booksReducer,
  categoriesReducer
});

const store = (initialState) => configureStore(reducer, initialState);
export default store;