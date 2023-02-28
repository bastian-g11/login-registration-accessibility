import apiClient from '../apiClient';

const LOGIN_URL = '/login';

const login = ({ user, pwd }) => {
  const response = apiClient.post(LOGIN_URL, JSON.stringify({ user, pwd }));
  return response;
};

export default login;
