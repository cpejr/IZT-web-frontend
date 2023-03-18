/* eslint-disable no-underscore-dangle */
import PropTypes from 'prop-types';
import { useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { Container, Selected, Options, Option } from './Styles';

export default function Select({ data, getValue, maxWidth, standart }) {
  const [selected, setSelected] = useState(standart);
  const [openOptions, setOpenOptions] = useState(false);

  async function handleSelection(item) {
    setSelected(Object.keys(item).length ? item.name : standart);
    setOpenOptions(false);
    getValue(item);
  }

  return (
    <Container maxWidth={maxWidth}>
      <Selected onClick={() => setOpenOptions(!openOptions)}>
        <p>{selected}</p>
        <MdKeyboardArrowDown size={25} />
      </Selected>
      <Options show={openOptions}>
        <Option
          key="001"
          onClick={() => handleSelection({})}
          isSelected={selected === standart}
        >
          <p>{standart}</p>
        </Option>
        {data?.map((item) => (
          <Option
            key={item._id}
            onClick={() => handleSelection(item)}
            isSelected={selected === item.name}
          >
            <p>{item.name}</p>
          </Option>
        ))}
      </Options>
    </Container>
  );
}

Select.defaultProps = {
  data: [],
  maxWidth: '250px',
};

Select.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.array,
  standart: PropTypes.string.isRequired,
  getValue: PropTypes.func.isRequired,
  maxWidth: PropTypes.string,
};
