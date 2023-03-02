/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 100%;
  height: 100%;
  padding-top: 10px;
  max-width: 1440px;
  align-items: center;
  justify-content: center;
`;

export const AboutUs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 90%;
  height: auto;
  margin-top: 2%;
  margin-left: 10%;
  margin-right: 10%;
  margin-bottom: 1%;

  @media (min-width: 1440px) {
    margin-left: 0;
    margin-right: 0;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const OurHistoryTitle = styled.h1`
  color: black;
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-weight: 600;
  font-style: normal;
  font-size: 36px;
  margin-bottom: 2%;

  @media (max-width: 485px) {
    font-size: 30px;
  }

  @media (max-width: 410px) {
    font-size: 25px;
  }

  @media (max-width: 337px) {
    font-size: 20px;
  }
`;

export const OurHistory = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: black;
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  margin-bottom: 3%;

  @media (max-width: 1100px) {
    flex-wrap: wrap;
  }

  @media (max-width: 485px) {
    font-size: 18px;
  }

  @media (max-width: 410px) {
    font-size: 14px;
  }
`;

export const Picture = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 466px;
  height: auto;
  left: 834px;
  top: 45px;
  max-width: 100%;
  object-fit: scale-down;
  margin-left: 1%;
  margin-right: 1%;

  @media (max-width: 1100px) {
    margin-top: 2%;
    margin-bottom: 2%;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 90%;
  height: auto;

  margin-bottom: 2%;
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
