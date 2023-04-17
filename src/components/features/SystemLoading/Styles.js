import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Text = styled.p`
  align-self: center;
  font-size: 25px;
  font-weight: bold;
  font-family: ${(props) => props.theme.fonts.montserrat};
`;

export const LoadingGif = styled.div`
  width: 500px;
  height: 500px;
  align-self: center;
  width: fit-content;
  height: fit-content;
`;