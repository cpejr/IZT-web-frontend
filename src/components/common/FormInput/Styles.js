import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  gap: 5px;

  width: 100%;
`;

export const Label = styled.label`
  color: #ffffff;
  font-size: 24px;

  @media (max-width: 700px) {
    font-size: 20px;
  }
  @media (max-width: 370px) {
    font-size: 15px;
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
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    height: 30px;
  }
  @media (max-width: 370px) {
    font-size: 12px;
  }
`;

export const ErrorMessage = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: red;

  @media (max-width: 700px) {
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
  }

  @media (max-width: 370px) {
    font-size: 12px;
  }
`;
