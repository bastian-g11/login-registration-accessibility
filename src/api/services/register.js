/* eslint-disable no-console */
import axiosClient from '@/api/apiClient';

const REGISTER_URL = '/register';

// Services should be used without react!

const register = ({ user, pwd }) => {
  const response = axiosClient.post(
    REGISTER_URL,
    // Here we're passing what our backend is expecting (names)
    JSON.stringify({ user, pwd })
  );
  console.log('🚀 ~ file: register.js:13 ~ response ~ response:', response);
  console.log(response?.data);
  console.log(response?.accessToken);
  console.log(JSON.stringify(response));

  return response;
};

export default register;
