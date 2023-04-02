import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';

import { StyledSelect } from './Styles';

export default function FormSelect({ data, name, control, errors, ...props }) {
  return (
    <div>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, ref, value: currValue } }) => (
          <StyledSelect
            listHeight={120}
            onChange={onChange}
            ref={ref}
            value={currValue}
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
      <p>{errors?.category?.message}</p>
    </div>
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
