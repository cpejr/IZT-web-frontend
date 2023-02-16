import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  gap: 5px;
  height: 100px;
  width: 100%;
`;

export const Label = styled.label`
  color: #ffffff;
  font-size: 24px;
`;

export const Input = styled.input`
  height: 40px;
  font-size: 20px;
  padding: 8px 16px;
  border-radius: 4px;
`;

export const ErrorMessage = styled.span`
  font-size: 16px;
`;
