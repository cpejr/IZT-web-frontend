/* eslint-disable import/prefer-default-export */
import styled, { css } from 'styled-components';
import { Colors, Fonts } from '../../../variables';

const isMiddleStyle = css`
  position: relative;
  z-index: 2;
  font-size: 24px;
  width: 460px;
  height: 580px;
`;

export const Container = styled.div`
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

  ${(isMiddle) => (isMiddle ? isMiddleStyle : '')}
`;

export const CardTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-family: ${Fonts.montserrat};
  font-size: 24px;
  font-weight: 700;

  margin-bottom: 30%;
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

  margin-bottom: 1%;
`;

export const Button = styled.button`
  text-align: center;
  font-size: 22px;
  font-weight: 700;

  background-color: white;
  border: 1px solid black;
  border-radius: 2px;
  width: 230px;
  height: 55px;

  transition-duration: 0.4s;

  margin-bottom: 60%;
  Button:hover {
    background-color: black;
    color: white;
  }
`;
