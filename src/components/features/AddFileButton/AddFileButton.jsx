import { useRef } from 'react';

import PropTypes from 'prop-types';
import { HiPlusSm } from 'react-icons/hi';

import numToMegaBytes from '../../../utils/numToMegaBytes';
import { AddButton } from './Styles';

export default function AddFileButton({
  label,
  appendFn,
  allowedMimeTypes,
  sizeLimitInMB,
  ...props
}) {
  const fileInputRef = useRef(null);

  return (
    <AddButton
      type="button"
      onClick={() => fileInputRef.current.click()}
      {...props}
    >
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
            appendFn({ file });
          }
        }}
      />
      <HiPlusSm size={25} />
      {label}
    </AddButton>
  );
}

AddFileButton.propTypes = {
  label: PropTypes.string.isRequired,
  appendFn: PropTypes.func.isRequired,
  allowedMimeTypes: PropTypes.string.isRequired,
  sizeLimitInMB: PropTypes.number.isRequired,
};
