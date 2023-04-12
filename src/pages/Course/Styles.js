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

  @media (max-width: 475px) {
    font-size: 1.5rem;
  }
  @media (max-width: 380px) {
    font-size: 1.3rem;
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

export const Scroll = styled.div`
  display: grid;

  width: 25%;
  height: 100%;

  @media (max-width: 800px) {
    align-items: flex-start;
    width: 100%;
  }
`;

export const SubtitleScroll = styled.p`
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 30px;

  color: ${(props) => props.theme.colors.blue};

  @media (max-width: 800px) {
    color: ${(props) => props.theme.colors.darkBlue};
  }
`;

export const GreyLineScroll = styled.div`
  width: 100%;
  height: 2px;

  background: #d9d9d9;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const TopicDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  div {
    display: flex;
    justify-content: flex-start;
    gap: 5px;
  }
`;

export const ScrollIcon = styled.img`
  width: 1.2rem;
  height: 1.2rem;
`;

export const Topics = styled.p`
  font-weight: 500;
  font-size: 1.4em;
  line-height: 24px;

  color: #202020;

  :hover {
    cursor: pointer;
  }

  @media (max-width: 800px) {
    color: #595959;
  }
  @media (max-width: 475px) {
    font-size: 1.1rem;
  }
`;

export const VideoTime = styled.div`
  display: flex;
  justify-content: flex-end;
  font-weight: 400;
  font-size: 1.1em;
  line-height: 24px;

  color: #a5a5a5;
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

  @media (min-width: 800px) {
    display: none;
  }
`;
