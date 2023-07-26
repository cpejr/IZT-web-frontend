import styled from 'styled-components';

export const TESTEContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 100%;
  max-height: calc(100vh - 10rem);
`;

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.darkBlue};
  width: 100%;
  padding: 4.8rem;
`;

export const Title = styled.div`
  font-family: ${(prop) => prop.theme.fonts.montserrat};
  font-size: 2.4rem;
  font-weight: 600;
  color: white;
`;

export const ReportsArea = styled.div`
  margin: 4rem;
  max-width: 120rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  max-height: calc(90vh - 17rem);
  height: auto;
  padding: 1.6rem;
  @media (max-width: 1100px) {
    margin: 3.2rem;
  }
  @media (max-width: 1380px) {
    width: 105rem;
  }
  @media (max-width: 1270px) {
    width: 75rem;
  }
  @media (max-width: 1000px) {
    width: 65rem;
  }
  @media (max-width: 910px) {
    width: 60rem;
  }
  @media (max-width: 800px) {
    width: 50rem;
  }
`;

export const Reports = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-y: auto;
  gap: 0.8rem;

  /* Scrollbar style */
  ::-webkit-scrollbar {
    width: 0.8rem;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.gray.darkGray};
    border-radius: 0.8rem;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const ReportsHeader = styled.div`
  background-color: white;
  width: 100%;
  height: 5rem;
  min-height: 5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 4.8rem;
  padding-right: 1.6rem;
`;

export const ReportsTitle = styled.div`
  font-family: ${(prop) => prop.theme.fonts.montserrat};
  font-size: 2rem;
  font-weight: 600;
  color: black;
`;

export const SearchDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 2rem;
  background-color: ${(props) => props.theme.colors.darkGreenishBlue};
  width: 23rem;
  height: 3.5rem;
  padding: 0rem 1.6rem;
  gap: 1.6rem;
  svg {
    color: white;
  }
`;

export const Search = styled.input`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: transparent;
  border: none;
  color: white;
  font-family: ${(prop) => prop.theme.fonts.montserrat};
  font-size: 1.6rem;
  font-weight: 500;
  &::placeholder {
    color: white;
    font-family: ${(prop) => prop.theme.fonts.montserrat};
    font-size: 1.6rem;
    font-weight: 500;
  }
`;
