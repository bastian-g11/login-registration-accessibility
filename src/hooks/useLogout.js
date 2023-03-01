/* eslint-disable no-console */
import axiosClient from '../api/apiClient';
import useAuth from './useAuth';

const useLogout = () => {
  const { setAuth } = useAuth();
  const logout = async () => {
    setAuth({});
    try {
      await axiosClient('/logout', { withCredentials: true });
    } catch (error) {
      console.log('🚀 ~ file: useLogout.js:11 ~ logout ~ error:', error);
    }
  };

  return logout;
};

export default useLogout;
