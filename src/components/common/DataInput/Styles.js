import styled from 'styled-components';

const breakValue = '700px';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

export const Label = styled.label`
  font-size: 0.8em;
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-weight: 600;
`;

export const Input = styled.input`
  height: 3em;
  width: 100%;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.gray[1]};
  border: ${(props) => (props.error ? '2px red solid' : 'none')};
  padding: 0 5%;
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-size: 0.8em;
  font-weight: 600;
  margin-top: 0.4em;
  @media (max-width: ${breakValue}) {
    height: 50px;
  }
`;

export const ErrorMessage = styled.p`
  font-size: 0.8em;
  color: red;
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-weight: 700;
`;
