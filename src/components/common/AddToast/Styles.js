/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';

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
