import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  font-size: 20px;
  @media (max-width: 1100px) {
    font-size: 18px;
  }
  @media (max-width: 750px) {
    font-size: 15px;
  }
  @media (max-width: 500px) {
    font-size: 10px;
  }
`;

export const UpperDiv = styled.div`
  width: 100%;
  padding: 10%;
  gap: 10%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 750px) {
    flex-direction: column;
    gap: 40px;
  }
`;

export const TextDiv = styled.div`
  width: 100%;
  font-family: ${(props) => props.theme.fonts.montserrat};
  h1 {
    font-size: 3.2em;
    font-weight: 700;

    @media (max-width: 750px) {
      text-align: center;
    }
  }
  p {
    font-size: 1.4em;
    font-weight: 500;
    text-align: center;
  }
`;
