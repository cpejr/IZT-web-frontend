import styled from 'styled-components';

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
  width: 1.2rem;
  height: 1.2rem;
`;

export const Topics = styled.p`
  font-weight: 500;
  font-size: 2rem;
  line-height: 2.4rem;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 7.5rem;

  color: #202020;

  :hover {
    cursor: pointer;
    overflow: visible;
  }

  @media (max-width: 800px) {
    color: #595959;
    font-size: 1.7rem;
  }
  @media (max-width: 475px) {
    font-size: 1.5rem;
  }
`;

export const VideoTime = styled.div`
  display: flex;
  justify-content: flex-end;
  font-weight: 400;
  font-size: 1.9rem;
  line-height: 2.4rem;

  color: #a5a5a5;
  @media (max-width: 800px) {
    font-size: 1.5rem;
  }
`;
