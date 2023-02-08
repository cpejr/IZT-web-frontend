import styled from 'styled-components';
import { Fonts, Colors } from '../../variables';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 10%;

  font-family: ${Fonts.montserrat};
  background-color: white;
`;

export const Introducao = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Titulo = styled.h1`
  font-size: 26px;
  font-weight: 700;
  color: ${Colors.blue};
`;

export const Descricao = styled.p``;
