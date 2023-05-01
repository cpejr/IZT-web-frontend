/* eslint-disable no-param-reassign */
import { useState } from 'react';

import { PlusOutlined } from '@ant-design/icons';
import { Modal } from 'antd';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import { PICTURES_CONFIG } from '../../../utils/constants';
import numToMegaBytes from '../../../utils/numToMegaBytes';
import { UploadButton, StyledUpload } from './Styles';

export default function PictureFiles({ fields, append, remove, isMobile }) {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [fileList, setFileList] = useState(
    fields?.map(({ file }) => ({
      uid: file.key,
      ...file,
    }))
  );
  const allowedMimeTypes = PICTURES_CONFIG.allowedMimeTypes.join(', ');
  const isLesserThanLimit =
    fileList?.length < PICTURES_CONFIG.filesQuantityLimit;

  const handleBeforeUpload = (file) => {
    const sizeLimit = PICTURES_CONFIG.sizeLimitInMB;

    if (file.size <= numToMegaBytes(sizeLimit)) append({ file });
    else {
      toast.error(`A foto excedeu o limite de ${sizeLimit} MB`);
      file.status = 'error';
    }

    file.url = URL.createObjectURL(file);
    setFileList((prevList) => [...prevList, file]);

    return false;
  };
  const handleRemove = (deletedFile) => {
    const filteredFileList = fileList?.filter((file, index) => {
      if (!(file.uid === deletedFile.uid)) return true;

      remove(index);
      return false;
    });
    setFileList(filteredFileList);

    URL.revokeObjectURL(deletedFile.url);
    return true;
  };
  const handlePreview = (file) => {
    setPreviewImage(file?.url);
    setPreviewOpen(true);
    setPreviewTitle(file?.name);
  };

  return (
    <>
      <StyledUpload
        listType="picture-card"
        locale={{ uploadError: 'Erro' }}
        fileList={fileList}
        beforeUpload={handleBeforeUpload}
        onRemove={handleRemove}
        onPreview={handlePreview}
        accept={allowedMimeTypes}
        isMobile={isMobile}
      >
        {isLesserThanLimit && (
          <UploadButton type="button" isMobile={isMobile}>
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
          alt="Imagem do produto"
          style={{
            width: '100%',
          }}
          src={previewImage}
        />
      </Modal>
    </>
  );
}

PictureFiles.defaultProps = {
  isMobile: false,
};

PictureFiles.propTypes = {
  fields: PropTypes.array.isRequired,
  append: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  isMobile: PropTypes.bool,
};
