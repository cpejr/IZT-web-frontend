import { useState } from 'react';

import PropTypes from 'prop-types';

import { Container, Select, ErrorMessage } from './Styles';

export default function RegisterSelect({
  name,
  label,
  labelStyle,
  errors,
  errorStyle,
  register,
  placeholder,
  data,
  selected,
  setSelected,
  ...props
}) {
  const [query, setQuery] = useState('');

  const filteredPeople =
    query === ''
      ? data
      : data.filter((person) =>
          person.name
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        );
  const errorMessage = errors?.[name]?.message;
  return (
    <Container value={selected} onChange={setSelected}>
      {/* <Container.Input
        className="w-full outline-none border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
        displayValue={(place) => place.name}
        onChange={(event) => setQuery(event.target.value)}
      /> */}
      <Select id={name} error={!!errorMessage} {...register(name)} {...props}>
        <option value="" disabled selected>
          {placeholder}
        </option>
        <option value="hurr">Durr</option>
      </Select>
      {errorMessage && (
        <ErrorMessage style={errorStyle}>{errorMessage}</ErrorMessage>
      )}
    </Container>
  );
}

RegisterSelect.defaultProps = {
  labelStyle: {},
  errorStyle: {},
};

RegisterSelect.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  labelStyle: PropTypes.object,
  errorStyle: PropTypes.object,
  errors: PropTypes.object.isRequired,
  register: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  selected: PropTypes.string.isRequired,
  setSelected: PropTypes.string.isRequired,
};
