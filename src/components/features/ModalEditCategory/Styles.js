import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 20px 24px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: baseline;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
`;

export const Label = styled.label`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  align-self: baseline;

  color: white;
  padding-bottom: 5px;
`;

export const Input = styled.input`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 8px 11px;
  gap: 10px;
  border: none;
  color: black;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;

  width: 400px;
  height: 40px;
  margin-bottom: 20px;

  border-radius: 4px;
`;

export const ModalButton = styled.button`
  cursor: pointer;
  gap: 7px;
  align-self: flex-end;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  flex-direction: row;
  align-items: center;

  width: 212px;
  height: 45px;

  background-color: transparent;
  border: 1px solid white;
  border-radius: 5px;
  color: white;

  p {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
  }
`;
