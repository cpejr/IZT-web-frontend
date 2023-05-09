import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60vh;

  @media (max-width: 1070px) {
    height: 75vh;
  }

  @media (max-width: 700px) {
    margin-top: 0px;
    height: 90vh;
  }
`;

export const Title = styled.h1`
  width: 60%;
  text-align: center;
  padding-top: 50px;
  font-family: ${(props) => props.theme.fonts.montserrat};

  @media (max-width: 700px) {
    width: 80%;
    font-size: 18px;
  }
  @media (max-width: 400px) {
    font-size: 15px;
  }
`;
