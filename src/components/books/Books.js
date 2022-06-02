import React from 'react';

import './Books.css';
import Book from './book/Book';

const Books = () => {
  const books = [
    {
      id: '1',
      author: 'Daniel',
      title: 'How to get away with mass murder',
    },
  ];

  return (
    <div>
      <ul>
        {books.map((book) => (
          <li key={book.id}><Book props={book} /></li>
        ))}
      </ul>
    </div>
  );
};

export default Books;
