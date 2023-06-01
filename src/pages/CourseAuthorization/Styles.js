import { Modal } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 2rem;
  padding: 1.25em 2em;
  gap: 2em;

  height: 100%;
  width: 100%;
  max-width: 144rem;

  @media (max-width: 1100px) {
    font-size: 1.7rem;
  }
  @media (max-width: 800px) {
    font-size: 1.5rem;
  }
  @media (max-width: 700px) {
    padding: 1.25rem 0.4rem;
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

export const EditLink = styled(Link)`
  all: unset;
  cursor: pointer;
`;

export const AuthorizeButton = styled.button`
  background-color: ${(props) => props.theme.colors.darkGreenishBlue};
  padding: 0.5rem 1rem;
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
  padding: 0.5rem 2rem;
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
    padding: 0.5rem 0.5rem;
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

  border-radius: 1.8rem;
  height: 2em;
  background-color: white;
  padding: 0rem 1rem;
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
  margin-left: 1rem;
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
  grid-template-columns: 2.17fr 2fr 0.12fr 0.12fr;
  grid-template-rows: 2.5em;
  align-items: center;
  align-content: center;
  padding: 0.5rem 2rem;
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-size: 0.8em;
  font-weight: 500;
  justify-items: stretch;

  p {
    padding-left: 1rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-bottom: 0.5rem;
  }
  svg {
    justify-self: center;
  }
  @media (max-width: 930px) {
    grid-template-columns: 1.5fr 2fr 0.5fr 0.5fr;
  }
  @media (max-width: 700px) {
    grid-template-columns: 2fr 1.5fr 0.3fr 0.3fr;
  }
  @media (max-width: 550px) {
    grid-template-columns: 2fr 1.5fr 0.3fr 0.3fr;
    padding-left: 0;
  }
`;

export const MiddleData = styled.p`
  @media (max-width: 550px) {
    text-align: center;
  }
`;

export const ModalStyle = styled(Modal)`
  .ant-modal-content {
    background-color: ${(props) => props.theme.colors.darkBlue} !important;
  }
`;

export const EditBtn = styled.button`
  background-color: transparent;
  border: none;
  justify-self: center;
  :hover {
    cursor: pointer;
  }
`;

export const DeleteButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  justify-self: flex-end;

  svg {
    height: 2.3rem;
    width: 2.3rem;
  }
`;
