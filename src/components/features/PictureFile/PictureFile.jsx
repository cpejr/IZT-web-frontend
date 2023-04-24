import { useState } from 'react';

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

  const { mutateAsync: upload } = useUploadFile();
  const { mutateAsync: deleteFile } = useDeleteFile();

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
  const handleCancel = () => setPreviewOpen(false);
  const uploadImage = async (options) => {
    const { onSuccess, onError, file: originalFile, onProgress } = options;

    const formData = new FormData();
    formData.append('file', originalFile);

    try {
      const { data: file } = await upload({
        file: formData,
        onProgress,
      });
      appendPicture({ file });
      onSuccess({ ...file, uid: file.key });
    } catch (err) {
      toast.error('Erro ao salvar o arquivo');
      onError({ err });
    }
  };

  return (
    <>
      <StyledUpload
        listType="picture-card"
        locale={{ uploading: 'Salvando...' }} // Empty uploading message
        fileList={fileList}
        onChange={handleChange}
        onRemove={handleRemove}
        onPreview={handlePreview}
        customRequest={uploadImage}
        accept={PICTURES_CONFIG.allowedMimeTypes.join(', ')}
      >
        {fileList.length < picturesLimit && (
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
        onCancel={handleCancel}
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
