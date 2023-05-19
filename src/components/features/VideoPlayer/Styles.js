import ReactPlayer from 'react-player';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: auto;
  max-width: 982px;
  max-height: 735.25px;
`;
export const VideoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  width: 100%;
  padding-top: 56.25%;
  border-radius: 10px;

  margin-bottom: 1.8em;
`;
export const VideoTitle = styled.p`
  font-weight: 700;
  font-size: 1.75rem;
  margin-bottom: 1rem;

  color: ${(props) => props.theme.colors.blue};

  @media (max-width: 800px) {
    font-weight: 600;
    font-size: 1.65rem;
  }
  @media (max-width: 475px) {
    font-size: 1.5rem;
  }
  @media (max-width: 390px) {
    font-size: 1.13rem;
  }
`;
export const VideoSubTitle = styled.p`
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 30px;

  color: ${(props) => props.theme.colors.blue};

  @media (max-width: 800px) {
    color: ${(props) => props.theme.colors.darkBlue};
  }
`;

export const Player = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 0;
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

  cursor: pointer;
  transition-duration: 0.3s;
  :hover {
    background-color: ${(props) => props.theme.colors.blue};
    color: white;
  }

  @media (min-width: 800px) {
    display: none;
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
