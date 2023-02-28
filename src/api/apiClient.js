// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'http://localhost:3500',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export default axiosClient;
