import privateApi from './instance';

export const getUsers = async (filters = {}) => {
  const { data } = await privateApi.get('/users', { params: filters });

  return data;
};

export const updateUser = async ({ userId, newUserData }) => {
  const { data } = await privateApi.put(`/users/${userId}`, newUserData);

  return data;
};

export const deleteUser = async (userId) => {
  const { data } = await privateApi.delete(`/users/${userId}`);

  return data;
};

export const createCategory = async (newCategory) => {
  const { data } = await privateApi.post('/categories', newCategory);

  return data;
};
