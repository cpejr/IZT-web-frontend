/* eslint-disable react/jsx-props-no-spreading */
import { Controller } from 'react-hook-form';
import InputMask from 'react-input-mask';
import { Container, Label, ErrorMessage } from './Styles';

export default function FormMask({
  name,
  label,
  defaultValue,
  errors,
  control,
  mask,
  placeholder,
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
