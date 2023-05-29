import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 133rem;
  height: 100%;
`;

export const DataEntry = styled.div`
  max-width: 119rem;
  width: 90%;
  display: flex;
  justify-content: center;
  gap: 2rem;

  @media (max-width: 730px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const FormColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 35rem;
`;

export const Form = styled.form`
  max-width: 119rem;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  @media (max-width: 750px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const SaveChanges = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  width: 100%;
  max-width: 25rem;
  height: 5rem;

  border: 0.1rem solid #000000;
  border-radius: 0.5rem;
  background-color: transparent;

  padding: 0 1.1rem;
  margin-top: 2%;

  font-family: ${(props) => props.theme.fonts.montserrat};
  font-size: 2rem;
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
    font-size: 1.5rem;

    max-width: 20rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 3rem;
  font-weight: 600;
  font-family: ${(props) => props.theme.fonts.montserrat};
  margin-bottom: 8%;
`;
