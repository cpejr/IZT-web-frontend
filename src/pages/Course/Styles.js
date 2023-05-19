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
  max-width: 1400px;
  width: 100%;
`;

export const IntroductionDiv = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1275px;
  width: 100%;
`;

export const Title = styled.p`
  font-weight: 700;
  font-size: 1.87rem;
  margin-bottom: 1rem;

  color: ${(props) => props.theme.colors.blue};

  @media (max-width: 800px) {
    font-size: 1.65rem;
  }
  @media (max-width: 475px) {
    font-size: 1.4rem;
  }
  @media (max-width: 380px) {
    font-size: 1.25rem;
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
  line-height: 30px;

  color: ${(props) => props.theme.colors.blue};

  @media (max-width: 800px) {
    color: ${(props) => props.theme.colors.darkBlue};
  }
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 1.1rem;

  padding-bottom: 20px;
  width: 100%;

  color: black;

  @media (max-width: 475px) {
    font-size: 0.9rem;
  }
`;

export const MainSection = styled.div`
  display: flex;
  gap: 2em;
  max-width: 1282px;
  p {
    margin-top: 0px;
  }

  div {
    gap: 15px;
  }
  @media (max-width: 800px) {
    flex-wrap: wrap-reverse;
    align-items: center;
  }
`;

export const GreyLine = styled.div`
  width: 85%;
  height: 2px;

  background: #d9d9d9;

  margin: 1em;

  @media (min-width: 800px) {
    display: none;
  }
`;

export const VideoSectionDiv = styled.div`
  width: 100%;
  height: 100%;
  max-width: 982px;
  max-height: 735.25px;
`;

export const Video = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: auto;
  border-radius: 10px;

  margin-bottom: 1.8em;
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
  font-size: 1em;

  width: 7rem;
  height: 2rem;
  gap: 7%;

  border: 1px solid ${(props) => props.theme.colors.blue};
  border-radius: 4px;

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
