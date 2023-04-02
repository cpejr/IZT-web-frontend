import { Select } from 'antd';
import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const StyledSelect = styled(Select)`
  flex-grow: 1;
  width: 200px;

  .ant-select-selector:hover {
    border: 1px solid white;
  }
  /* max-width: 120px; */
`;
