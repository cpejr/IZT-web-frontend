import { Select } from 'antd';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  .ant-select-selector {
    border-color: #9f9f9f !important;
  }

  .ant-select-selection-placeholder {
    color: #9f9f9f;
  }
`;

const errorState = css`
  border: 2px solid red;
  border-radius: 6px;
`;

export const StyledSelect = styled(Select)`
  flex-grow: 1;
  width: 200px;

  ${({ error }) => (error ? errorState : '')}
`;

export const ErrorMessage = styled.p`
  font-weight: 700;
  color: red;
`;
