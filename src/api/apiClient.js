// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

// Advantages of a client
// Request interceptors.
// Request timeouts and cancellations.
// Custom instances.

// We can set the timeout here
// Use ENV Variables here
const axiosClient = axios.create({
  baseURL: 'http://localhost:3500',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

// We can also use interceptors https://axios-http.com/docs/interceptors
// https://daily.dev/blog/a-guide-to-writing-clean-api-calls-using-axios

export default {
  axiosClient,
};
