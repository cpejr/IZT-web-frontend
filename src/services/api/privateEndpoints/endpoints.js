import privateApi from './instance';

export const getUsers = async (filters = {}) => {
  const { data } = await privateApi.get('/users', { params: filters });

  return data;
};

export const updateUser = async ({ _id, newUserData }) => {
  const { data } = await privateApi.put(`/users/${_id}`, newUserData);

  return data;
};

export const deleteUser = async (_id) => {
  const { data } = await privateApi.delete(`/users/${_id}`);

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

export const updateCategory = async ({ _id, newCategoryData }) => {
  const data = await privateApi.put(`/categories/${_id}`, newCategoryData);

  return data;
};
