import { useEffect, useRef, useState } from 'react';

import PropTypes from 'prop-types';
import { HiPlusSm } from 'react-icons/hi';
import { toast } from 'react-toastify';

import { useDeleteFile, useUploadFile } from '../../../hooks/query/products';
import { DOCUMENTS_CONFIG } from '../../../utils/constants';
import { AddButton, StyledUpload } from './Styles';

export default function DocumentFile({
  fieldsDocuments,
  documentsLimit,
  appendDocument,
  removeDocument,
}) {
  const [fileList, setFileList] = useState(
    fieldsDocuments?.map(({ file }) => ({
      uid: file.key,
      ...file,
    }))
  );

  // In case the component unmouts before the file is saved, the request will be cancelled
  const abortController = useRef(null);
  useEffect(() => {
    abortController.current = new AbortController();
    return () => abortController.current?.abort();
  }, []);

  const { mutateAsync: upload } = useUploadFile();
  const { mutateAsync: deleteFile } = useDeleteFile();

  const handleUpload = async (options) => {
    const { onSuccess, onError, file: originalFile, onProgress } = options;

    const formData = new FormData();
    formData.append('file', originalFile);

    try {
      const { data: file } = await upload({
        file: formData,
        onProgress,
        signal: abortController.current?.signal,
      });
      appendDocument({ file });
      onSuccess({ ...file, uid: file.key });
    } catch (err) {
      toast.error('Erro ao salvar o arquivo');
      onError({ err });
    }
  };
  const handleChange = ({ fileList: newFileList }) =>
    setFileList(
      newFileList.map((file) => (file.response ? file.response : file))
    );
  const handleRemove = async (file) => {
    const key = file?.key;
    if (!key) return true;

    try {
      await deleteFile(key);
      const deletedFileIndex = fileList.findIndex(
        (fileFromList) => fileFromList.key === key
      );
      removeDocument(deletedFileIndex);
    } catch (err) {
      toast.error('Erro ao deletar o arquivo. Tente novamente mais tarde');
      return false;
    }

    return true;
  };

  return (
    <StyledUpload
      progress={{
        strokeWidth: 4,
        showInfo: false,
      }}
      fileList={fileList}
      customRequest={handleUpload}
      onChange={handleChange}
      onRemove={handleRemove}
      accept={DOCUMENTS_CONFIG.allowedMimeTypes.join(', ')}
    >
      {fileList?.length < documentsLimit && (
        <AddButton type="button" color="white">
          <HiPlusSm size={25} />
          Novo documento
        </AddButton>
      )}
    </StyledUpload>
  );
}

DocumentFile.propTypes = {
  fieldsDocuments: PropTypes.array.isRequired,
  documentsLimit: PropTypes.number.isRequired,
  appendDocument: PropTypes.func.isRequired,
  removeDocument: PropTypes.func.isRequired,
};
