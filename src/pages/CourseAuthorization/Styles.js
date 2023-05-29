import { Modal } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 2rem;
  padding: 2.5rem 4rem;
  gap: 4rem;
  max-width: 144rem;
  width: 100%;
  @media (max-width: 700px) {
    padding: 2rem 0.8rem;
    gap: 3rem;
  }
`;

export const PageTitle = styled.h1`
  font-size: 3.2rem;
  font-weight: 600;
  font-family: ${(props) => props.theme.fonts.montserrat};
  @media (max-width: 1100px) {
    font-size: 2.72rem;
  }
  @media (max-width: 800px) {
    font-size: 2.4rem;
  }
  @media (max-width: 700px) {
    padding: 2rem 0.8rem;
    gap: 3rem;
  }
`;

export const AuthorizationDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
`;

export const StyledLink = styled(Link)`
  all: unset;
  cursor: pointer;

  background-color: ${(props) => props.theme.colors.darkGreenishBlue};
  padding: 0.5rem 1rem;
  border: none;
  font-size: 1.6rem;
  font-weight: 500;
  color: white;
  font-family: ${(props) => props.theme.fonts.montserrat};
  @media (max-width: 1100px) {
    font-size: 1.36rem;
  }
  @media (max-width: 800px) {
    font-size: 1.2rem;
  }
`;

export const AuthorizeButton = styled.button`
  background-color: ${(props) => props.theme.colors.darkGreenishBlue};
  padding: 0.5rem 1rem;
  border: none;
  font-size: 1.6rem;
  font-weight: 500;
  color: white;
  font-family: ${(props) => props.theme.fonts.montserrat};
  :hover {
    cursor: pointer;
  }
  @media (max-width: 1100px) {
    font-size: 1.36rem;
  }
  @media (max-width: 800px) {
    font-size: 1.2rem;
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
  grid-template-rows: 5rem;
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
    row-gap: 1rem;
    h2 {
      grid-row: 2;
    }
  }
  @media (max-width: 1100px) {
    grid-template-rows: 4.2rem;
  }
  @media (max-width: 800px) {
    grid-template-rows: 3.75rem;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  border-radius: 1.8rem;
  height: 4rem;
  background-color: white;
  padding: 0rem 1rem;
  width: 100%;
  overflow-x: hidden;
  @media (max-width: 550px) {
    grid-column: 1 / 3;
    grid-row: 1;
  }
  @media (max-width: 1100px) {
    height: 3.8rem;
  }
  @media (max-width: 800px) {
    height: 3rem;
  }
`;

export const SearchBox = styled.input`
  border: none;
  background-color: transparent;
  font-size: 1.6rem;
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
  @media (max-width: 1100px) {
    font-size: 1.36rem;
  }
  @media (max-width: 800px) {
    font-size: 1.2rem;
  }
`;

export const ContentRow = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-template-rows: 5rem;
  align-items: center;
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
    justify-self: end;
  }
  @media (max-width: 930px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 700px) {
    grid-template-columns: 2fr 1fr 1fr;
  }
  @media (max-width: 550px) {
    grid-template-columns: 1fr 1fr 2.5rem;
    padding-left: 0rem;
  }
  @media (max-width: 1100px) {
    grid-template-rows: 4.2rem;
  }
  @media (max-width: 800px) {
    grid-template-rows: 3.75rem;
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
  width: 2.5rem;
  height: 2.5rem;
  justify-self: flex-end;
  :hover {
    cursor: pointer;
  }
`;
