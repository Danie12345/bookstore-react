import React from 'react';

import { PropTypes } from 'prop-types';

import './Book.css';

const Book = (props) => {
  const {
    id, author, title, category,
  } = props;
  return (
    <div>
      <span>
        {id}
        {' '}
        -
        {' '}
      </span>
      <span>
        {author}
        {': '}
      </span>
      <span>
        {title}
        {' '}
      </span>
      <span>{category}</span>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
