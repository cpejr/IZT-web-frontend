/* eslint-disable no-param-reassign */
import { useState } from 'react';

import PropTypes from 'prop-types';
import { HiPlusSm } from 'react-icons/hi';
import { toast } from 'react-toastify';

import { DOCUMENTS_CONFIG } from '../../../utils/constants';
import numToMegaBytes from '../../../utils/numToMegaBytes';
import { AddButton, StyledUpload } from './Styles';

export default function DocumentFiles({ fields, append, remove }) {
  const [fileList, setFileList] = useState(
    fields?.map(({ file }) => ({
      uid: file.key,
      ...file,
    }))
  );
  const allowedMimeTypes = DOCUMENTS_CONFIG.allowedMimeTypes.join(', ');
  const isLesserThanLimit =
    fileList?.length < DOCUMENTS_CONFIG.filesQuantityLimit;

  const handleBeforeUpload = (file) => {
    const sizeLimit = DOCUMENTS_CONFIG.sizeLimitInMB;

    if (file.size <= numToMegaBytes(sizeLimit)) append({ file });
    else {
      toast.error(`O documento excedeu o limite de ${sizeLimit} MB`);
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

  return (
    <StyledUpload
      locale={{ uploadError: 'Erro' }}
      fileList={fileList}
      beforeUpload={handleBeforeUpload}
      onRemove={handleRemove}
      accept={allowedMimeTypes}
    >
      {isLesserThanLimit && (
        <AddButton type="button" color="white">
          <HiPlusSm size={25} />
          Novo documento
        </AddButton>
      )}
    </StyledUpload>
  );
}

DocumentFiles.propTypes = {
  fields: PropTypes.array.isRequired,
  append: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
};
