import { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

import { PICTURES_CONFIG } from '../../../utils/constants';
import RemoveFileButton from '../RemoveFileButton/RemoveFileButton';
import UpdateFileButton from '../UpdateFileButton/UpdateFileButton';
import { Buttons, Container, Image } from './Styles';

export default function PictureFile({
  index,
  picture,
  updatePicture,
  removePicture,
  buttonColor,
}) {
  const [pictureUrl, setPictureUrl] = useState('');

  useEffect(() => {
    const url = picture.url || URL.createObjectURL(picture);
    setPictureUrl((prevUrl) => {
      if (prevUrl) URL.revokeObjectURL(prevUrl);
      return url;
    });

    return () => URL.revokeObjectURL(url);
  }, [picture]);

  return (
    <Container>
      <Image src={pictureUrl} alt="Imagem do carrossel" />
      <Buttons>
        <UpdateFileButton
          index={index}
          updateFn={updatePicture}
          allowedMimeTypes={PICTURES_CONFIG.allowedMimeTypes.join(', ')}
          sizeLimitInMB={PICTURES_CONFIG.sizeLimitInMB}
          color={buttonColor}
        />
        <RemoveFileButton
          index={index}
          removeFn={removePicture}
          color={buttonColor}
        />
      </Buttons>
    </Container>
  );
}

PictureFile.propTypes = {
  index: PropTypes.number.isRequired,
  picture: PropTypes.object.isRequired,
  updatePicture: PropTypes.func.isRequired,
  removePicture: PropTypes.func.isRequired,
  buttonColor: PropTypes.string.isRequired,
};
