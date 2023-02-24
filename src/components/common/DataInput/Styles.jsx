import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 20px;
  width: 100%;
`;

export const Label = styled.label`
  font-size: 1em;
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-weight: 600;
`;

export const Input = styled.div`
  height: 80px;
  width: 100%;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.gray[1]};
  border: ${(props) => (props.error ? '2px red solid' : 'none')};
`;

export const ErrorMessage = styled.p`
  font-size: 16px;
  color: red;
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-weight: 700;
`;
