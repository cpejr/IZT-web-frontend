import styled from 'styled-components';

// apagar depois
export const TESTEContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 100%;
  max-height: (100vh - 10rem);
`;

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.darkBlue};
  width: 100%;
  padding-top: 3rem;
  padding-right: 3rem;
  padding-bottom: 0rem;
  padding-left: 3rem;
`;

export const Title = styled.div`
  font-family: ${(prop) => prop.theme.fonts.montserrat};
  font-size: 2.4rem;
  font-weight: 600;
  color: white;
`;

export const ReportsArea = styled.div`
  margin-top: 4rem;
  margin-right: 4rem;
  margin-bottom: 0rem;
  margin-left: 4rem;
  max-width: 110rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-height: calc(96vh - 18rem);
  height: auto;
  padding-top: 1rem;
  padding-right: 1rem;
  padding-bottom: 0rem;
  padding-left: 1rem;
  @media (max-width: 1100px) {
    margin: 3rem;
  }
  @media (max-width: 970px) {
    margin: 2rem;
  }
  @media (max-width: 880px) {
    margin: 2rem;
  }
  @media (max-width: 820px) {
    margin: 1rem;
  }
`;

export const Reports = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-y: scroll;
  gap: 0.5rem;
  ::-webkit-scrollbar {
    width: 0.5rem;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: transparent;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.gray.darkGray};
    border-radius: 0.5rem;
  }

  /* Handle on hover */
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
  padding-left: 3rem;
  padding-right: 1rem;
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
  padding: 0rem 1rem;
  gap: 1rem;
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
