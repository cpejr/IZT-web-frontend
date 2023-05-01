import axios from 'axios';

import useAuthStore from '../../../stores/auth';
import { ERROR_CODES, ERROR_NAMES } from '../../../utils/constants';
import { removeIsLoggedIn } from '../../../utils/isLoggedIn';
import { refresh } from '../publicEndpoints/endpoints';

const BASE_URL = `${import.meta.env.VITE_BACKEND_URL}/api`;

const privateApi = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

privateApi.interceptors.request.use(
  (config) => {
    const { auth } = useAuthStore.getState();
    if (!config.headers.Authorization && auth?.accessToken) {
      // eslint-disable-next-line no-param-reassign
      config.headers.Authorization = `Bearer ${auth.accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

privateApi.interceptors.response.use(
  (response) => response,
  async (error) => {
    const prevRequest = error?.config;
    const isForbiddenError =
      error?.response?.data?.httpCode === ERROR_CODES.FORBIDDEN &&
      error?.response?.data?.name === ERROR_NAMES.FORBIDDEN;

    try {
      // If is not a forbidden error or if the request was already sended
      if (!isForbiddenError || prevRequest?.sent) return Promise.reject(error);

      const { accessToken } = await refresh();

      prevRequest.sent = true;
      prevRequest.headers.Authorization = `Bearer ${accessToken}`;
    } catch (err) {
      const isUnauthorizedError =
        err?.response?.data?.httpCode === ERROR_CODES.UNAUTHORIZED &&
        err?.response?.data?.name === ERROR_NAMES.UNAUTHORIZED;

      if (isUnauthorizedError) {
        // Logout
        const { clearAuth } = useAuthStore.getState();
        clearAuth();
        removeIsLoggedIn();
      }

      return Promise.reject(err);
    }

    return privateApi(prevRequest);
  }
);

export default privateApi;
