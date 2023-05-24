import React, { useState } from 'react';

import PropTypes from 'prop-types';

import { Container, Select, ErrorMessage, Label } from './Styles';

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

  const filteredPlace =
    query === ''
      ? data
      : data.filter((place) =>
          place.name
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        );
  const errorMessage = errors?.[name]?.message;
  return (
    <Container>
      <Label htmlFor={name} style={labelStyle}>
        {label}
      </Label>
      <Select
        id={name}
        error={!!errorMessage}
        {...register(name)}
        {...props}
        value={selected}
        onChange={((event) => setQuery(event.target.value), setSelected())}
      >
        {filteredPlace?.map((place) => (
          <option
            key={place.isoCode}
            displayValue={place.name}
            onChange={(event) => setQuery(event.target.value)}
            value={place}
          >
            {place.name}
          </option>
        ))}
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
