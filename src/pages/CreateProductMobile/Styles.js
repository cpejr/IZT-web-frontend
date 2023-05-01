import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 95%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;

  width: 100%;

  margin-bottom: 50px;
`;

export const Title = styled.p`
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  padding-bottom: 10px;

  color: black;
`;

export const Subtitle = styled.p`
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;

  color: black;
`;

export const Input = styled.input`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 8px 11px;
  gap: 10px;

  border: ${({ error }) => (error ? '2px solid red' : '1px solid black')};
  border-radius: 4px;

  max-width: 100%;
  width: 100%;
  height: 36px;

  font-family: ${(props) => props.theme.fonts.montserrat};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
`;

export const TextArea = styled.textarea`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 8px 11px;
  gap: 10px;

  border: ${({ error }) => (error ? '2px solid red' : '1px solid black')};
  border-radius: 4px;

  max-width: 100%;
  width: 100%;
  height: 250px;

  font-family: ${(props) => props.theme.fonts.montserrat};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  resize: none;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding-top: 10px;
  width: 100%;
`;

export const MiniText = styled.p`
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;

  padding-bottom: 6px;

  color: black;
`;

export const CategorySection = styled.div`
  display: flex;
  align-items: center;

  gap: 25px;
  width: 100%;

  @media (max-width: 361px) {
    align-items: start;
    flex-direction: column;
    gap: 5px;
  }
`;

export const ErrorMessage = styled.p`
  font-weight: 700;
  color: red;
`;

export const SaveButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: center;
  justify-content: center;
  padding: 10px;
  gap: 10px;
  margin-top: 10px;

  width: 191px;
  height: 45px;

  border: 1px solid black;
  border-radius: 5px;
  background-color: transparent;

  transition: background-color 500ms;

  p,
  svg {
    font-family: ${(props) => props.theme.fonts.montserrat};
    font-style: normal;
    font-weight: 600;
    font-size: 18px;

    display: flex;
    align-items: center;
    text-align: center;

    color: black;

    transition: color 500ms;
  }

  :hover {
    background-color: ${(props) => props.theme.colors.blue};
    color: white;
    border: white;
    cursor: pointer;

    p,
    svg {
      color: white;
    }
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

  transition: background-color 500ms;

  p {
    font-family: ${(props) => props.theme.fonts.montserrat};
    font-style: normal;
    font-weight: 600;
    font-size: 14px;

    display: flex;
    align-items: center;
    text-align: center;

    color: black;

    transition: 500ms;
  }

  :hover {
    background-color: red;
    color: white;
    border: white;
    cursor: pointer;

    p {
      color: white;
    }
  }
`;
