// import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-style: normal;
  display: flex;
  flex-direction: column;

  margin-bottom: 5%;
  padding: 3%;
  width: 100%;
  height: auto;
`;

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  max-width: 140rem;
  width: 100%;
`;

export const IntroductionDiv = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 127.5rem;
  width: 100%;
`;

export const Title = styled.p`
  font-weight: 700;
  font-size: 3rem;
  margin-bottom: 1rem;

  color: ${(props) => props.theme.colors.blue};

  @media (max-width: 800px) {
    font-size: 2.64rem;
  }
  @media (max-width: 475px) {
    font-size: 2.24rem;
  }
  @media (max-width: 380px) {
    font-size: 2rem;
  }
`;

export const VideoTitle = styled.p`
  font-weight: 700;
  font-size: 1.75rem;
  margin-bottom: 1rem;

  color: ${(props) => props.theme.colors.blue};

  @media (max-width: 800px) {
    font-weight: 600;
    font-size: 1.65rem;
  }
  @media (max-width: 475px) {
    font-size: 1.5rem;
  }
  @media (max-width: 390px) {
    font-size: 1.13rem;
  }
`;

export const Subtitle = styled.p`
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 3rem;

  color: ${(props) => props.theme.colors.blue};

  @media (max-width: 800px) {
    color: ${(props) => props.theme.colors.darkBlue};
  }
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 1.8rem;

  padding-bottom: 2rem;
  width: 100%;

  color: black;

  @media (max-width: 475px) {
    font-size: 1.4rem;
  }
`;

export const MainSection = styled.div`
  display: flex;
  gap: 5rem;
  max-width: 128.2rem;
  p {
    margin-top: 0rem;
  }

  div {
    gap: 1.5rem;
  }
  @media (max-width: 800px) {
    flex-wrap: wrap-reverse;
    align-items: center;
  }
`;

export const GreyLine = styled.div`
  width: 85%;
  height: 0.2rem;

  background: #d9d9d9;

  margin: 0.7rem;

  @media (min-width: 800px) {
    display: none;
  }
`;

export const VideoSectionDiv = styled.div`
  width: 100%;
  height: auto;
  max-width: 98.2rem;
  max-height: 73.525rem;
`;

export const Video = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: auto;
  border-radius: 1rem;

  margin-bottom: 2.52rem;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ChangeVideoButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-weight: 500;
  font-size: 1.4rem;

  width: 9.8rem;
  height: 2.8rem;
  gap: 7%;

  border: 0.1rem solid ${(props) => props.theme.colors.blue};
  border-radius: 0.4rem;

  color: ${(props) => props.theme.colors.blue};
  background-color: transparent;

  cursor: pointer;
  transition-duration: 0.3s;
  :hover {
    background-color: ${(props) => props.theme.colors.blue};
    color: white;
  }

  @media (min-width: 800px) {
    display: none;
  }
`;
