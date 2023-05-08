import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 50vh;
`;

export const Title = styled.h1`
  padding-top: 25px;
  font-family: ${(props) => props.theme.fonts.montserrat};
`;
