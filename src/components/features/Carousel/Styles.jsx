import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 473px;
  margin: auto;
  position: relative;
  padding-bottom: 64px;
`;

export const Image = styled.div`
  width: 100%;
  height: 420px;
  min-height: 4px;
  background-position: center;
  background-size: cover;
  background-image: ${(props) => props.backgroundImage};
  transition-duration: 500ms;

  @media (min-width: 1440px) {
    box-shadow: 0 0 5px 5px ${(props) => props.theme.colors.gray[2]};
  }
`;

export const Arrows = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;

  button {
    all: unset;
    padding: 0px 50px;
  }
`;

export const Dot = styled.div`
  height: 15px;
  width: 15px;
  margin-right: 6px;
  border: 1px solid black;
  background-color: ${(props) => (props.backgroundColor ? 'black' : 'none')};
  border-radius: 50%;
`;
