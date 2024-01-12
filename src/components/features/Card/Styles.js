/* eslint-disable import/prefer-default-export */
import styled, { css } from 'styled-components';

const isMiddleStyle = css`
  position: relative;
  z-index: 2;
  font-size: 2.4rem;
  width: 35%;
  height: 55rem;
  background: linear-gradient(
    to top,
    white 0%,
    white 60%,
    ${(props) => props.theme.colors.gray.lightGrey} 60%,
    ${(props) => props.theme.colors.gray.lightGrey} 100%
  );

  @media (max-width: 1200px) {
    height: 50rem;
  }
`;

const isMiddleTitleStyle = css`
  font-size: 2.4rem;
  top: ${(props) => (props.mediaTopWeb ? '5%' : 'none')};
  @media (max-width: 1200px) {
    font-size: 2.2rem;
    top: ${(props) => (props.mediaTopWeb ? '5%' : 'none')};
  }
`;

const isMiddleImgStyle = css`
  width: 23rem;
  top: 18%;

  @media (max-width: 1200px) {
    top: 19%;
    width: 20rem;
  }
`;

const isMiddleButStyle = css`
  font-size: 2.4rem;
  line-height: 3.4rem;
  bottom: 7%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  font-family: ${(props) => props.theme.fonts.montserrat};
  font-size: 2rem;
  font-weight: 700;

  width: 32.5%;
  height: 53rem;
  background: linear-gradient(
    to top,
    white 0%,
    white 57%,
    ${(props) => props.theme.colors.gray.lightGrey} 57%,
    ${(props) => props.theme.colors.gray.lightGrey} 100%
  );
  box-shadow: 0 0 0.8rem 0.8rem ${(props) => props.theme.colors.gray.mediumGrey};

  ${({ isMiddle }) => (isMiddle ? isMiddleStyle : '')};

  @media (max-width: 1200px) {
    ${({ isMiddle }) => (isMiddle ? isMiddleStyle : '')};
    height: 48rem;
  }
  @media (max-width: 1000px) {
    background: fixed ${(props) => props.theme.colors.gray.lightGrey};
    box-shadow: 0 0 0 0 ${(props) => props.theme.colors.gray.mediumGrey};
    margin: 2%;
    width: 80%;
  }
  @media (max-width: 500px) {
    width: 97%;
    height: 50rem;
  }
  @media (max-width: 435px) {
    height: 45rem;
  }
  @media (max-width: 360px) {
    height: 40rem;
  }
  @media (max-width: 310px) {
    height: 39rem;
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
  font-size: 2rem;
  font-weight: 700;
  top: ${(props) => (props.mediaTopWeb ? '7%' : 'none')};

  ${({ isMiddle }) => (isMiddle ? isMiddleTitleStyle : '')};

  @media (min-width: 1000px) and (max-width: 1200px) {
    ${({ isMiddle }) => (isMiddle ? isMiddleTitleStyle : '')};
    font-size: 1.8rem;
  }
  @media (max-width: 1000px) {
    top: ${(props) => (props.media1000Top ? '10%' : 'none')};
    width: 90%;
  }
  @media (max-width: 429px) {
    font-size: 2rem;
    top: ${(props) => (props.media429Top ? '9%' : 'none')};
  }
  @media (max-width: 360px) {
    font-size: 1.8rem;
    top: ${(props) => (props.media360Top ? '8%' : 'none')};
  }
  @media (max-width: 310px) {
    font-size: 1.6rem;
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
  width: 19rem;
  height: auto;
  border-radius: 9.5rem;
  margin-bottom: 15%;

  ${({ isMiddle }) => (isMiddle ? isMiddleImgStyle : '')};

  @media (min-width: 1000px) and (max-width: 1200px) {
    ${({ isMiddle }) => (isMiddle ? isMiddleImgStyle : '')};
    top: 23%;
    width: 16rem;
  }
  @media (max-width: 1100px) {
    margin-top: 2%;
    margin-bottom: 2%;
  }
  @media (max-width: 1000px) {
    top: ${(props) => (props.pictureTopMedia1000 ? '23%' : 'none')};
    width: 20rem;
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
  font-size: 1.8rem;
  font-weight: 400;
  overflow: hidden;
  text-overflow: ellipsis;
  :hover {
    overflow: visible;
  }

  @media (max-width: 1120px) {
    font-size: 1.6rem;
  }
  @media (max-width: 1000px) {
    top: 26%;
    margin-bottom: 3%;
  }
  @media (max-width: 429px) {
    top: 23%;
    font-size: 1.4rem;
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
  font-size: 2.2rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  line-height: 2.7rem;
  position: absolute;
  bottom: 5%;

  background-color: white;
  border: 0.1rem solid black;
  border-radius: 0.3rem;
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
    font-size: 2.2rem;
    line-height: 2.7rem;
    bottom: 5%;
  }
  @media (max-width: 429px) {
    font-size: 2rem;
  }
  @media (max-width: 360px) {
    font-size: 1.8rem;
  }
  @media (max-width: 310px) {
    font-size: 1.6rem;
  }
`;
