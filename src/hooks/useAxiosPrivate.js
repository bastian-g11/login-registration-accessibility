// This hook will be used to attach the interceptors to the axios instance

import { useEffect } from 'react';
import { axiosPrivateClient } from '../api/apiClient';
import useRefreshToken from './useRefreshToken';
import useAuth from './useAuth';

const useAxiosPrivate = () => {
  const refresh = useRefreshToken();
  const { auth } = useAuth();

  /** Interceptors are as listeners, so we need to attach them,
   * but we also need to remove them
   */
  useEffect(() => {
    const requestIntercept = axiosPrivateClient.interceptors.request.use(
      // This is the initial request, if it doesn't have the token, we attach it. If it already has,
      // the response interceptor will handle that
      (config) => {
        const newConfig = config;
        if (!newConfig.headers.Authorization) {
          newConfig.headers.Authorization = `Bearer ${auth?.accessToken}`;
        }
        return newConfig;
      },
      (error) => {
        Promise.reject(error);
      }
    );

    const responseIntercept = axiosPrivateClient.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error?.config;
        // If the request is forbidden due to an expired token. Custom property sent is used to retry once (avoid endless loop)
        if (!prevRequest.sent) {
          prevRequest.sent = true;
          const newAccessToken = await refresh();
          prevRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          // We return the request with the new access token and we're doing the request again
          return axiosPrivateClient(prevRequest);
        }
        return Promise.reject(error);
      }
    );

    // We need to remove the interceptors, because they pile if we don't remove them
    return () => {
      axiosPrivateClient.interceptors.request.eject(requestIntercept);
      axiosPrivateClient.interceptors.response.eject(responseIntercept);
    };
  }, [auth, refresh]);

  return axiosPrivateClient;
};

export default useAxiosPrivate;
