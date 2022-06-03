import React from 'react';

import { PropTypes } from 'prop-types';

import './Book.css';

const Book = (props) => {
  const {
    id, author, title, category,
  } = props;
  const links = [
    {
      id: 1,
      href: '#',
      name: 'Comments',
    },
    {
      id: 2,
      href: '#',
      name: 'Remove',
    },
    {
      id: 3,
      href: '#',
      name: 'Edit',
    },
  ];
  return (
    <div className="book" id={id}>
      {/* <span className="bookAuthor">{author}</span>
      <span className="bookTitle">{title}</span>
      <span className="bookCategory">{category}</span> */}
      <div>
        <span>{category}</span>
        <span>{title}</span>
        <span>{author}</span>
        <div>
          <ul>
            {links && links.map((link) => (
              <li key={link.id}>
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div>
            <div className="circle-wrap">
              <div className="circle">
                <div className="mask full">
                  <div className="fill"> </div>
                </div>
                <div className="mask half">
                  <div className="fill"> </div>
                </div>
                <div className="inside-circle"> </div>
              </div>
            </div>
            <div>
              <span>{Math.round(Math.random() * 100)}</span>
              <span>%</span>
            </div>
            <small>Completed</small>
          </div>
          <div>
            <div>
              <span>CURRENT CHAPTER</span>
              <span>Chapter 17</span>
            </div>
            <button type="button">UPDATE PROGRESS</button>
          </div>
        </div>
      </div>
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
