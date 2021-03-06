import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import './Books.css';
import Book from './book/Book';
import { getBooks } from '../../../redux/books/books';

const Books = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.book);

  useEffect(() => {
    dispatch(getBooks);
  }, [dispatch]);

  return (
    <div>
      <ul className="bookItems">
        {books && books.map((book) => (
          <li className="bookItem" key={book.item_id}>
            <Book
              id={book.item_id}
              author={book.author}
              title={book.title}
              category={book.category}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Books;
