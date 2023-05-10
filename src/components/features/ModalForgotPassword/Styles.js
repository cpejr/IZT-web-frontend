import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 1330px;
  height: 100%;
`;

export const DataEntry = styled.div`
  max-width: 1190px;
  width: 90%;
  display: flex;
  justify-content: center;
  gap: 1.2em;

  @media (max-width: 730px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const FormColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* gap: 1em; */
  width: 100%;
  max-width: 350px;
`;

export const Form = styled.form`
  max-width: 1190px;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.2em;

  @media (max-width: 750px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const SaveChanges = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  width: 100%;
  max-width: 250px;
  height: 2.5em;

  border: 1px solid #000000;
  border-radius: 5px;
  background-color: transparent;

  padding: 0 0.5em;
  margin-top: 2%;

  font-family: ${(props) => props.theme.fonts.montserrat};
  font-size: 1.4em;
  font-weight: 600;
  color: ${(props) => props.theme.colors.blue};

  cursor: pointer;
  transition-duration: 0.3s;
  :hover {
    background-color: ${(props) => props.theme.colors.blue};
    color: white;
  }

  @media (max-width: 700px) {
    align-items: center;
    justify-content: center;
    width: 90%;
    font-size: 1em;

    max-width: 200px;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.5em;
  font-weight: 600;
  font-family: ${(props) => props.theme.fonts.montserrat};
  margin-bottom: 2%;
`;

export const Subtitle2 = styled.p`
  text-align: center;
  font-size: 1em;
  font-weight: 500;
  font-family: ${(props) => props.theme.fonts.montserrat};
  margin-bottom: 5%;
`;
