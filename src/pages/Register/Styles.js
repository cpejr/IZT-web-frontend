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
  padding: 25px 0px;
  font-size: 22px;
`;

export const Container = styled.div`
  width: 93%;
  height: auto;
  max-width: 1340px;
  border-radius: 30px;
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.25);
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em 0.5em;
  gap: 1.4em;
  margin: 5% 0;

  @media (max-width: 390px) {
    padding: 50px 10px;
  }
`;

export const Logo = styled.img`
  width: 4em;
  max-height: 100px;
`;

export const DataEntry = styled.div`
  max-width: 1190px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2.5em;
  margin-bottom: 35px;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.blue};
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-size: 1.5em;
  font-weight: 700;
  text-align: center;

  @media (max-width: ${mobileBreakpoint}) {
    font-size: 1.2em;
  }
`;

export const Subtitle = styled.h1`
  color: black;
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-size: 1em;
  font-weight: 600;
  text-align: center;
  margin-bottom: 5%;
`;

export const FormColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 350px;
`;

export const Form = styled.form`
  max-width: 1190px;
  width: 90%;
  display: wrap;
  justify-content: center;
  margin-top: 3%;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`;
