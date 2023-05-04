import useAuthStore from '../../stores/auth';
import { removeIsLoggedIn, setIsLoggedIn } from '../../utils/isLoggedIn';
import api from './instance';

export const login = async (credentials) => {
  const { setAuth } = useAuthStore.getState();
  const { data } = await api.post('/login', credentials);

  setIsLoggedIn();
  setAuth(data.accessToken);
  return data;
};
export const logout = async () => {
  const { clearAuth } = useAuthStore.getState();
  await api.post('/logout');

  removeIsLoggedIn();
  clearAuth();
};
export const refresh = async () => {
  const { setAuth } = useAuthStore.getState();
  const { data } = await api.get('/refresh');

  setAuth(data.accessToken);

  return data;
};

export const getUsers = async (filters = {}) => {
  const { data } = await api.get('/users', { params: filters });

  return data;
};
export const createUser = async (newUser) => {
  const { data } = await api.post('/users', newUser);

  return data;
};
export const updateUser = async ({ _id, updatedData }) => {
  const { data } = await api.put(`/users/${_id}`, updatedData);

  return data;
};
export const deleteUser = async (_id) => {
  const { data } = await api.delete(`/users/${_id}`);

  return data;
};

export const getCategories = async (filters = {}) => {
  const { data } = await api.get('/categories', { params: filters });

  return data;
};
export const getCategoryById = async (_id) => {
  const { data } = await api.get(`/categories/${_id}`);

  return data;
};
export const searchByNameCategories = async (name) => {
  const { data } = await api.get('/categories/search-by-name', {
    params: { name },
  });

  return data;
};
export const createCategory = async (newCategory) => {
  const { data } = await api.post('/categories', newCategory);

  return data;
};
export const updateCategory = async ({ _id, updatedData }) => {
  const { data } = await api.put(`/categories/${_id}`, updatedData);

  return data;
};

export const getProducts = async (filters = {}) => {
  const { data } = await api.get('/products', { params: filters });

  return data;
};
export const getProductById = async (_id) => {
  const { data } = await api.get(`/products/${_id}`);

  return data;
};
export const searchProductByName = async ({ name, category }) => {
  const { data } = await api.get('/products/search-by-name', {
    params: { name, category },
  });

  return data;
};
export const createProduct = async (newProduct) => {
  const { data } = await api.post('/products', newProduct, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return data;
};
export const updateProduct = async ({ _id, updatedData }) => {
  const { data } = await api.put(`/products/${_id}`, updatedData);

  return data;
};
export const sendProductBudget = async ({ productId, formInput }) => {
  const { data } = await api.post(
    `/products/form-budget/${productId}`,
    formInput
  );

  return data;
};
export const uploadFile = async (file) => {
  const { data } = await api.post(
    '/products/file',
    { file },
    {
      headers: {
        'Content-Type': 'multipart/form-data; charset=utf-8',
      },
    }
  );

  return data;
};
export const deleteFile = async (key) => {
  const { data } = await api.delete(
    `/products/file/${encodeURIComponent(key)}`
  );

  return data;
};

export const sendFormContact = async (formInput) => {
  const { data } = await api.post(`/forms-contact`, formInput);

  return data;
};
