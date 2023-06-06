import styled from 'styled-components';

export const CollapsableData = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  overflow-y: hidden;
  max-height: ${(props) => (props.collapse ? 'auto' : '0rem')};
  transition: all 0.5s ease-in-out 0.5s;
`;

export const Line = styled.div`
  display: flex;
  flex-direction: row;
`;

export const DataColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

export const Label = styled.label`
  font-size: 1.5rem;
  color: white;
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-weight: 500;
  white-space: nowrap;
`;

export const Input = styled.input`
  background-color: transparent;
  border: none;
  color: white;
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-weight: 500;
  word-wrap: none;
  margin-left: 1rem;
  border-bottom: 0.1rem solid white;
  font-size: 1.5rem;
  width: 100%;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6.4rem;
  height: 2.7rem;

  color: white;
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-weight: 600;
  font-size: 1.4rem;
  border: 1px solid white;
  background-color: transparent;
  border-radius: 5px;
  margin: 1rem;
`;
