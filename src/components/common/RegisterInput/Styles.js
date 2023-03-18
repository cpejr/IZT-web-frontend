import styled from 'styled-components';

const mobileBreakpoint = '700px';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 3%;
`;

export const Label = styled.label`
  font-size: 0.8em;
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-weight: 400;
  @media (min-width: 801px) and (max-width: 1030px) {
    font-size: 0.7em;
  }
`;

export const Input = styled.input`
  height: 3em;
  width: 100%;
  border-radius: 4px;
  background-color: transparent;
  padding: 0 5%;
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-size: 0.8em;
  font-weight: 600;
  margin-top: 0.4em;
  border: ${(props) => (props.error ? '2px red solid' : '1px black solid')};
  ::placeholder {
    color: black;
    font-weight: 400;
  }
  @media (max-width: ${mobileBreakpoint}) {
    height: 50px;
  }
`;

export const ErrorMessage = styled.p`
  font-size: 0.7em;
  color: red;
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-weight: 600;
`;
