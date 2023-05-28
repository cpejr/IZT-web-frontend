import styled from 'styled-components';

export const CourseContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  height: 100%;
  max-height: 67.25rem;
  overflow: scroll;

  width: 100%;
`;

export const ChaptersContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1rem;
`;

export const ChaptersContent = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.3rem;
`;

export const ChapterTitle = styled.p`
  font-weight: 600;
  font-size: 2.2rem;
  line-height: 3rem;

  color: ${(props) => props.theme.colors.blue};

  @media (max-width: 970px) {
    font-size: 2rem;
  }
`;

export const GreyLine = styled.div`
  width: 100%;
  height: 2px;

  background: #d9d9d9;
  margin-bottom: 0.5rem;

  @media (max-width: 970px) {
    display: none;
  }
`;
