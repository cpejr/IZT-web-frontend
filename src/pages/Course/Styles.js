import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  gap: 2rem;

  margin: auto;

  width: 100%;
  max-width: 140rem;

  padding: 4.5rem 4rem;

  @media (max-width: 600px) {
    padding-right: 1.5rem;
    padding-left: 1.5rem;
  }
`;

export const CourseHeader = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`;

export const Title = styled.p`
  font-weight: 700;
  font-size: 3rem;
  font-size: 3rem;
  margin-bottom: 1rem;

  overflow-wrap: break-word;
  hyphens: manual;

  color: ${(props) => props.theme.colors.blue};

  @media (max-width: 500px) {
    font-size: 2rem;
  }
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 1.8rem;
  font-size: 1.8rem;

  width: 100%;
  color: black;

  @media (max-width: 500px) {
    font-size: 1.5rem;
  }
`;

export const CourseBody = styled.div`
  display: flex;
  gap: 2em;

  width: 100%;

  @media (max-width: 970px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;

export const GreyLine = styled.div`
  width: 95%;
  height: 0.2rem;

  background: #d9d9d9;

  margin: 0.7rem;

  @media (min-width: 800px) {
    display: none;
  }
`;
