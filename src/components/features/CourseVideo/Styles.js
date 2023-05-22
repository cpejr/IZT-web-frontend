import styled from 'styled-components';

export const TopicDiv = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 5px 10px;
  margin-bottom: 10px;

  & > div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 5px;
  }

  & > div:nth-child(1) {
    flex-direction: row-reverse;
  }

  background-color: ${({ active }) => (active ? '#f5f5f5' : 'none')};
`;

export const ScrollIcon = styled.img`
  width: 2rem;
  height: 2rem;
`;

export const Topics = styled.p`
  font-weight: 500;
  font-size: 2rem;
  line-height: 24px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 15rem;

  color: #202020;

  :hover {
    cursor: pointer;
  }

  @media (max-width: 800px) {
    color: #595959;
    font-size: 1.1rem;
  }
  @media (max-width: 475px) {
    font-size: 1rem;
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
