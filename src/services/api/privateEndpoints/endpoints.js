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

export const updateCategory = async ({ _id, updatedData }) => {
  const { data } = await privateApi.put(`/categories/${_id}`, updatedData);

  return data;
};

export const updateProduct = async ({ _id, updatedData }) => {
  const { data } = await privateApi.put(`/products/${_id}`, updatedData);

  return data;
};

export const uploadFile = async (file) => {
  const { data } = await privateApi.post(
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
  const { data } = await privateApi.delete(
    `/products/file/${encodeURIComponent(key)}`
  );

  return data;
};
