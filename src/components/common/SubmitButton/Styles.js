import styled from 'styled-components';

export const SubmitSpace = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  width: 100%;
  margin-top: 2rem;
`;

export const Button = styled.button`
  text-align: center;
  color: white;
  background-color: ${(props) => props.theme.colors.blue};
  border-radius: 1rem;
  padding: 1rem 0rem;
  max-width: 30rem;
  width: ${(props) => props.relativeWidth};
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-weight: 700;
  font-size: 2.2rem;
  border: none;
  border: 0.2rem solid ${(props) => props.theme.colors.blue};
  :hover {
    color: ${(props) => props.theme.colors.blue};
    background-color: white;
    border: 0.2rem solid ${(props) => props.theme.colors.blue};
    cursor: pointer;
  }
`;
