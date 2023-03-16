import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 50px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 390px;
  width: 100%;
  align-self: center;
  gap: 20px;
`;

export const Title = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;

  color: black;
`;

export const Subtitle = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;

  color: black;
`;

export const SmallInput = styled.input`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 8px 11px;
  gap: 10px;

  max-width: 370px;
  width: 100%;
  height: 36px;

  border: 1px solid black;
  border-radius: 4px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
`;

export const SaveButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: center;
  justify-content: center;
  padding: 10px;
  gap: 10px;

  max-width: 250px;
  width: 100%;
  height: 45px;

  border: 1px solid black;
  border-radius: 5px;
  background-color: transparent;

  p {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;

    display: flex;
    align-items: center;
    text-align: center;

    color: black;

    :hover {
      transition: 1s;
      color: white;
    }
  }
  :hover {
    transition: 1s;
    background-color: #203699;
    color: white;
    border: white;
    cursor: pointer;
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

  p {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;

    display: flex;
    align-items: center;
    text-align: center;

    color: black;

    :hover {
      transition: 1s;
      color: white;
    }
  }

  :hover {
    transition: 1s;
    background-color: red;
    color: white;
    border: white;
    cursor: pointer;
  }
`;
