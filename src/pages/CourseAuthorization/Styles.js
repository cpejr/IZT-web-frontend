import { Modal } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  padding: 1.25em 2em;
  gap: 2em;
  max-width: 1440px;
  width: 100%;

  @media (max-width: 1100px) {
    font-size: 17px;
  }
  @media (max-width: 800px) {
    font-size: 15px;
  }
  @media (max-width: 700px) {
    padding: 1.25em 0.4em;
  }
`;

export const PageTitle = styled.h1`
  font-size: 1.6em;
  font-weight: 600;
  font-family: ${(props) => props.theme.fonts.montserrat};
`;

export const AuthorizationDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1em;
`;

export const StyledLink = styled(Link)`
  all: unset;
  cursor: pointer;

  background-color: ${(props) => props.theme.colors.darkGreenishBlue};
  padding: 5px 10px;
  border: none;
  font-size: 0.8em;
  font-weight: 500;
  color: white;
  font-family: ${(props) => props.theme.fonts.montserrat};
`;

export const AuthorizeButton = styled.button`
  background-color: ${(props) => props.theme.colors.darkGreenishBlue};
  padding: 5px 10px;
  border: none;
  font-size: 0.8em;
  font-weight: 500;
  color: white;
  font-family: ${(props) => props.theme.fonts.montserrat};
  :hover {
    cursor: pointer;
  }
`;

export const Table = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: space-between;
`;

export const TableHeader = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-template-rows: 2.5em;
  align-items: center;
  background-color: ${(props) => props.theme.colors.gray.lightGrey};
  padding: 5px 20px;
  h2 {
    font-size: 0.8em;
    overflow: auto;
  }
  @media (max-width: 930px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 700px) {
    grid-template-columns: 2fr 1fr 1fr;
  }
  @media (max-width: 550px) {
    grid-template-columns: 1fr 1fr;
    grid-auto-columns: 100%;
    padding: 5px 5px;
    grid-template-rows: 3em;
    h2 {
      grid-row: 2;
    }
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  border-radius: 18px;
  height: 2em;
  background-color: white;
  padding: 0px 10px;
  width: 100%;
  overflow-x: hidden;
  @media (max-width: 550px) {
    grid-column: 1 / 3;
    grid-row: 1;
  }
`;

export const SearchBox = styled.input`
  border: none;
  background-color: transparent;
  font-size: 0.8em;
  color: black;
  margin-left: 10px;
  height: auto;
  font-weight: 500;
  font-family: ${(props) => props.theme.fonts.montserrat};
  width: 100%;

  ::placeholder {
    font-size: 1em;
    color: black;
    font-weight: 500;
  }
`;

export const ContentRow = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-template-rows: 2.5em;
  align-items: center;
  padding: 5px 20px;
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-size: 0.8em;
  font-weight: 500;
  justify-items: stretch;

  p {
    padding-left: 10px;
    white-space: nowrap;
    overflow: auto;
    padding-bottom: 5px;
  }
  svg {
    justify-self: end;
  }
  @media (max-width: 930px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 700px) {
    grid-template-columns: 2fr 1fr 1fr;
  }
  @media (max-width: 550px) {
    grid-template-columns: 1fr 1fr 25px;
    padding-left: 0px;
  }
`;

export const MiddleData = styled.p`
  @media (max-width: 550px) {
    text-align: center;
  }
`;

export const ModalStyle = styled(Modal)`
  :where(.css-dev-only-do-not-override-1vtf12y).ant-modal .ant-modal-content {
    background-color: ${(props) => props.theme.colors.darkBlue};
  }
`;

export const EditBtn = styled.button`
  background-color: transparent;
  border: none;
  width: 25px;
  height: 25px;
  :hover {
    cursor: pointer;
  }
`;
