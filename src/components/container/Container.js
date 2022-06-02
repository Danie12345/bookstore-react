import React from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';

import Nav from '../nav/Nav';
import Books from '../books/Books';
import Categories from '../categories/Categories';

import './Container.css';

const Container = () => (
  <>
    <Nav />
    <Routes>
      <Route path="/" element={<Navigate replace to="/store" />} />
      <Route path="/store" element={<Books />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </>
);

export default Container;
