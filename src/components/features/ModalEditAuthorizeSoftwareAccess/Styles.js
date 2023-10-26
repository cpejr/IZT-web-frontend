import { DatePicker } from '@mui/x-date-pickers';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 2rem 2.4rem;

  .css-mioa5p-MuiFormHelperText-root.Mui-error {
    margin-left: 0rem;
  }
`;

export const Form = styled.form``;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  gap: 2rem;
`;

export const Label = styled.label`
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-style: normal;
  font-weight: 500;
  font-size: 2.4rem;
  align-self: baseline;

  color: white;
  padding-bottom: 0.5rem;
`;

export const AccessExpirationContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 0.4rem;
  background-color: white;
`;

export const Date = styled(DatePicker)`
  border-radius: 0.8rem;
  .Mui-error .MuiOutlinedInput-notchedOutline {
    border-width: 0.2rem;
  }
  width: 100%;
`;

export const Picture = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalButton = styled.button`
  cursor: pointer;
  gap: 7px;
  align-self: center;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  flex-direction: row;
  align-items: center;

  width: auto;
  height: 4.5rem;
  padding: 0rem 2rem 0rem 2rem;

  background-color: transparent;
  border: 0.1rem solid white;
  border-radius: 0.5rem;
  color: white;

  :hover {
    transition-duration: 0.5s;
    //colocar hover quando desclicar do botão
    background-color: rgba(255, 255, 255, 0.2);
  }

  p {
    font-family: ${(props) => props.theme.fonts.montserrat};
    font-style: normal;
    font-weight: 600;
    font-size: 1.8rem;
  }
`;

export const ErrorMessage = styled.p`
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-style: normal;
  font-weight: 700;
  font-size: 1.4rem;
  color: red;
  margin-top: 0.5rem;
`;

export const EmailText = styled.h1`
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-style: normal;
  font-size: 2rem;
  color: white;
`;
