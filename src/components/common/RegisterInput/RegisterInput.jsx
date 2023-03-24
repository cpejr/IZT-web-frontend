import PropTypes from 'prop-types';

import { Container, Label, Input, ErrorMessage } from './Styles';

export default function RegisterInput({
  name,
  label,
  errors,
  register,
  ...props
}) {
  const errorMessage = errors?.[name]?.message;
  return (
    <Container>
      <Label htmlFor={name}>{label}</Label>
      <Input id={name} error={!!errorMessage} {...register(name)} {...props} />
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Container>
  );
}

RegisterInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  errors: PropTypes.object.isRequired,
  register: PropTypes.func.isRequired,
};
