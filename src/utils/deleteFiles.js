export default function deleteFiles({ deleteFn, originalFiles, newFiles }) {
  const filesToDelete = originalFiles?.filter(
    (file) => !newFiles?.map(({ key }) => key)?.includes(file.key)
  );
  const requests = filesToDelete?.map(({ key }) => deleteFn(key));

  return Promise.all(requests);
}
