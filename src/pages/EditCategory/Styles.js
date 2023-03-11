/* eslint-disable import/prefer-default-export */
/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;

  @media (max-width: 700px) {
    width: 95%;
  }
`;
