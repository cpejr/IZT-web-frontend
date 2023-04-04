import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  padding: 1.25em 2em;
  gap: 2em;
  max-width: 1440px;
  width: 100%;
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

export const AuthorizeButton = styled.button`
  background-color: ${(props) => props.theme.colors.darkGreenishBlue};
  padding: 5px 10px;
  border: none;
  font-size: 0.8em;
  font-weight: 500;
  color: white;
  font-family: ${(props) => props.theme.fonts.montserrat};
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
  grid-template-rows: 50px;
  align-items: center;
  background-color: ${(props) => props.theme.colors.gray.lightGrey};
  padding: 5px 20px;
  h2 {
    font-size: 0.8em;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  border-radius: 18px;
  height: 40px;
  background-color: white;
  padding: 0px 10px;
  width: 100%;
  overflow-x: hidden;
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

  ::placeholder {
    font-size: 1em;
    color: black;
    font-weight: 500;
  }
`;
