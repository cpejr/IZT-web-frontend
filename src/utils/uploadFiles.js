export default function uploadFiles({ uploadFn, files }) {
  const requests = files?.map((file) => {
    if (!(file instanceof File)) return file;

    const formData = new FormData();
    formData.append('file', file);

    return uploadFn(formData);
  });

  return Promise.all(requests);
}
