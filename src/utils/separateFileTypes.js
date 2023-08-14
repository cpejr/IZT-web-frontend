export default function separateFileTypes(files) {
  return files.reduce(
    (acc, file) => {
      const isFileClass = file instanceof File;

      if (isFileClass) acc[1].push(file);
      else acc[0].push(file);

      return acc;
    },
    [[], []]
  );
}
