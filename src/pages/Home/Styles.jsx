/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { Colors, Fonts } from '../../variables';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  width: 100%;
  height: 100%;
`;

export const AboutUs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 90%;
  height: 90%;
  margin-left: 10%;
  margin-right: 10%;
  margin-bottom: 1%;
`;

export const OurHistoryTitle = styled.h1`
  color: black;
  font-family: ${Fonts.montserrat};
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
  color: black;
  font-family: ${Fonts.montserrat};
  font-weight: 400;
  font-size: 20px;
  margin-bottom: 3%;

  @media (max-width: 1100px) {
    flex-wrap: wrap;
  }

  @media (max-width: 485px) {
    font-size: 18px;
  }

  @media (max-width: 410px) {
    font-size: 16px;
  }
`;

export const Picture = styled.img`
  width: 466px;
  height: 271px;
  left: 834px;
  top: 45px;
  object-fit: scale-down;
  margin-left: 2%;
`;
