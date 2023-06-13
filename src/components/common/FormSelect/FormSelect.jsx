import { Empty } from 'antd';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';

import { Container, ErrorMessage, Label, StyledSelect } from './Styles';

export default function FormSelect({
  data,
  name,
  control,
  errors,
  isBudget,
  isProfile,
  isRegister,
  subtitle,
  ...props
}) {
  const errorMessage = errors?.[name]?.message;

  return (
    <Container
      error={errorMessage ? 1 : 0}
      isBudget={isBudget}
      isProfile={isProfile}
      isRegister={isRegister}
    >
      <Label htmlFor={name}>{subtitle}</Label>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, ref, value: currValue } }) => (
          <StyledSelect
            listHeight={120}
            onChange={onChange}
            ref={ref}
            value={currValue}
            notFoundContent={<Empty description={false} />}
            {...props}
          >
            {data.map(({ label, value }) => (
              <StyledSelect.Option key={value} value={value}>
                {label}
              </StyledSelect.Option>
            ))}
          </StyledSelect>
        )}
      />
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </Container>
  );
}

FormSelect.defaultProps = {
  data: [],
  isBudget: false,
  isProfile: false,
  isRegister: false,
  subtitle: '',
};
FormSelect.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.array,
  control: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  isBudget: PropTypes.bool,
  isProfile: PropTypes.bool,
  isRegister: PropTypes.bool,
  subtitle: PropTypes.string,
};
