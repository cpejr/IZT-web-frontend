import useVideoStore from '../../../stores/video';
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
  const { data } = await privateApi.put(`/categories/${_id}`, newCategoryData);

  return data;
};

const mockData = {
  0: {
    _id: 0,
    name: 'Treinamento em Retificação Centerless',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed odio eu enim gravida varius quis non orci. Curabitur sed placerat sem, eu faucibus diam. Fusce ut nulla sed sapien.',
    chapters: [
      {
        name: 'Introdução',
        _id: 0,
        videos: [
          {
            _id: 0,
            name: '4:44 by Jay Z',
            src: 'https://www.youtube.com/watch?v=8pIhrMIsPAE&list=PL_QxeANzQhstL3mA0hoyFV7HsbA7yx6ie&index=2',
            description: '4:44 by Jay Z',
            duration: '3:33',
          },
          {
            _id: 1,
            name: 'PRIDE.',
            src: 'https://www.youtube.com/watch?v=IN0CAapgP0E',
            description: 'PRIDE. by Kendrick Lamar',
            duration: '5:43',
          },
          {
            _id: 2,
            name: 'Money trees',
            src: 'https://www.youtube.com/watch?v=smqhSl0u_sI',
            description: 'Money trees by Kendrick Lamar',
            duration: '3:10',
          },
          {
            _id: 3,
            name: 'Alright',
            src: 'https://www.youtube.com/watch?v=Z-48u_uWMHY',
            description: 'Alright by Kendrick Lamar',
            duration: '7:43',
          },
        ],
      },
      {
        name: 'Capítulo 1',
        _id: 1,
        videos: [
          {
            _id: 4,
            name: '4:44 by Jay Z',
            src: 'https://www.youtube.com/watch?v=8pIhrMIsPAE&list=PL_QxeANzQhstL3mA0hoyFV7HsbA7yx6ie&index=2',
            description: '4:44 by Jay Z',
            duration: '3:33',
          },
          {
            _id: 5,
            name: 'PRIDE.',
            src: 'https://www.youtube.com/watch?v=IN0CAapgP0E',
            description: 'PRIDE. by Kendrick Lamar',
            duration: '5:43',
          },
          {
            _id: 6,
            name: 'Money trees',
            src: 'https://www.youtube.com/watch?v=smqhSl0u_sI',
            description: 'Money trees by Kendrick Lamar',
            duration: '3:10',
          },
          {
            _id: 7,
            name: 'Alright',
            src: 'https://www.youtube.com/watch?v=Z-48u_uWMHY',
            description: 'Alright by Kendrick Lamar',
            duration: '7:43',
          },
        ],
      },
      {
        name: 'Capítulo 2',
        _id: 2,
        videos: [
          {
            _id: 8,
            name: '4:44 by Jay Z',
            src: 'https://www.youtube.com/watch?v=8pIhrMIsPAE&list=PL_QxeANzQhstL3mA0hoyFV7HsbA7yx6ie&index=2',
            description: '4:44 by Jay Z',
            duration: '3:33',
          },
          {
            _id: 9,
            name: 'PRIDE.',
            src: 'https://www.youtube.com/watch?v=IN0CAapgP0E',
            description: 'PRIDE. by Kendrick Lamar',
            duration: '5:43',
          },
          {
            _id: 10,
            name: 'Money trees',
            src: 'https://www.youtube.com/watch?v=smqhSl0u_sI',
            description: 'Money trees by Kendrick Lamar',
            duration: '3:10',
          },
          {
            _id: 11,
            name: 'Alright',
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
  // const { data } = await privateApi.get(`/courses/${_id}`);
  const { data } = await promise(_id);

  setState(data?.chapters);
  return data;
};
