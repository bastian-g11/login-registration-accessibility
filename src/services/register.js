/* eslint-disable no-console */
import axios from '@/api/axios';

const REGISTER_URL = '/register';

// Services should be used without react!

const register = ({ user, pwd }) => {
  const response = axios.post(REGISTER_URL, JSON.stringify({ user, pwd }), {
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true,
  });
  console.log('🚀 ~ file: register.js:13 ~ response ~ response:', response);
  console.log(response?.data);
  console.log(response?.accessToken);
  console.log(JSON.stringify(response));

  return response;
};

export default register;
