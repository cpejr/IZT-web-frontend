/* eslint-disable import/prefer-default-export */
import { ToastContainer } from 'react-toastify';
import styled from 'styled-components';

export const StyledContainer = styled(ToastContainer)`
  // https://styled-components.com/docs/faqs#how-can-i-override-styles-with-higher-specificity
  &&&.Toastify__toast-container {
  }
  .Toastify__toast {
    font-family: 'Montserrat';
    font-size: 16px;
  }
  .Toastify__toast-body {
  }
  .Toastify__progress-bar {
  }
`;
