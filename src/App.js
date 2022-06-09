import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Container from './components/container/Container';

const App = () => (
  <>
    <Router basename={process.env.PUBLIC_URL}>
      <Container />
    </Router>
  </>
);

export default App;
