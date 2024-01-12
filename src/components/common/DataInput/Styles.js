import styled from 'styled-components';

const breakValue = '700px';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

export const Label = styled.label`
  font-size: 1.76rem;
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-weight: 600;
`;

export const Input = styled.input`
  height: 6.6rem;
  width: 100%;
  border-radius: 1rem;
  background-color: ${(props) => props.theme.colors.gray.lightGrey};
  border: ${(props) => (props.error ? '0.2rem red solid' : 'none')};
  padding: 0 5%;
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-size: 1.76rem;
  font-weight: 600;
  margin-top: 0.88rem;
  @media (max-width: ${breakValue}) {
    height: 5rem;
  }
`;

export const ErrorMessage = styled.p`
  font-size: 1.76rem;
  color: red;
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-weight: 700;
`;
