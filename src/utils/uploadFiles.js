export default function uploadFiles({ uploadFn, files }) {
  const requests = files?.map((file) =>
    file instanceof File ? uploadFn(file) : file
  );

  return Promise.all(requests);
}
