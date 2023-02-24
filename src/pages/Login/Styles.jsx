import styled from 'styled-components';

const breakValue = '700px';

export const Page = styled.div`
  background-color: ${(props) => props.theme.colors.gray[1]};
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 45px;
  padding-bottom: 60px;
  font-size: 20px;
  @media (max-width: ${breakValue}) {
    font-size: 10px;
  }
`;

export const Container = styled.div`
  width: 90%;
  height: 800px;
  max-width: 650px;
  border-radius: 30px;
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.25);
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 10px;
  gap: 65px;
`;

export const Logo = styled.img`
  width: 5em;
  max-height: 100px;
`;

export const DataEntry = styled.div`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5em;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.blue};
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-size: 1.9em;
  font-weight: 700;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5em;
  width: 100%;
`;

export const Button = styled.button`
  color: white;
  background-color: ${(props) => props.theme.colors.blue};
  border-radius: 10px;
  padding: 1em 0px;
  max-width: 300px;
  width: 70%;
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-weight: 700;
  font-size: 1.2em;
  margin-top: 20px;
  border: none;
  border: 2px solid ${(props) => props.theme.colors.blue};
  :hover {
    color: ${(props) => props.theme.colors.blue};
    background-color: white;
    border: 2px solid ${(props) => props.theme.colors.blue};
  }
`;
