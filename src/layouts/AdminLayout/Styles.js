/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  width: 100%;

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
