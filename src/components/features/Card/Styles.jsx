/* eslint-disable import/prefer-default-export */
import styled, { css } from 'styled-components';
import { Colors, Fonts } from '../../../variables';

// const breakpoint;

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
  position: relative;
  z-index: 1;

  font-family: ${Fonts.montserrat};
  font-size: 20px;
  font-weight: 700;

  width: 470px;
  height: 570px;
  background: linear-gradient(
    to top,
    white 0%,
    white 57%,
    ${Colors.gray[1]} 57%,
    ${Colors.gray[1]} 100%
  );
  box-shadow: 0 0 8px 8px ${Colors.gray[2]};

  ${({ isMiddle }) => (isMiddle ? isMiddleStyle : '')};

  /* @media screen (max-width: ;){

  } */
`;

export const CardTitle = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-around;
  position: absolute;
  top: 7%;

  font-family: ${Fonts.montserrat};
  font-size: 24px;
  font-weight: 700;
`;

export const CardText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  top: 25%;

  width: 77%;

  font-family: ${Fonts.montserrat};
  font-size: 18px;
  font-weight: 400;
`;

export const Button = styled.button`
  text-align: center;
  font-family: ${Fonts.montserrat};
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 0.1em;
  line-height: 27px;
  position: absolute;
  bottom: 5%;

  background-color: white;
  border: 1px solid black;
  border-radius: 3px;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 7px;
  padding-bottom: 7px;

  transition-duration: 0.3s;
  cursor: pointer;

  margin-bottom: ${({ marginBottomButton }) => marginBottomButton};
  :hover {
    background-color: black;
    color: white;
  }
`;

export const Picture = styled.img`
  object-fit: scale-down;
  position: absolute;
  top: 25%;
`;
