import styled from 'styled-components';

export const PictureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1em;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  gap: 1em;
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 1em;
`;

export const RemoveButton = styled.div`
  width: 100%;
  all: unset;
  cursor: pointer;
  color: white;
`;

export const Image = styled.img`
  width: 70px;
  height: 70px;
`;

export const Arrows = styled.div`
  display: flex;
  flex-direction: column;
`;
