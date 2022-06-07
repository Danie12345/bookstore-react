import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Container from './components/container/Container';
import store from './redux/configureStore';

const App = () => (
  <Provider store={store}>
    <Router basename={process.env.PUBLIC_URL}>
      <Container />
    </Router>
  </Provider>
);

export default App;
