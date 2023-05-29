import { CloseCircleOutlined, EditOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

import {
  Buttons,
  Container,
  Image,
  PictureContainer,
  RemoveButton,
} from './Styles';
// import { PickAvatar } from '../../common/PickAvatar/PickAvatar';

export default function AdminShowPictures({
  errors,
  register,
  picturesFieldArray,
  buttonColor,
}) {
  const {
    fields: fieldsPictures,
    remove: removePicture,
    update: updatePicture,
  } = picturesFieldArray;

  return (
    <Container>
      {fieldsPictures?.map(({ file: picture, id }, index) => {
        const name = `pictures.${index}.file`;
        const url = URL.createObjectURL(picture);
        return (
          <PictureContainer key={id}>
            <Image src={url} alt="carousel" />
            <p>{errors?.[name]?.message}</p>
            <Buttons>
              <label
                htmlFor={index}
                style={{
                  cursor: 'pointer',
                  color: { buttonColor },
                }}
              >
                <EditOutlined style={{ fontSize: '1.5em' }} />
                <input
                  id={index}
                  accept="image/jpeg, image/pjpeg, image/png, image/gif"
                  type="file"
                  style={{ display: 'none' }}
                  name={name}
                  onChange={(e) => {
                    const file = e.target.files[0];
                    updatePicture(index, { file });
                  }}
                />
              </label>
              <RemoveButton
                type="button"
                style={{
                  all: 'unset',
                  cursor: 'pointer',
                  color: { buttonColor },
                }}
                onClick={() => removePicture(index)}
              >
                <CloseCircleOutlined style={{ fontSize: '1.4em' }} />
              </RemoveButton>
            </Buttons>
          </PictureContainer>
        );
      })}
    </Container>
  );
}

AdminShowPictures.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  picturesFieldArray: PropTypes.object.isRequired,
};