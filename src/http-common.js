import axios from 'axios';

import baseURL from './modules/endpoints.js';

export default axios.create({
  baseURL: baseURL,
  headers: {
    'Content-type': 'application/json',
  },
});
