import styled from 'styled-components';

const mobileBreakpoint = '600px';

export const Page = styled.div`
  background-color: ${(props) => props.theme.colors.gray.mediumGray};
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2.5rem 0rem;
  font-size: 2.2rem;
`;

export const Container = styled.div`
  width: 93%;
  height: auto;
  max-width: 134rem;
  border-radius: 3rem;
  box-shadow: 0rem 0rem 1rem 0.5rem rgba(0, 0, 0, 0.25);
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4.4rem 1.1rem;
  gap: 4rem;
  margin: 5% 0;

  @media (max-width: 390px) {
    padding: 5rem 1rem;
  }
`;

export const Logo = styled.img`
  width: 8.8rem;
  max-height: 10rem;
`;

export const DataEntry = styled.div`
  max-width: 119rem;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 3.5rem;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.blue};
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-size: 3.3rem;
  font-weight: 700;
  text-align: center;

  @media (max-width: ${mobileBreakpoint}) {
    font-size: 2.64rem;
  }
`;

export const Subtitle = styled.h1`
  color: black;
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-size: 2.2rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 5%;
`;

export const FormColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 35rem;
`;

export const Form = styled.form`
  max-width: 119rem;
  width: 90%;
  display: wrap;
  justify-content: center;
  margin-top: 3%;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: fit-content;
`;

export const SubmitButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  width: 100%;
  max-width: 30rem;
  height: 6.7rem;

  border: 0.1rem solid #000000;
  border-radius: 1rem;

  background-color: ${(props) => props.theme.colors.blue};

  margin-top: 2rem;

  font-family: ${(props) => props.theme.fonts.montserrat};
  font-size: 2.2rem;
  font-weight: 600;

  color: white;
  cursor: pointer;

  @media (max-width: 700px) {
    align-items: center;
    justify-content: center;
    width: 100%;
    font-size: 2.2rem;
    height: 3.8rem;
  }
`;
