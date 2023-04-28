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

export const updateProduct = async ({ _id, newProductData }) => {
  const data = await privateApi.put(`/products/${_id}`, newProductData);

  return data;
};

export const uploadFile = async ({ file, onProgress, signal }) => {
  const data = await privateApi.post('/products/file', file, {
    onUploadProgress: (event) => {
      const percent = Math.round((event.loaded * 100) / event.total);

      onProgress({ percent });
    },
    // In case the component unmouts before the file is saved, the request will be cancelled
    signal,
  });

  return data;
};

export const deleteFile = async (key) => {
  const data = await privateApi.delete(
    `/products/file/${encodeURIComponent(key)}`
  );

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
