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
  const { data } = await api.post(`/users/fogot-password`, { email });

  return data;
};
export const redefinePassword = async ({ token, password }) => {
  const { data } = await api.post(`/users/redefine-password`, {
    token,
    password,
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
const mockData = {
  0: {
    _id: 0,
    title: 'Treinamento em Retificação Centerless',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed odio eu enim gravida varius quis non orci. Curabitur sed placerat sem, eu faucibus diam. Fusce ut nulla sed sapien.',
    chapters: [
      {
        title: 'Introdução',
        _id: 0,
        videos: [
          {
            _id: 0,
            title: '4:44 by Jay Z',
            src: 'https://www.youtube.com/watch?v=8pIhrMIsPAE&list=PL_QxeANzQhstL3mA0hoyFV7HsbA7yx6ie&index=2',
            description: '4:44 by Jay Z',
            duration: '3:33',
          },
          {
            _id: 1,
            title: 'PRIDE.',
            src: 'https://www.youtube.com/watch?v=IN0CAapgP0E',
            description: 'PRIDE. by Kendrick Lamar',
            duration: '5:43',
          },
          {
            _id: 2,
            title: 'Money trees',
            src: 'https://www.youtube.com/watch?v=smqhSl0u_sI',
            description: 'Money trees by Kendrick Lamar',
            duration: '3:10',
          },
          {
            _id: 3,
            title: 'Alright',
            src: 'https://www.youtube.com/watch?v=Z-48u_uWMHY',
            description: 'Alright by Kendrick Lamar',
            duration: '7:43',
          },
        ],
      },
      {
        title: 'Capítulo 1',
        _id: 1,
        videos: [
          {
            _id: 4,
            title: '4:44 by Jay Z',
            src: 'https://www.youtube.com/watch?v=8pIhrMIsPAE&list=PL_QxeANzQhstL3mA0hoyFV7HsbA7yx6ie&index=2',
            description: '4:44 by Jay Z',
            duration: '3:33',
          },
          {
            _id: 5,
            title: 'PRIDE.',
            src: 'https://www.youtube.com/watch?v=IN0CAapgP0E',
            description: 'PRIDE. by Kendrick Lamar',
            duration: '5:43',
          },
          {
            _id: 6,
            title: 'Money trees',
            src: 'https://www.youtube.com/watch?v=smqhSl0u_sI',
            description: 'Money trees by Kendrick Lamar',
            duration: '3:10',
          },
          {
            _id: 7,
            title: 'Alright',
            src: 'https://www.youtube.com/watch?v=Z-48u_uWMHY',
            description: 'Alright by Kendrick Lamar',
            duration: '7:43',
          },
        ],
      },
      {
        title: 'Capítulo 2',
        _id: 2,
        videos: [
          {
            _id: 8,
            title: '4:44 by Jay Z',
            src: 'https://www.youtube.com/watch?v=8pIhrMIsPAE&list=PL_QxeANzQhstL3mA0hoyFV7HsbA7yx6ie&index=2',
            description: '4:44 by Jay Z',
            duration: '3:33',
          },
          {
            _id: 9,
            title: 'PRIDE.',
            src: 'https://www.youtube.com/watch?v=IN0CAapgP0E',
            description: 'PRIDE. by Kendrick Lamar',
            duration: '5:43',
          },
          {
            _id: 10,
            title: 'Money trees',
            src: 'https://www.youtube.com/watch?v=smqhSl0u_sI',
            description: 'Money trees by Kendrick Lamar',
            duration: '3:10',
          },
          {
            _id: 11,
            title: 'Alright',
            src: 'https://www.youtube.com/watch?v=Z-48u_uWMHY',
            description: 'Alright by Kendrick Lamar',
            duration: '7:43',
          },
        ],
      },
    ],
  },
};

const promise = (_id) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: mockData[_id],
      });
    }, 1000);
  });
export const getCourseById = async (_id) => {
  const { setState } = useVideoStore.getState();
  // const { data } = await api.get(`/courses/${_id}`);
  const { data } = await promise(_id);

  setState(data?.chapters);
  return data;
};
