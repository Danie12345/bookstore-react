import React from 'react';
import { useDispatch } from 'react-redux';

import { PropTypes } from 'prop-types';

import './Book.css';
import { CircularProgressBar } from '@tomik23/react-circular-progress-bar';
import { removeBook } from '../../../../redux/books/books';

const Book = (props) => {
  const dispatch = useDispatch();
  const {
    id, author, title, category,
  } = props;
  const percentile = Math.round(Math.random() * 100);
  const links = [
    {
      id: 1,
      href: '#',
      name: 'Comments',
      dispatchLink: () => {},
    },
    {
      id: 2,
      href: '#',
      name: 'Remove',
      dispatchLink: (e) => {
        e.preventDefault();
        dispatch(removeBook(id));
      },
    },
    {
      id: 3,
      href: '#',
      name: 'Edit',
      dispatchLink: () => {},
    },
  ];

  return (
    <div className="book" id={id}>
      <div className="bookStuff">
        <div className="bookInfo">
          <span className="bookCategory">{category}</span>
          <span className="bookTitle">{title}</span>
          <span className="bookAuthor">{author}</span>
        </div>
        <div className="bookActions">
          <ul className="actions">
            {links && links.map((link) => (
              <li key={link.id} className="action">
                <a
                  href={link.href}
                  onClick={link.dispatchLink}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="bookProgress">
        <div className="completion">
          <CircularProgressBar
            colorCircle="#e6e6e6"
            colorSlice="#0290ff"
            number={false}
            percent={percentile}
            size={75}
          />
          <div className="number">
            <div className="percentage">
              <span>{percentile}</span>
              <span>%</span>
            </div>
            <small className="completed">Completed</small>
          </div>
        </div>
        <div className="vl" />
        <div className="chapterProgress">
          <div className="chapterSection">
            <div className="current">CURRENT CHAPTER</div>
            <div className="chapter">Chapter 17</div>
          </div>
          <button className="update" type="button"><span>UPDATE PROGRESS</span></button>
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
