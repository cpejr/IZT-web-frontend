/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const AddButton = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: baseline;
  align-items: center;
  width: 180px;
  height: 30px;
  background-color: transparent;
  border: none;
  color: white;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  svg {
    padding-right: 5px;
  }
`;

export const File = styled.a`
  font-size: 1.3em;
  color: 'white';
`;

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  gap: 1em;
`;

export const Arrows = styled.div`
  display: flex;
  flex-direction: column;
`;
