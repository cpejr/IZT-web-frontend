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
`;

export const Label = styled.label`
  color: white;
  font-size: 24px;

  @media (max-width: 700px) {
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
  }
`;

export const Input = styled.input`
  height: 40px;
  font-size: 20px;
  padding: 8px 16px;
  border-radius: 4px;
  border: ${(props) => (props.error ? '2px red solid' : 'none')};
  background: ${(props) => (props.error ? 'rgba(239, 202, 202, 1)' : 'white')};

  @media (max-width: 700px) {
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
    height: 36px;
  }
`;

export const ErrorMessage = styled.p`
  font-size: 16px;
  color: red;

  @media (max-width: 700px) {
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
  }
`;
