export default function putIndexIntoFiles(files) {
  return files.reduce(
    (acc, file, index) => {
      const isFileClass = file instanceof File;

      if (isFileClass) {
        const indexedFileName = `[${index}]${file.name}`;
        const indexedFile = new File([file], indexedFileName, {
          type: file.type,
        });
        acc[0].push(indexedFile);
      } else {
        const fileObjectWithNewIndex = { ...file, orderPosition: index };
        acc[1].push(fileObjectWithNewIndex);
      }

      return acc;
    },
    [[], []]
  );
}
