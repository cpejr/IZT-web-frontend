import PropTypes from 'prop-types';

import { Container, Label, TextArea, ErrorMessage } from './Styles';

export default function FormsTextArea({
  name,
  label,
  placeholder,
  errors,
  register,
  ...props
}) {
  const errorMessage = errors?.[name]?.message;
  return (
    <Container>
      <Label htmlFor={name}>{label}</Label>
      <TextArea
        id={name}
        error={!!errorMessage}
        placeholder={placeholder}
        {...register(name)}
        {...props}
      />
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Container>
  );
}

FormsTextArea.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  errors: PropTypes.object.isRequired,
  register: PropTypes.func.isRequired,
};
