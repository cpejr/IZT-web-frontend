import styled from 'styled-components';

export const ErrorMessage = styled.p`
  font-family: ${(props) => props.theme.fonts.montserrat};
  color: red;
  font-size: 0.7em;
  font-weight: 700;
  display: ${(props) => (props.failedToLog ? 'flex' : 'none')};
`;

export const SubmitSpace = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  align-items: center;
  width: 100%;
  margin-top: 20px;
`;

export const Button = styled.button`
  color: white;
  background-color: ${(props) => props.theme.colors.blue};
  border-radius: 10px;
  padding: 0.5em 0px;
  max-width: 300px;
  width: ${(props) => props.relativeWidth};
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-weight: 700;
  font-size: 1em;
  border: none;
  border: 2px solid ${(props) => props.theme.colors.blue};
  :hover {
    color: ${(props) => props.theme.colors.blue};
    background-color: white;
    border: 2px solid ${(props) => props.theme.colors.blue};
    cursor: pointer;
  }
`;
