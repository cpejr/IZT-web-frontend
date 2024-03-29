/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';

import { Container, Label, Input, ErrorMessage } from './Styles';

export default function DataInput({ name, label, errors, register, ...props }) {
  const errorMessage = errors?.[name]?.message;

  return (
    <Container>
      <Label htmlFor={name}>{label}</Label>
      <Input id={name} error={!!errorMessage} {...register(name)} {...props} />
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Container>
  );
}

DataInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  errors: PropTypes.object.isRequired,
  register: PropTypes.func.isRequired,
};
