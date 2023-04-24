import { useEffect, useState } from 'react';

import { CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

import { DOCUMENTS_CONFIG } from '../../../utils/constants';
import RemoveFileButton from '../RemoveFileButton/RemoveFileButton';
import UpdateFileButton from '../UpdateFileButton/UpdateFileButton';
import { Arrows, Container, FileLink, StyledUpload } from './Styles';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload } from 'antd';
export default function DocumentFile({
  index,
  document,
  moveDocument,
  updateDocument,
  removeDocument,
  isLast,
  buttonColor,
}) {
  const props = {
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange({ file, fileList }) {
      if (file.status !== 'uploading') {
        console.log(file, fileList);
      }
    },
    defaultFileList: [
      {
        uid: '1',
        name: 'xxx.png',
        status: 'uploading',
        url: 'http://www.baidu.com/xxx.png',
        percent: 33,
      },
      {
        uid: '2',
        name: 'yyy.png',
        status: 'done',
        url: 'http://www.baidu.com/yyy.png',
      },
      {
        uid: '3',
        name: 'zzz.png',
        status: 'error',
        response: 'Server Error 500',
        // custom error message to show
        url: 'http://www.baidu.com/zzz.png',
      },
    ],
  };
  return (
    <StyledUpload {...props}>
      <Button icon={<UploadOutlined />}>Upload</Button>
    </StyledUpload>
  );
  // const [documentUrl, setDocumentUrl] = useState('');
  // useEffect(() => {
  //   const url = document.url || URL.createObjectURL(document);
  //   setDocumentUrl((prevUrl) => {
  //     if (prevUrl) URL.revokeObjectURL(prevUrl);
  //     return url;
  //   });
  //   return () => URL.revokeObjectURL(url);
  // }, [document]);
  // return (
  //   <Container>
  //     <Arrows>
  //       {!!index && (
  //         <button type="button" onClick={() => moveDocument(index, index - 1)}>
  //           <CaretUpOutlined />
  //         </button>
  //       )}
  //       {!isLast && (
  //         <button type="button" onClick={() => moveDocument(index, index + 1)}>
  //           <CaretDownOutlined />
  //         </button>
  //       )}
  //     </Arrows>
  //     <FileLink href={documentUrl} target="_blank" rel="noopener noreferrer">
  //       {document.name}
  //     </FileLink>
  //     <UpdateFileButton
  //       index={index}
  //       updateFn={updateDocument}
  //       allowedMimeTypes={DOCUMENTS_CONFIG.allowedMimeTypes.join(', ')}
  //       sizeLimitInMB={DOCUMENTS_CONFIG.sizeLimitInMB}
  //       color={buttonColor}
  //     />
  //     <RemoveFileButton
  //       index={index}
  //       removeFn={removeDocument}
  //       color={buttonColor}
  //     />
  //   </Container>
  // );
}

DocumentFile.propTypes = {
  index: PropTypes.number.isRequired,
  isLast: PropTypes.bool.isRequired,
  document: PropTypes.object.isRequired,
  moveDocument: PropTypes.func.isRequired,
  updateDocument: PropTypes.func.isRequired,
  removeDocument: PropTypes.func.isRequired,
  buttonColor: PropTypes.string.isRequired,
};
