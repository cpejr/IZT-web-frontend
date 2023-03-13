import axios from 'axios';
import useAuthStore from '../../../stores/auth';

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
      error?.response?.data?.httpCode === 403 &&
      error?.response?.data?.name === 'Forbidden';

    // If is not a forbidden error or if the request was already sended
    if (!isForbiddenError || prevRequest?.sent) return Promise.reject(error);

    const { refresh } = useAuthStore.getState();
    const newAccessToken = await refresh();

    prevRequest.sent = true;
    prevRequest.headers.Authorization = `Bearer ${newAccessToken}`;

    return privateApi(prevRequest);
  }
);

export default privateApi;
