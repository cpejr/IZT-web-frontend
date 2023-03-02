/* eslint-disable import/prefer-default-export */
import styled, { css } from 'styled-components';

// const breakpoint;

const isMiddleStyle = css`
  position: relative;
  z-index: 2;
  font-size: 24px;
  width: 460px;
  height: 580px;

  /* @media (min-width: 1000px) and (max-width: 1300px) {
    width: 414px;
    height: 522px;
  } */
  @media (max-width: 1000px) {
    width: 450px;
    height: 550px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;

  font-family: ${(props) => props.theme.fonts.montserrat};
  font-size: 20px;
  font-weight: 700;

  width: 450px;
  height: 550px;
  background: linear-gradient(
    to top,
    white 0%,
    white 57%,
    ${(props) => props.theme.colors.gray[1]} 57%,
    ${(props) => props.theme.colors.gray[1]} 100%
  );
  box-shadow: 0 0 8px 8px ${(props) => props.theme.colors.gray[2]};

  ${({ isMiddle }) => (isMiddle ? isMiddleStyle : '')};

  @media (min-width: 1440px) {
    margin-left: 0;
    margin-right: 0;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  @media (min-width: 1000px) and (max-width: 1300px) {
    width: 405px;
    height: 495px;
  }
  @media (max-width: 1000px) {
    background: fixed ${(props) => props.theme.colors.gray[1]};
    box-shadow: 0 0 0 0 ${(props) => props.theme.colors.gray[2]};
    margin: 2%;
  }
  @media (max-width: 500px) {
    width: 400px;
    height: 500px;
  }
  @media (max-width: 429px) {
    width: 350px;
    height: 450px;
  }
  @media (max-width: 360px) {
    width: 300px;
    height: 400px;
  }
  @media (max-width: 310px) {
    width: 270px;
    height: 390px;
  }
`;

export const CardTitle = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-around;
  position: absolute;
  top: ${(props) => props.mediaTopWeb ?? '10%'};
  max-width: 90%;

  font-family: ${(props) => props.theme.fonts.montserrat};
  font-size: 24px;
  font-weight: 700;

  @media (min-width: 1000px) and (max-width: 1300px) {
    font-size: 22px;
  }
  @media (max-width: 1000px) {
    top: ${(props) => props.media1000Top ?? '10%'};
  }
  @media (max-width: 429px) {
    font-size: 20px;
    top: ${(props) => props.media429Top ?? '9%'};
  }
  @media (max-width: 360px) {
    font-size: 18px;
    top: ${(props) => props.media360Top ?? '8%'};
  }
  @media (max-width: 310px) {
    font-size: 16px;
  }
`;

export const CardText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  top: 26%;

  width: 77%;
  height: 30%;

  font-family: ${(props) => props.theme.fonts.montserrat};
  font-size: 18px;
  font-weight: 400;
  overflow: hidden;
  text-overflow: ellipsis;
  :hover {
    overflow: visible;
  }

  @media (min-width: 1000px) and (max-width: 1300px) {
    font-size: 16px;
    top: 24%;
  }
  @media (max-width: 1000px) {
    font-size: 16px;
  }
  @media (max-width: 429px) {
    top: 26%;
    font-size: 14px;
  }
  @media (max-width: 360px) {
    top: 23%;
  }
  @media (max-width: 310px) {
    top: 20%;
  }
`;

export const Button = styled.button`
  text-align: center;
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 0.1em;
  line-height: 27px;
  position: absolute;
  bottom: 5%;

  background-color: white;
  border: 1px solid black;
  border-radius: 3px;
  padding-left: 7%;
  padding-right: 7%;
  padding-top: 1.5%;
  padding-bottom: 1.5%;

  transition-duration: 0.3s;
  cursor: pointer;

  :hover {
    background-color: black;
    color: white;
  }

  @media (max-width: 1000px) {
    background-color: ${(props) => props.theme.colors.gray[1]};
  }
  @media (max-width: 429px) {
    font-size: 20px;
  }
  @media (max-width: 360px) {
    font-size: 18px;
  }
  @media (max-width: 310px) {
    font-size: 16px;
  }
`;

export const Picture = styled.img`
  object-fit: inherit;
  position: absolute;

  top: 23%;
  width: 55%;
  height: auto;

  @media (min-width: 1000px) and (max-width: 1300px) {
    top: 25%;
  }
  @media (max-width: 1000px) {
    top: ${(props) => props.pictureTopMedia1000 ?? '23%'};
  }
`;
