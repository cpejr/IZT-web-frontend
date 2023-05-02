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
            title: 'TOTK trailer',
            src: 'https://youtu.be/uHGShqcAHlQ',
            description: 'Trailer do futuro goty',
            duration: '3:33',
          },
          {
            _id: 1,
            title: 'PRIDE.',
            src: 'https://youtu.be/A5AV5HAKjh0',
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
  // const { data } = await privateApi.get(`/courses/${_id}`);
  const { data } = await promise(_id);

  setState(data?.chapters);
  return data;
};

export const updateProduct = async ({ _id, newProductData }) => {
  const data = await privateApi.put(`/products/${_id}`, newProductData);

  return data;
};

export const getFiles = async (fileIds) => {
  const responses = await Promise.all(
    fileIds.map((fileId) =>
      privateApi.get(`/files/${fileId}`, { responseType: 'blob' })
    )
  );
  const data = responses.map((res) => {
    const blob = res.data;
    const fileName = res.headers['content-disposition'].match(/"(.*?)"/)[0];

    const file = new File([blob], fileName, { type: blob.type });
    return file;
  });

  return data;
};
