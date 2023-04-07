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
  flex-direction: row;
  justify-content: space-between;
  gap: 2em;

  p {
    margin-top: 0px;
  }

  div {
    gap: 15px;
  }
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const CoursesScroll = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  max-width: 250px;
  width: 100%;
  height: 100%;
`;

export const SubtitleScroll = styled.p`
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 30px;

  color: ${(props) => props.theme.colors.blue};
`;

export const GreyLine = styled.div`
  width: 100%;
  height: 2px;

  background: #d9d9d9;
`;

export const TopicDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;

  div {
    display: flex;
    flex-direction: row;
    gap: 5px;
  }
`;

export const ScrollIcon = styled.img`
  width: 1.2rem;
  height: 1.2rem;
`;

export const Topics = styled.p`
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 24px;

  color: #202020;
`;

export const VideoTime = styled.p`
  font-weight: 400;
  font-size: 1rem;

  color: #a5a5a5;
`;

export const VideoSectionDiv = styled.div`
  width: 100%;
  max-width: 982px;
  height: 735.25px;
`;

export const Picture = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 980px;
  height: auto;

  margin-bottom: 25px;
  max-width: 100%;
`;
