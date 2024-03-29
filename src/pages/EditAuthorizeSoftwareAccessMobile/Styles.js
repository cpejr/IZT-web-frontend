import { DatePicker } from '@mui/x-date-pickers';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;

  height: 100%;
  width: 95%;
  margin-bottom: 50px;

  .css-mioa5p-MuiFormHelperText-root {
    margin-left: 0px;
    margin-top: 0px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  gap: 15px;
`;

export const Title = styled.p`
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-style: normal;
  font-weight: 700;
  font-size: 1.5em;
  line-height: 24px;
  padding-bottom: 20px;
  color: black;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.25rem;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SaveButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: center;
  justify-content: center;
  padding: 10px;
  gap: 10px;
  margin-bottom: 10px;

  width: auto;
  height: 45px;

  border: 1px solid black;
  border-radius: 5px;
  background-color: transparent;
  transition: all 500ms;

  p {
    font-family: ${(props) => props.theme.fonts.montserrat};
    font-style: normal;
    font-weight: 600;
    font-size: 18px;

    display: flex;
    align-items: center;
    text-align: center;

    color: black;
  }

  :hover {
    background-color: ${(props) => props.theme.colors.blue};
    p {
      color: white;
    }
    color: white;
    border: white;
    cursor: pointer;
  }

  svg {
    margin-right: 0.5rem;
    margin-left: 0.5rem;
  }
`;

export const CancelButton = styled(Link)`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-self: center;
  padding: 5px 10px;
  gap: 10px;
  text-decoration: none;
  width: 84px;
  height: 27px;

  border: 1px solid #000000;
  border-radius: 5px;
  background-color: transparent;
  transition: 500ms;

  p {
    font-family: ${(props) => props.theme.fonts.montserrat};
    font-style: normal;
    font-weight: 600;
    font-size: 14px;

    display: flex;
    align-items: center;
    text-align: center;

    color: black;
  }

  :hover {
    p {
      color: white;
    }
    background-color: red;
    color: white;
    border: white;
    cursor: pointer;
  }
`;

export const AccessExpirationContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 4px;
`;

export const Date = styled(DatePicker)``;

export const Label = styled.label`
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-style: normal;
  align-self: baseline;

  font-size: 1.5em;
  font-weight: 400;

  padding-bottom: 5px;
`;

export const EmailText = styled.p`
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-style: normal;
  align-self: baseline;

  font-size: 1.6rem;
  font-weight: 600;

  padding-bottom: 5px;
`;

export const ErrorMessage = styled.p`
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  color: red;
  margin-left: 0px;
`;
