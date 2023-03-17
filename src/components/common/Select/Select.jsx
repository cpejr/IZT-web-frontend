/* eslint-disable no-underscore-dangle */
import PropTypes from 'prop-types';
import { useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { Container, Selected, Options, Option } from './Styles';

export default function Select({ data, standart }) {
  const [selected, setSelected] = useState(standart);
  const [openOptions, setOpenOptions] = useState(false);
  return (
    <Container>
      <Selected onClick={() => setOpenOptions(!openOptions)}>
        <p>{selected}</p>
        <MdKeyboardArrowDown size={25} />
      </Selected>
      <Options show={openOptions}>
        {data?.map((item) => (
          <Option key={item._id} onClick={() => setSelected(item.name)}>
            <p>{item.name}</p>
          </Option>
        ))}
      </Options>
    </Container>
  );
}

Select.defaultProps = {
  data: [],
};

Select.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.array,
  standart: PropTypes.string.isRequired,
};
