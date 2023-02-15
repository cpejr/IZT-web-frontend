import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100%;
  width: 100%;
  height: 780px;
  margin: auto;
  position: relative;
  padding-bottom: 64px;
`;

export const Frames = styled.div`
  width: auto;
  height: 420px;

  @media (max-width: 700px) {
    height: 200px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-image: ${(props) => props.backgroundImage};
  transition-duration: 500ms;

  @media (max-width: 700px) {
    height: 50%;
  }
`;

export const Arrows = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
`;

export const Dot = styled.div`
  height: 15px;
  width: 15px;
  margin-right: 6px;
  border: 1px solid black;
  background-color: ${(props) => (props.backgroundColor ? 'black' : 'none')};
  border-radius: 50%;
`;

export const Left = styled.button`
  margin-right: 50px;
  border: 0;
`;

export const Right = styled.button`
  margin-left: 44px;
  border: 0;
`;
