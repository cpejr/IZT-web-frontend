/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 100%;
  height: 100%;
  max-width: 144rem;
  align-items: center;
  justify-content: center;
`;

export const CarouselContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1440px;
`;

export const AboutUs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 90%;
  height: auto;
  margin-top: 4%;
  margin-left: 10%;
  margin-right: 10%;
  margin-bottom: 4%;
`;

export const OurHistoryTitle = styled.h1`
  color: black;
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-weight: 600;
  font-style: normal;
  font-size: 3.6rem;
  margin-bottom: 3%;

  @media (max-width: 485px) {
    font-size: 3rem;
  }

  @media (max-width: 410px) {
    font-size: 2.5rem;
  }

  @media (max-width: 337px) {
    font-size: 2rem;
  }
`;

export const OurHistory = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: black;
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-weight: 400;
  font-size: 2rem;
  line-height: 2.4rem;
  margin-bottom: 3%;

  @media (max-width: 1100px) {
    flex-wrap: wrap;
  }

  @media (max-width: 485px) {
    font-size: 1.8rem;
  }

  @media (max-width: 410px) {
    font-size: 1.4rem;
  }
`;

export const Picture = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 46.6rem;
  height: auto;
  left: 83.4rem;
  top: 4.5rem;
  max-width: 100%;
  object-fit: scale-down;
  margin-left: 3%;

  @media (max-width: 1100px) {
    margin-top: 3%;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 90%;
  height: auto;

  margin-bottom: 4%;
  margin-top: 2%;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
  @media (min-width: 1440px) {
    margin-left: 5%;
    margin-right: 5%;
  }
`;

export const OuterDiv = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;
