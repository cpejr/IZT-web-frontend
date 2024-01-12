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
  font-size: 2.2rem;
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-weight: 400;
`;

export const Input = styled.input`
  height: 4.5rem;
  width: 100%;
  border-radius: 0.4rem;
  background-color: transparent;
  padding: 0 5%;
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-size: 2.2rem;
  font-weight: 600;
  /* margin-top: 1rem; */
  border: ${(props) =>
    props.error ? '0.2rem red solid' : '0.1rem black solid'};
  ::placeholder {
    font-weight: 400;
  }
  @media (max-width: ${mobileBreakpoint}) {
    height: 4rem;
  }
`;

export const ErrorMessage = styled.p`
  font-size: 1.5rem;
  color: red;
  font-family: ${(props) => props.theme.fonts.montserrat};
  margin-top: 0.5rem;
  font-weight: 600;
`;
