import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  height: 100%;
`;

export const Text = styled.p`
  align-self: center;
  font-size: 2.5rem;
  font-weight: bold;
  font-family: ${(props) => props.theme.fonts.montserrat};
`;

export const LoadingGif = styled.div`
  width: 50rem;
  height: 50rem;
  align-self: center;
  width: fit-content;
  height: fit-content;
`;
