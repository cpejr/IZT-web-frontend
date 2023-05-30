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
  gap: 1.5rem;

  width: 100%;

  margin-bottom: 5rem;
`;

export const Title = styled.p`
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-style: normal;
  font-weight: 700;
  font-size: 2rem;
  line-height: 2.4rem;
  padding-bottom: 1rem;

  color: black;
`;

export const Subtitle = styled.p`
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-style: normal;
  font-weight: 500;
  font-size: 2rem;
  line-height: 2.4rem;

  color: black;
`;

export const Input = styled.input`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0.8rem 1.1rem;
  gap: 1rem;

  border: ${({ error }) => (error ? '0.2rem solid red' : '0.1rem solid black')};
  border-radius: 0.4rem;

  max-width: 100%;
  width: 100%;
  height: 3.6rem;

  font-family: ${(props) => props.theme.fonts.montserrat};
  font-style: normal;
  font-weight: 400;
  font-size: 1.6rem;
`;

export const TextArea = styled.textarea`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0.8rem 1.1rem;
  gap: 1rem;

  border: ${({ error }) => (error ? '0.2rem solid red' : '0.1rem solid black')};
  border-radius: 0.4rem;

  max-width: 100%;
  width: 100%;
  height: 25rem;

  font-family: ${(props) => props.theme.fonts.montserrat};
  font-style: normal;
  font-weight: 400;
  font-size: 1.6rem;
  resize: none;
`;

export const ErrorMessage = styled.p`
  font-weight: 700;
  color: red;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-top: 1rem;
  width: 100%;
`;

export const MiniText = styled.p`
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-style: normal;
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 1.7rem;

  padding-bottom: 0.6rem;

  color: black;
`;

export const PicturesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  gap: 1rem;
`;

export const DocumentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;

  width: 100%;
  max-width: 35rem;
`;

export const CategorySection = styled.div`
  display: flex;

  gap: 2.5rem;
  width: 100%;

  @media (max-width: 361px) {
    align-items: start;
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export const SaveButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: center;
  justify-content: center;
  padding: 1rem;
  gap: 1rem;
  margin-top: 1rem;

  width: 19.1rem;
  height: 4.5rem;

  border: 0.1rem solid black;
  border-radius: 0.5rem;
  background-color: transparent;

  p {
    font-family: ${(props) => props.theme.fonts.montserrat};
    font-style: normal;
    font-weight: 600;
    font-size: 1.8rem;

    display: flex;
    align-items: center;
    text-align: center;

    color: black;

    transition: 500ms;
  }
  :hover {
    transition: 500ms;
    background-color: ${(props) => props.theme.colors.blue};
    color: white;
    border: white;
    cursor: pointer;

    p {
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
  padding: 0.5rem 1rem;
  gap: 1rem;
  text-decoration: none;
  width: 8.4rem;
  height: 2.7rem;

  border: 0.1rem solid #000000;
  border-radius: 0.5rem;
  background-color: transparent;

  p {
    font-family: ${(props) => props.theme.fonts.montserrat};
    font-style: normal;
    font-weight: 600;
    font-size: 1.4rem;

    display: flex;
    align-items: center;
    text-align: center;

    color: black;

    transition: 500ms;
  }

  :hover {
    transition: 500ms;
    background-color: red;
    color: white;
    border: white;
    cursor: pointer;

    p {
      color: white;
    }
  }
`;
