import React from 'react';

import { PropTypes } from 'prop-types';

import './Book.css';

const Book = ({ props }) => {
  const { id, author, title } = props;
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
      <span>{title}</span>
    </div>
  );
};

Book.propTypes = {
  props: PropTypes.shape({}).isRequired,
  id: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Book;
