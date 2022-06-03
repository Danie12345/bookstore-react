import React from 'react';

import Books from './books/Books';
import Form from './form/Form';

const BooksSection = () => (
  <div>
    <Books />
    <hr className="divideSection" />
    <Form />
  </div>
);

export default BooksSection;
