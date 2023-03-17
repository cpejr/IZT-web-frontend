import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import InputMask from 'react-input-mask';
import { Container, Label, ErrorMessage } from './Styles';

export default function FormMask({
  name,
  label,
  defaultValue,
  placeholder,
  errors,
  control,
  mask,
}) {
  const errorMessage = errors?.[name]?.message;
  return (
    <Container error={errorMessage}>
      <Label htmlFor={name}>{label}</Label>
      <Controller
        control={control}
        name={name}
        defaultValue={defaultValue}
        render={({ field }) => (
          <InputMask placeholder={placeholder} mask={mask} {...field} />
        )}
      />
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Container>
  );
}

FormMask.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  defaultValue: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  errors: PropTypes.object.isRequired,
  control: PropTypes.object.isRequired,
  mask: PropTypes.string.isRequired,
};
