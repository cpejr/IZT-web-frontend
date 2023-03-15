/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1330px;
  /* max-height: 610px; */
`;

export const DataEntry = styled.div`
  max-width: 1190px;
  width: 90%;
  display: flex;
  justify-content: center;
  gap: 1.2em;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const FormColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* gap: 1em; */
  width: 100%;
  max-width: 350px;
`;

export const Form = styled.form`
  max-width: 1190px;
  width: 90%;
  display: wrap;
  justify-content: center;
  gap: 1.2em;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const SaveChanges = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 212px;
  max-width: 212px;
  height: 2.5em;
  border: 1px solid #000000;
  border-radius: 5px;
  background-color: transparent;
  margin-top: 4%;

  font-family: ${(props) => props.theme.fonts.montserrat};
  font-size: 18px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.blue};
  @media (max-width: 700px) {
    align-items: center;
    justify-content: center;
    width: 218px;
  }
`;
