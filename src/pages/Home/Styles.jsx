/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { Colors, Fonts } from '../../variables';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Cards = styled.div`
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
`;

export const CardText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-family: ${Fonts.montserrat};
  font-size: 18px;
  font-weight: 400;
`;
