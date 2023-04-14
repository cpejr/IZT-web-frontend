import { useRef } from 'react';

import PropTypes from 'prop-types';
import { HiPlusSm } from 'react-icons/hi';
import { toast } from 'react-toastify';

import numToMegaBytes from '../../../utils/numToMegaBytes';
import { AddButton } from './Styles';

export default function AddFileButton({
  label,
  appendFn,
  allowedMimeTypes,
  sizeLimitInMB,
  color = 'white',
  ...props
}) {
  const fileInputRef = useRef(null);

  return (
    <AddButton
      type="button"
      onClick={() => fileInputRef.current.click()}
      color={color}
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
            toast.error(`Limite de ${sizeLimitInMB} MB excedido`);
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

AddFileButton.defaultProps = {
  color: 'white',
};

AddFileButton.propTypes = {
  color: PropTypes.string,
  label: PropTypes.string.isRequired,
  appendFn: PropTypes.func.isRequired,
  allowedMimeTypes: PropTypes.string.isRequired,
  sizeLimitInMB: PropTypes.number.isRequired,
};
