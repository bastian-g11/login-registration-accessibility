// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

// Advantages of a client
// Request interceptors.
// Request timeouts and cancellations.
// Custom instances.

// We can set the timeout here
// Use ENV Variables here

const BASE_URL = 'http://localhost:3500';

const axiosClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

/** We will use interceptors to this axios private, and they will
 * attach the JWT tokens for us and they will even retry when we get
 * a failure the first time in the request (token expired)
 */
export const axiosPrivateClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

// We can also use interceptors https://axios-http.com/docs/interceptors
// https://daily.dev/blog/a-guide-to-writing-clean-api-calls-using-axios

export default axiosClient;
