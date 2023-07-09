import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 1000px;
  height: 100%;
`;

export const Message = styled.h1`
  font-size: 1.5em;
  font-family: ${(props) => props.theme.fonts.montserrat};
  text-align: center;
  margin-top: 1em;
  color: white;
`;

export const DeleteButton = styled.button`
  cursor: pointer;

  width: 15rem;
  height: 5rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  flex-direction: row;
  align-items: center;

  background-color: transparent;
  border: 1px solid white;
  border-radius: 0.5rem;
  color: white;

  margin-top: 1.5rem;

  p {
    font-family: ${(props) => props.theme.fonts.montserrat};
    font-style: normal;
    font-weight: 600;
    font-size: 1.2em;
  }

  svg {
    margin-right: 0.5rem;
    margin-left: 0.5rem;
  }
`;
