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
    {
      id: '2',
      author: 'Arturo',
      title: 'How To Make A Professional Resume',
    },
    {
      id: '3',
      author: 'Luis',
      title: 'Polygons Are Old-School, Multigons Are In',
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
