import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  width: 100%;
  height: auto;

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
