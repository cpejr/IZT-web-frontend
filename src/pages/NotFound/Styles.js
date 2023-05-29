import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30%;

  width: 100vw;
  margin: 7rem auto;

  margin-right: auto;
  margin-left: auto;

  @media screen and (min-width: 1440px) {
    width: 144rem;
    padding-left: 10%;
  }

  @media screen and (max-width: 1024px) {
    position: static;
    align-items: center;
    justify-content: center;
    gap: 1vh;

    height: 100vh;
    width: 90vw;
  }
`;

export const Title = styled.h1`
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-weight: bold;
  font-size: 20vw;
  text-transform: uppercase;

  color: #af0c0c;
  @media screen and (min-width: 1440px) {
    font-size: 25.6rem;
  }

  @media screen and (max-width: 1024px) {
    font-size: 40vw;
    text-align: center;

    width: 100%;
  }
`;

export const Subtitle = styled.p`
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-weight: 500;
  font-size: 6vw;

  color: #123645;
  @media screen and (min-width: 1440px) {
    font-size: 9.6rem;
  }

  @media screen and (max-width: 1024px) {
    font-size: 10vw;
    text-align: center;

    width: 100%;
  }
`;

export const Description = styled.h3`
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-weight: 500;
  font-size: 2.3vw;

  color: #000000;

  @media screen and (min-width: 1440px) {
    font-size: 3.2rem;
  }

  @media screen and (max-width: 1024px) {
    font-size: 5vw;
    text-align: center;

    width: 100%;
  }
`;
