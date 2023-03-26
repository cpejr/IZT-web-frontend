import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  width: 95%;
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

export const SmallInput = styled.input`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 8px 11px;
  gap: 10px;

  max-width: 100%;
  width: 100%;
  height: 36px;

  border: 1px solid black;
  border-radius: 4px;

  font-family: ${(props) => props.theme.fonts.montserrat};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
`;

export const BigInput = styled.textarea`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 8px 11px;
  gap: 10px;

  max-width: 100%;
  width: 100%;
  height: 250px;

  border: 1px solid black;
  border-radius: 4px;

  font-family: ${(props) => props.theme.fonts.montserrat};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  resize: none;
`;

export const MiniText = styled.p`
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  /* padding-top: 10px; */

  color: black;
`;

export const AddButton = styled.button`
  cursor: pointer;

  display: flex;
  justify-content: baseline;
  align-items: center;

  width: 180px;
  height: 30px;
  background-color: transparent;
  border: none;

  svg {
    color: black;
    padding-right: 5px;
  }
`;

export const AddButtonText = styled.p`
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-style: normal;
  font-weight: 500;
  font-size: 16px;

  color: black;
`;

export const CategorySection = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
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

  p {
    font-family: ${(props) => props.theme.fonts.montserrat};
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
    background-color: ${(props) => props.theme.colors.blue};
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
    font-family: ${(props) => props.theme.fonts.montserrat};
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
