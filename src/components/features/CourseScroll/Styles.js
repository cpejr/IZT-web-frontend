import styled from 'styled-components';

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
  font-size: 2rem;
  line-height: 3rem;
  margin-bottom: 0.6rem;

  color: ${(props) => props.theme.colors.blue};

  @media (max-width: 800px) {
    color: ${(props) => props.theme.colors.darkBlue};
    font-size: 1.8rem;
  }
  @media (max-width: 475px) {
    font-size: 1.7rem;
  }
`;

export const GreyLine = styled.div`
  width: 100%;
  height: 0.2rem;

  background: #d9d9d9;
  margin-bottom: 0.7rem;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const TopicDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;

  div {
    display: flex;
    justify-content: flex-start;
    gap: 0.5rem;
  }
`;

export const ScrollIcon = styled.img`
  width: 1.68rem;
  height: 1.68rem;
`;
