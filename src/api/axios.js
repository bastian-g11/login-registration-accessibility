// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

// We can set the timeout here
export default axios.create({
  baseURL: 'http://localhost:3500',
});