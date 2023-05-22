import styled from 'styled-components';

export const Scroll = styled.div`
  display: grid;

  height: 100%;

  @media (max-width: 800px) {
    align-items: flex-start;
    width: 100%;
  }
`;

export const SubtitleScroll = styled.p`
  font-weight: 600;
  font-size: 2rem;
  line-height: 30px;
  margin-bottom: 0.3em;

  color: ${(props) => props.theme.colors.blue};

  @media (max-width: 800px) {
    color: ${(props) => props.theme.colors.darkBlue};
    font-size: 1.8rem;
  }
  @media (max-width: 475px) {
    font-size: 1.4rem;
  }
`;

export const GreyLine = styled.div`
  width: 100%;
  height: 2px;

  background: #d9d9d9;
  margin-bottom: 0.5em;

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
`;

export const VideoTime = styled.div`
  display: flex;
  justify-content: flex-end;
  font-weight: 400;
  font-size: 1.1em;
  line-height: 24px;

  color: #a5a5a5;
`;
