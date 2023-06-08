import { Link } from 'react-router-dom';
import styled from 'styled-components';

const breakValue = '700px';

export const Page = styled.div`
  background-color: ${(props) => props.theme.colors.gray.mediumGray};
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2.5rem 0rem;
`;

export const Container = styled.div`
  width: 90%;
  height: auto;
  max-width: 60rem;
  border-radius: 3rem;
  box-shadow: 0rem 0rem 1rem 0.5rem rgba(0, 0, 0, 0.25);
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4.4rem 1.1rem;
  gap: 3rem;
  @media (max-width: ${breakValue}) {
    padding: 5rem 10%;
    @media (min-width: 550px) {
      width: 70%;
    }
  }
  @media (max-width: 390px) {
    padding: 5rem 1rem;
  }
`;

export const Logo = styled.img`
  width: 8.8rem;
  max-height: 10rem;
  @media (max-width: ${breakValue}) {
    width: 6rem;
  }
`;

export const DataEntry = styled.div`
  max-width: 50rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.64rem;
  @media (max-width: ${breakValue}) {
    gap: 1.8rem;
  }
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.blue};
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-size: 3.3rem;
  font-weight: 700;
  text-align: center;
  @media (max-width: ${breakValue}) {
    font-size: 2.25rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.2rem;
  width: 100%;
  @media (max-width: ${breakValue}) {
    gap: 1.5rem;
  }
`;

export const SubmitButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  width: 100%;
  max-width: 30rem;
  height: 5.3rem;

  border: 0.1rem solid #000000;
  border-radius: 1rem;

  background-color: ${(props) => props.theme.colors.blue};

  margin-top: 2rem;

  font-family: ${(props) => props.theme.fonts.montserrat};
  font-size: 2.2rem;
  font-weight: 600;

  color: white;
  cursor: pointer;

  @media (max-width: ${breakValue}) {
    align-items: center;
    justify-content: center;
    width: 100%;
    font-size: 1.5rem;
    height: 3.8rem;
  }
`;

export const ForgotPassword = styled(Link)`
  all: unset;

  font-size: 1.54rem;
  font-family: ${(props) => props.theme.fonts.montserrat};
  color: ${(props) => props.theme.colors.gray.darkGray};
  font-weight: 600;
  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
  @media (max-width: ${breakValue}) {
    font-weight: 700;
    font-size: 1.05rem;
  }
`;

export const SignUpLink = styled.p`
  font-size: 1.54rem;
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
  @media (max-width: ${breakValue}) {
    font-size: 1.05rem;
  }
  @media (max-width: 315px) {
    width: 20rem;
  }
`;

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  align-items: center;
  text-align: center;
  @media (max-width: ${breakValue}) {
    gap: 0.75rem;
  }
`;
