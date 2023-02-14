import styled from 'styled-components';

export const Container = styled.div`
  /* display: flex; */
  /* align-items: center;
  justify-content: center; */
  max-width: 1400px;
  width: 100%;
  height: 780px;
  margin: auto;
  position: relative;
  padding: 64px 16px;
`;

export const Frames = styled.div`
  width: auto;
  height: 420px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-image: ${(props) => props.backgroundImage};
  transition-duration: 500ms;
`;

export const Arrows = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Dot = styled.div`
  height: 15px;
  width: 15px;
  border: 1px solid black;
  background-color: ${(props) => (props.backgroundColor ? 'black' : 'none')};
  border-radius: 50%;
`;

export const ButtonLeft = styled.button``;

export const ButtonRight = styled.button``;
