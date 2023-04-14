import { CloseCircleOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

import { RemoveButton } from './Styles';

export default function RemoveFileButton({ index, removeFn, color }) {
  return (
    <RemoveButton type="button" color={color} onClick={() => removeFn(index)}>
      <CloseCircleOutlined style={{ fontSize: '1.4em' }} />
    </RemoveButton>
  );
}

RemoveFileButton.propTypes = {
  index: PropTypes.number.isRequired,
  removeFn: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
};
