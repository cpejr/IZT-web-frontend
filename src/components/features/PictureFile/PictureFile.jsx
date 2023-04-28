import { useEffect, useRef, useState } from 'react';

import { PlusOutlined } from '@ant-design/icons';
import { Modal } from 'antd';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import { useDeleteFile, useUploadFile } from '../../../hooks/query/products';
import { PICTURES_CONFIG } from '../../../utils/constants';
import { UploadButton, StyledUpload } from './Styles';

export default function PictureFile({
  fieldsPictures,
  picturesLimit,
  appendPicture,
  removePicture,
}) {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [fileList, setFileList] = useState(
    fieldsPictures?.map(({ file }) => ({
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
      appendPicture({ file });
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
      const deletedFileIndex = fileList?.findIndex(
        (fileFromList) => fileFromList.key === key
      );
      removePicture(deletedFileIndex);
    } catch (err) {
      toast.error('Erro ao deletar o arquivo. Tente novamente mais tarde');
      return false;
    }

    return true;
  };
  const handlePreview = async (file) => {
    setPreviewImage(file?.url);
    setPreviewOpen(true);
    setPreviewTitle(file?.name);
  };
  return (
    <>
      <StyledUpload
        listType="picture-card"
        locale={{ uploading: 'Salvando...' }} // Empty uploading message
        fileList={fileList}
        customRequest={handleUpload}
        onChange={handleChange}
        onRemove={handleRemove}
        onPreview={handlePreview}
        accept={PICTURES_CONFIG.allowedMimeTypes.join(', ')}
      >
        {fileList?.length < picturesLimit && (
          <UploadButton type="button">
            <PlusOutlined />
            <div>
              Salvar
              <br />
              Imagem
            </div>
          </UploadButton>
        )}
      </StyledUpload>
      <Modal
        open={previewOpen}
        title={previewTitle}
        footer={null}
        onCancel={() => setPreviewOpen(false)}
      >
        <img
          alt="example"
          style={{
            width: '100%',
          }}
          src={previewImage}
        />
      </Modal>
    </>
  );
}

PictureFile.propTypes = {
  fieldsPictures: PropTypes.array.isRequired,
  picturesLimit: PropTypes.number.isRequired,
  appendPicture: PropTypes.func.isRequired,
  removePicture: PropTypes.func.isRequired,
};
