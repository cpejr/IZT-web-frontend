import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;

  gap: 1.5rem;

  width: 100%;
`;

export const VideoBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  gap: 2rem;

  width: 100%;
`;

export const VideoTitle = styled.p`
  text-align: start;

  width: 100%;

  font-weight: 700;
  font-size: 2.2rem;

  color: ${(props) => props.theme.colors.blue};

  @media (max-width: 970px) {
    font-weight: 600;
    font-size: 2rem;
  }
`;

export const Description = styled.p`
  font-weight: 600;
  font-size: 2.2rem;
  line-height: 3rem;

  color: ${(props) => props.theme.colors.blue};
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
`;

export const ChangeVideoButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: ${(props) => props.theme.fonts.montserrat};
  font-weight: 500;
  font-size: 1.4rem;

  gap: 0.2rem;

  border: 0.1rem solid ${(props) => props.theme.colors.blue};
  border-radius: 0.4rem;

  padding: 0.5rem;

  color: ${(props) => props.theme.colors.blue};
  background-color: transparent;

  cursor: pointer;
  transition-duration: 0.3s;

  :hover {
    background-color: ${(props) => props.theme.colors.blue};
    color: white;
  }

  @media (min-width: 970px) {
    display: none;
  }
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 1.8rem;

  padding-bottom: 2rem;
  width: 100%;

  overflow-wrap: break-word;
  hyphens: manual;

  color: black;

  @media (max-width: 970px) {
    font-size: inherit;
  }
`;

export const VideoFooter = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1rem;
`;
