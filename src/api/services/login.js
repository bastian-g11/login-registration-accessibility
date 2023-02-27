/* eslint-disable no-console */
import axiosClient from '@/api/apiClient';

const LOGIN_URL = '/login';

const login = ({ user, pwd }) => {
  const response = axiosClient.post(LOGIN_URL, JSON.stringify({ user, pwd }));
  return response;
};

export default login;
