import { Select } from 'antd';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  .ant-select-selector {
    border-color: ${(props) => (props.error ? 'red' : '#9f9f9f ')} !important;
  }

  .ant-select-selection-placeholder {
    color: #9f9f9f;
  }
`;

export const StyledSelect = styled(Select)`
  flex-grow: 1;
  width: 100%;
  height: auto;
`;

export const ErrorMessage = styled.p`
  font-weight: 700;
  color: red;
`;
