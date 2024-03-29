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
  gap: 2.64rem;

  @media (max-width: 730px) {
    flex-direction: column;
    align-items: center;
    gap: 1.8rem;
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
  gap: 2.64rem;

  @media (max-width: 750px) {
    flex-direction: column;
    align-items: center;
    gap: 1.8rem;
  }
`;

export const SaveChanges = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  width: 100%;
  max-width: 20rem;
  height: 4.5rem;

  border: 0.1rem solid #000000;
  border-radius: 0.5rem;
  background-color: transparent;

  /* padding: 0 1.1rem; */
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
    height: 3.75rem;
    max-width: 15rem;
    padding: 0 0.75rem;
  }
`;

export const Title = styled.p`
  font-size: 2.2rem;
  font-weight: 600;
  font-family: ${(props) => props.theme.fonts.montserrat};
  margin-bottom: 2%;
  text-align: center;
  @media (max-width: 700px) {
    font-size: 2.25rem;
  }
`;

export const Subtitle = styled.p`
  text-align: center;
  font-size: 1.5rem;
  font-weight: 500;
  font-family: ${(props) => props.theme.fonts.montserrat};
  margin-bottom: 5%;
  @media (max-width: 700px) {
    font-size: 1.5rem;
  }
`;
