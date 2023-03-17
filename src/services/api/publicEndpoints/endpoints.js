import useAuthStore from '../../../stores/auth';
import publicApi from './instance';

export const login = async (credentials) => {
  const { setAuth } = useAuthStore.getState();
  const { data } = await publicApi.post('/login', credentials);

  localStorage.setItem('isLoggedIn', 'true');
  setAuth(data.accessToken);
  return data;
};

export const logout = async () => {
  const { clearAuth } = useAuthStore.getState();
  await publicApi.post('/logout');

  localStorage.removeItem('isLoggedIn');
  clearAuth();
};

export async function refresh() {
  const { setAuth } = useAuthStore.getState();
  const { data } = await publicApi.get('/refresh');

  setAuth(data.accessToken);

  return data;
}

export const getCategories = async (filters = {}) => {
  const { data } = await publicApi.get('/categories', { params: filters });

  return data;
};

export const getProducts = async (filters = {}) => {
  const { data } = await publicApi.get('/products', { params: filters });

  return data;
};

export const createUser = async (newUser) => {
  const { data } = await publicApi.post('/users', newUser);

  return data;
};
export const getFiles = async (filters = {}) => {
  const { data } = await publicApi.get('/files', { params: filters });

  return data;
};
