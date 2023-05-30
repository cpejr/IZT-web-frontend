import useAuthStore from '../../stores/auth';
import useVideoStore from '../../stores/video';
import { removeIsLoggedIn, setIsLoggedIn } from '../../utils/isLoggedIn';
import api from './instance';

// User sessions
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
export async function refresh() {
  const { setAuth } = useAuthStore.getState();
  const { data } = await api.get('/refresh');

  setAuth(data.accessToken);

  return data;
}

// Users
export const getUsers = async (filters = {}) => {
  const { data } = await api.get('/users', { params: filters });

  return data;
};
export const createUser = async (newUser) => {
  const { data } = await api.post('/users', newUser);

  return data;
};
export const verifyEmail = async (token) => {
  const { data } = await api.put(`/users/confirm-email/${token}`);

  return data;
};
export const updateUser = async ({ _id, newUserData }) => {
  const { data } = await api.put(`/users/${_id}`, newUserData);

  return data;
};
export const deleteUser = async (_id) => {
  const { data } = await api.delete(`/users/${_id}`);

  return data;
};
export const forgotPassword = async (email) => {
  const { data } = await api.post(`/users/forgot-password`, { email });

  return data;
};
export const redefinePassword = async ({ token, password }) => {
  const { data } = await api.put(`/users/forgot-password/${token}`, {
    newPassword: password,
  });

  return data;
};

// Contact forms
export const sendFormContact = async (formInput) => {
  const { data } = await api.post(`/forms-contact`, formInput);

  return data;
};

// Categories
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
export const updateCategory = async ({ _id, newCategoryData }) => {
  const { data } = await api.put(`/categories/${_id}`, newCategoryData);

  return data;
};
export const deleteCategory = async (_id) => {
  const { data } = await api.delete(`/categories/${_id}`);

  return data;
};

// Products
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
  const { data } = await api.post('/products', newProduct);

  return data;
};
export const updateProduct = async ({ _id, newProductData }) => {
  const data = await api.put(`/products/${_id}`, newProductData);

  return data;
};
export const deleteProduct = async (_id) => {
  const { data } = await api.delete(`/products/${_id}`);

  return data;
};
export const sendProductBudget = async ({ productId, formInput }) => {
  const { data } = await api.post(
    `/products/form-budget/${productId}`,
    formInput
  );

  return data;
};

// Courses
export const getCourseById = async ({ user, course }) => {
  const { setState } = useVideoStore.getState();
  const { data } = await api.get(`/user-courses/info/${user}/${course}`);

  setState(data);
  return data;
};

// User videos
export const getVideo = async (videoId) => {
  const { data } = await api.get(`/videos/${videoId}`);

  return data;
};

// User progress
export const saveVideoProgress = async ({ video, progress, isCompleted }) => {
  const { data } = await api.post(`/user-progresses`, {
    video,
    progress,
    isCompleted,
  });

  return data;
};
