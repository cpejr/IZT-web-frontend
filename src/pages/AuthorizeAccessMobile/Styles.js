import { DatePicker } from '@mui/x-date-pickers';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;

  width: 95%;
  margin-bottom: 5rem;

  .css-mioa5p-MuiFormHelperText-root {
    margin-left: 0rem;
    margin-top: 0rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 40rem;
  gap: 1.5rem;
`;

export const Title = styled.p`
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-style: normal;
  font-weight: 700;
  font-size: 2.1rem;
  line-height: 2.4rem;
  padding-bottom: 2rem;

  color: black;
`;

export const ButtonsDiv = styled.div`
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
  padding: 1rem;
  gap: 1rem;
  margin-bottom: 1rem;

  width: auto;
  height: 4.5rem;

  border: 0.1rem solid black;
  border-radius: 0.5rem;
  background-color: transparent;
  transition: all 500ms;

  p {
    font-family: ${(props) => props.theme.fonts.montserrat};
    font-style: normal;
    font-weight: 600;
    font-size: 1.8rem;

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
  padding: 0.5rem 1rem;
  gap: 1rem;
  text-decoration: none;
  width: 8.4rem;
  height: 2.7rem;

  border: 0.1rem solid #000000;
  border-radius: 0.5rem;
  background-color: transparent;
  transition: 500ms;

  p {
    font-family: ${(props) => props.theme.fonts.montserrat};
    font-style: normal;
    font-weight: 600;
    font-size: 1.4rem;

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
  border-radius: 0.4rem;
`;

export const Date = styled(DatePicker)``;

export const Label = styled.label`
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-style: normal;
  align-self: baseline;

  font-size: 2.1rem;
  font-weight: 400;

  padding-bottom: 0.5rem;
`;

export const ErrorMessage = styled.p`
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-style: normal;
  font-weight: 600;
  font-size: 1.4rem;
  color: red;
  margin-left: 0rem;
`;
