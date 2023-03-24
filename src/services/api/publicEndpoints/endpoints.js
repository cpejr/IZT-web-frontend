import useAuthStore from '../../../stores/auth';
import { removeIsLoggedIn, setIsLoggedIn } from '../../../utils/isLoggedIn';
import publicApi from './instance';

export const login = async (credentials) => {
  const { setAuth } = useAuthStore.getState();
  const { data } = await publicApi.post('/login', credentials);

  setIsLoggedIn();
  setAuth(data.accessToken);
  return data;
};

export const logout = async () => {
  const { clearAuth } = useAuthStore.getState();
  await publicApi.post('/logout');

  removeIsLoggedIn();
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

export const getCategoryById = async (_id) => {
  const { data } = await publicApi.get(`/categories/${_id}`);

  return data;
};

export const getProducts = async (filters = {}) => {
  const { data } = await publicApi.get('/products', { params: filters });

  return data;
};

export const getProductById = async (_id) => {
  const { data } = await publicApi.get(`/products/${_id}`);

  return data;
};

export const createUser = async (newUser) => {
  const { data } = await publicApi.post('/users', newUser);

  return data;
};

export const sendProductBudget = async ({ productId, formInput }) => {
  const { data } = await publicApi.post(
    `/products/form-budget/${productId}`,
    formInput
  );

  return data;
};
