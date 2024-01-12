import { useRef } from 'react';

import { EditOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

import numToMegaBytes from '../../../utils/numToMegaBytes';
import { UpdateButton } from './Styles';

export default function UpdateFileButton({
  index,
  updateFn,
  allowedMimeTypes,
  sizeLimitInMB,
  color = 'white',
}) {
  const fileInputRef = useRef(null);

  return (
    <UpdateButton
      color={color}
      type="button"
      onClick={() => fileInputRef.current.click()}
    >
      <EditOutlined style={{ fontSize: '1.5em' }} />
      <input
        type="file"
        accept={allowedMimeTypes}
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={(e) => {
          const file = e.target.files[0];
          const sizeLimit = numToMegaBytes(sizeLimitInMB);

          if (file.size > sizeLimit) {
            alert('Limite excedido');
          } else {
            updateFn(index, { file });
          }
        }}
      />
    </UpdateButton>
  );
}

UpdateFileButton.defaultProps = {
  color: 'white',
};
UpdateFileButton.propTypes = {
  index: PropTypes.number.isRequired,
  updateFn: PropTypes.func.isRequired,
  allowedMimeTypes: PropTypes.string.isRequired,
  sizeLimitInMB: PropTypes.number.isRequired,
  color: PropTypes.string,
};
