import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  gap: 5px;
  height: auto;
  width: 100%;

  input {
    height: 40px;
    font-size: 20px;
    padding: 8px 16px;
    border-radius: 4px;

    border: ${(props) => (props.error ? '2px red solid' : 'none')};
    background: ${(props) =>
      props.error ? 'rgba(239, 202, 202, 1)' : 'white'};
  }
`;

export const Label = styled.label`
  color: #ffffff;
  font-size: 24px;
`;

export const ErrorMessage = styled.p`
  font-size: 16px;
  color: red;
`;
