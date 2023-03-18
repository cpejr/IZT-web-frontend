import privateApi from './instance';

export const getUsers = async (filters = {}) => {
  const { data } = await privateApi.get('/users', { params: filters });

  return data;
};

export const updateUser = async ({ id, newUserData }) => {
  const { data } = await privateApi.put(`/users/${id}`, newUserData);

  return data;
};

export const deleteUser = async (id) => {
  const { data } = await privateApi.delete(`/users/${id}`);

  return data;
};

export const createCategory = async (newCategory) => {
  const { data } = await privateApi.post('/categories', newCategory);

  return data;
};

export const createProduct = async (newProduct) => {
  const { data } = await privateApi.post('/products', newProduct);

  return data;
};

export const updateCategory = async ({ id, newCategoryData }) => {
  const data = await privateApi.put(`/categories/${id}`, newCategoryData);

  return data;
};
