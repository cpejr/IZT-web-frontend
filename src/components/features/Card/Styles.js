/* eslint-disable import/prefer-default-export */
import styled, { css } from 'styled-components';

const isMiddleStyle = css`
  position: relative;
  z-index: 2;
  font-size: 24px;
  width: 35%;
  height: 550px;
  background: linear-gradient(
    to top,
    white 0%,
    white 60%,
    ${(props) => props.theme.colors.gray.lightGrey} 60%,
    ${(props) => props.theme.colors.gray.lightGrey} 100%
  );

  @media (max-width: 1200px) {
    height: 500px;
  }
`;

const isMiddleTitleStyle = css`
  font-size: 24px;
  top: ${(props) => props.mediaTopWeb ?? '5%'};
  @media (max-width: 1200px) {
    font-size: 22px;
    top: ${(props) => props.mediaTopWeb ?? '5%'};
  }
`;

const isMiddleImgStyle = css`
  width: 230px;
  top: 18%;

  @media (max-width: 1200px) {
    top: 19%;
    width: 200px;
  }
`;

const isMiddleButStyle = css`
  font-size: 24px;
  line-height: 34px;
  bottom: 7%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  font-family: ${(props) => props.theme.fonts.montserrat};
  font-size: 20px;
  font-weight: 700;

  width: 32.5%;
  height: 530px;
  background: linear-gradient(
    to top,
    white 0%,
    white 57%,
    ${(props) => props.theme.colors.gray.lightGrey} 57%,
    ${(props) => props.theme.colors.gray.lightGrey} 100%
  );
  box-shadow: 0 0 8px 8px ${(props) => props.theme.colors.gray.mediumGrey};

  ${({ isMiddle }) => (isMiddle ? isMiddleStyle : '')};

  @media (max-width: 1200px) {
    ${({ isMiddle }) => (isMiddle ? isMiddleStyle : '')};
    height: 480px;
  }
  @media (max-width: 1000px) {
    background: fixed ${(props) => props.theme.colors.gray.lightGrey};
    box-shadow: 0 0 0 0 ${(props) => props.theme.colors.gray.mediumGrey};
    margin: 2%;
    width: 80%;
  }
  @media (max-width: 500px) {
    width: 97%;
    height: 500px;
  }
  @media (max-width: 435px) {
    height: 450px;
  }
  @media (max-width: 360px) {
    height: 400px;
  }
  @media (max-width: 310px) {
    height: 390px;
  }
`;

export const CardTitle = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-around;
  position: absolute;
  top: 6%;
  width: 85%;
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-size: 20px;
  font-weight: 700;
  top: ${(props) => props.mediaTopWeb ?? '7%'};

  ${({ isMiddle }) => (isMiddle ? isMiddleTitleStyle : '')};

  @media (min-width: 1000px) and (max-width: 1200px) {
    ${({ isMiddle }) => (isMiddle ? isMiddleTitleStyle : '')};
    font-size: 18px;
  }
  @media (max-width: 1000px) {
    top: ${(props) => props.media1000Top ?? '10%'};
    width: 90%;
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

export const Picture = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  /* object-fit: inherit; */
  position: absolute;
  /* margin-left: 1%;
  margin-right: 1%; */
  top: 23%;
  width: 190px;
  height: auto;
  margin-bottom: 15%;

  ${({ isMiddle }) => (isMiddle ? isMiddleImgStyle : '')};

  @media (min-width: 1000px) and (max-width: 1200px) {
    ${({ isMiddle }) => (isMiddle ? isMiddleImgStyle : '')};
    top: 23%;
    width: 160px;
  }
  @media (max-width: 1100px) {
    margin-top: 2%;
    margin-bottom: 2%;
  }
  @media (max-width: 1000px) {
    top: ${(props) => props.pictureTopMedia1000 ?? '23%'};
    width: 200px;
  }
  @media (max-width: 540px) {
    width: 45%;
  }
`;

export const CardText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  top: 23%;
  width: 77%;
  height: auto;
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-size: 18px;
  font-weight: 400;
  overflow: hidden;
  text-overflow: ellipsis;
  :hover {
    overflow: visible;
  }

  @media (max-width: 1120px) {
    font-size: 16px;
  }
  @media (max-width: 1000px) {
    top: 26%;
    margin-bottom: 3%;
  }
  @media (max-width: 429px) {
    top: 23%;
    font-size: 14px;
  }
  @media (max-width: 360px) {
    top: 20%;
  }
  @media (max-width: 310px) {
    top: 17%;
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

  ${({ isMiddle }) => (isMiddle ? isMiddleButStyle : '')};

  @media (max-width: 1000px) {
    background-color: ${(props) => props.theme.colors.gray.lightGrey};
    font-size: 22px;
    line-height: 27px;
    bottom: 5%;
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
