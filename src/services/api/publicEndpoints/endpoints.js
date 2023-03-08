import publicApi from './instance';

export const login = async (credentials) => {
  const { data } = await publicApi.post('/login', credentials);

  return data;
};

export const logout = async () => {
  const { data } = await publicApi.get('/logout');

  return data;
};

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
