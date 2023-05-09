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
  margin: 1em;
`;

export const Delete = styled.button`
  width: 10em;
  height: 3em;

  border-radius: 8px;
  background-color: red;

  font-size: 1rem;
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-weight: 500;
  text-align: center;
`;
