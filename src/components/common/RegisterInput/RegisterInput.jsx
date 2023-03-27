import PropTypes from 'prop-types';

import { Container, Label, Input, ErrorMessage } from './Styles';

export default function RegisterInput({
  name,
  label,
  labelStyle = {},
  errors,
  errorStyle = {},
  register,
  ...props
}) {
  const errorMessage = errors?.[name]?.message;
  return (
    <Container>
      <Label htmlFor={name} style={labelStyle}>
        {label}
      </Label>
      <Input id={name} error={!!errorMessage} {...register(name)} {...props} />
      {errorMessage && (
        <ErrorMessage style={errorStyle}>{errorMessage}</ErrorMessage>
      )}
    </Container>
  );
}

RegisterInput.defaultProps = {
  labelStyle: {},
  errorStyle: {},
};

RegisterInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  labelStyle: PropTypes.object,
  errorStyle: PropTypes.object,
  errors: PropTypes.object.isRequired,
  register: PropTypes.func.isRequired,
};
