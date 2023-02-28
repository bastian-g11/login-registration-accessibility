/* eslint-disable no-console */
import client from '../api/apiClient';
import useAuth from './useAuth';

const useRefreshToken = () => {
  const { setAuth } = useAuth();
  const refresh = async () => {
    const response = await client.get('/refresh', {
      // This setting allows us to send cookies with the request
      withCredentials: true,
    });

    setAuth((prevAuth) => {
      console.log(JSON.stringify(prevAuth));
      console.log(response.data.accessToken);
      return { ...prevAuth, accessToken: response.data.accessToken };
    });

    return response.data.accessToken;
  };

  return refresh;
};

export default useRefreshToken;
