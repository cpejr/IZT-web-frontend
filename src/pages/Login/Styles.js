import styled from 'styled-components';

const breakValue = '700px';

export const Page = styled.div`
  background-color: ${(props) => props.theme.colors.gray[1]};
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 25px 0px;
  font-size: 22px;
  @media (max-width: ${breakValue}) {
    font-size: 15px;
  }
`;

export const Container = styled.div`
  width: 90%;
  height: auto;
  max-width: 600px;
  border-radius: 30px;
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.25);
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em 0.5em;
  gap: 1.4em;
  @media (max-width: ${breakValue}) {
    padding: 50px 10%;
    @media (min-width: 550px) {
      width: 70%;
    }
  }
  @media (max-width: 390px) {
    padding: 50px 10px;
  }
`;

export const Logo = styled.img`
  width: 4em;
  max-height: 100px;
`;

export const DataEntry = styled.div`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2em;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.blue};
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-size: 1.5em;
  font-weight: 700;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  width: 100%;
`;

export const RemeberMe = styled.a`
  font-size: 0.7em;
  font-family: ${(props) => props.theme.fonts.montserrat};
  color: ${(props) => props.theme.colors.gray[3]};
  font-weight: 600;
  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
  @media (max-width: ${breakValue}) {
    font-weight: 700;
  }
`;

export const SignUpLink = styled.p`
  font-size: 0.7em;
  font-family: ${(props) => props.theme.fonts.montserrat};
  color: black;
  font-weight: 700;
  text-align: center;
  :hover {
    cursor: default;
  }
  a {
    color: ${(props) => props.theme.colors.blue};
    text-decoration: none;
    :hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
  @media (max-width: 315px) {
    width: 200px;
  }
`;

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  align-items: center;
  text-align: center;
`;
