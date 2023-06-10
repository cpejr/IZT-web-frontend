import styled from 'styled-components';

// apagar depois
export const TESTEContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 100%;
`;
// apagar depois
export const TESTEMenu = styled.div`
  width: 20rem;
`;

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.darkBlue};
  width: 100%;
  height: 100%;
  padding: 3rem;
  overflow-y: hidden;
`;

export const Title = styled.div`
  font-family: ${(prop) => prop.theme.fonts.montserrat};
  font-size: 2.4rem;
  font-weight: 600;
  color: white;
`;

export const ReportsArea = styled.div`
  margin: 4rem;
  max-width: 110rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

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

export const ReportsHeader = styled.div`
  background-color: white;
  width: 100%;
  height: 5rem;
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
