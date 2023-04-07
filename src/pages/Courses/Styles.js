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
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 1.1rem;

  padding-bottom: 20px;
  width: 100%;

  color: black;
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
  height: auto;
  max-width: 982px;
  max-height: 735.25px;
`;

export const Video = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  /* max-width: 980px; */
  height: auto;
  /* max-height: 552px */

  margin-bottom: 1.8em;
`;
