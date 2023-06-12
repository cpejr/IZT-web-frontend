import { Select } from 'antd';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  .ant-select-selector {
    border: 0.2rem solid ${(props) => (props.error ? 'red' : '#9f9f9f ')} !important;
    margin: 0 !important;
  }

  .ant-select-selection-placeholder {
    color: #9f9f9f;
  }
`;

export const StyledSelect = styled(Select)`
  flex-grow: 1;
  width: 100%;
`;

export const ErrorMessage = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  color: red;
`;
