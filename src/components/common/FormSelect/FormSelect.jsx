import { Empty } from 'antd';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';

import { Container, ErrorMessage, StyledSelect } from './Styles';

export default function FormSelect({ data, name, control, errors, ...props }) {
  const errorMessage = errors?.[name]?.message;

  return (
    <Container error={errorMessage ? 1 : 0}>
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
                {/* <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                  {value.name}
                </span> */}
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
};
FormSelect.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.array,
  control: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};
