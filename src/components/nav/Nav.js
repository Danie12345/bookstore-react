import React from 'react';
import { NavLink } from 'react-router-dom';

import './Nav.css';

const Nav = () => {
  const links = [
    {
      id: 1,
      path: 'books',
      text: 'Books',
    },
    {
      id: 2,
      path: 'categories',
      text: 'Categories',
    },
  ];

  return (
    <nav className="navBar">
      <h1>Bookstore CMS</h1>
      <ul className="navUl">
        {links.map((link) => (
          <li key={link.id}>
            <NavLink to={link.path}>
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
