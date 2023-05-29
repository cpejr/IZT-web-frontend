import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 50rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    background: black;
    width: 1.5rem;
    height: 2rem;
    justify-content: center;
    align-items: center;
    animation: Loader 1.2s infinite;
    @keyframes Loader {
      50% {
        height: 6rem;
      }
    }
  }

  div:nth-child(1) {
    background-color: ${(props) => props.theme.colors.blue};
    animation-delay: -0.4s;
  }
  div:nth-child(2) {
    margin-left: 0.5rem;
    background-color: ${(props) => props.theme.colors.darkGreenishBlue};
    animation-delay: -0.2s;
  }
  div:nth-child(3) {
    margin-left: 0.5rem;
    background-color: ${(props) => props.theme.colors.greenishBlue};
    animation-delay: 0s;
  }
`;
