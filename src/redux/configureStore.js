import { combineReducers, configureStore, applyMiddleware } from '@reduxjs/toolkit';

import thunk from 'redux-thunk';

import booksReducer from './books/books';
import categoriesReducer from './categories/categories';

const reducers = combineReducers({
  book: booksReducer,
  categories: categoriesReducer,
});

const store = configureStore(
  { reducer: reducers },
  applyMiddleware(thunk),
);

export default store;
