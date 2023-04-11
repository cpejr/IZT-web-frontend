import { Select } from 'antd';
import styled from 'styled-components';

export const Container = styled.div`
  .ant-select-selector {
    border-color: #9f9f9f !important;
  }

  .ant-select-selection-placeholder {
    color: #9f9f9f;
  }
`;

export const StyledSelect = styled(Select)`
  flex-grow: 1;
  width: 200px;
`;
