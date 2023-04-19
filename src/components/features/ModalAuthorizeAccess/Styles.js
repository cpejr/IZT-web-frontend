import { DatePicker } from '@mui/x-date-pickers';
import { Select } from 'antd';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 20px 24px;

  .css-mioa5p-MuiFormHelperText-root.Mui-error {
    margin-left: 0px;
  }
`;

export const Form = styled.form``;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  gap: 20px;
`;

export const Label = styled.label`
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  align-self: baseline;

  color: white;
  padding-bottom: 5px;
`;

export const AccessExpirationContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 4px;

  height: 56px;
  background-color: white;
`;

export const Date = styled(DatePicker)``;

export const SelectEmail = styled(Select)`
  border: none;
  color: black;

  font-family: ${(props) => props.theme.fonts.montserrat};
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;

  width: 400px;
  height: 40px;

  border-radius: 4px;
  span {
    input {
      font-family: ${(props) => props.theme.fonts.montserrat};
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 24px;
    }
  }
`;

export const Picture = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
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
    font-family: ${(props) => props.theme.fonts.montserrat};
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
  }
`;

export const ErrorMessage = styled.p`
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  color: red;
  margin-top: 5px;
`;
