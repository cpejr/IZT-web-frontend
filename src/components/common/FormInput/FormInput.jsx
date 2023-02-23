/* eslint-disable react/jsx-props-no-spreading */
import { Container, Label, Input, ErrorMessage } from './Styles';

export default function FormInput({
  name,
  label,
  placeholder,
  errors,
  register,
}) {
  const errorMessage = errors?.[name]?.message;
  return (
    <Container>
      <Label htmlFor={name}>{label}</Label>
      <Input
        id={name}
        error={errorMessage}
        placeholder={placeholder}
        {...register(name)}
      />
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Container>
  );
}
