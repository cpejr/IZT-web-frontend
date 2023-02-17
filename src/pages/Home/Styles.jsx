/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { Fonts } from '../../variables';

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
  justify-content: center;
  color: black;
  font-family: ${Fonts.montserrat};
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
    font-size: 16px;
  }
`;

export const Picture = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 466px;
  height: 271px;
  left: 834px;
  top: 45px;
  max-width: 100%;
  object-fit: scale-down;
  margin-left: 1%;
  margin-right: 1%;
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 90%;
  height: 95%;
`;

export const SideCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-family: ${Fonts.montserrat};
  font-size: 20px;
  font-weight: 700;

  width: 470px;
  height: 570px;
  background-color: white;
  border-top: 230px solid ${Colors.gray[1]};
  box-shadow: 0 0 8px 8px ${Colors.gray[2]};
`;

export const MiddleCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 2;

  font-family: ${Fonts.montserrat};
  font-size: 24px;
  font-weight: 700;

  width: 460px;
  height: 580px;
  background-color: white;
  border-top: 230px solid ${Colors.gray[1]};
  box-shadow: 0 0 8px 8px ${Colors.gray[2]};
`;

export const CardTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-family: ${Fonts.montserrat};
  font-size: 24px;
  font-weight: 700;

  width: 77%;

  margin-bottom: 70%;
`;

export const CardText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 77%;

  font-family: ${Fonts.montserrat};
  font-size: 18px;
  font-weight: 400;

  margin-bottom: 80%;
`;
