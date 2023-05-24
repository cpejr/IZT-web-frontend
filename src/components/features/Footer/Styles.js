import { Link } from 'react-router-dom';
import styled from 'styled-components';

const mobileBreakPoint = '850px';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 30rem;
  width: 100%;

  @media (max-width: ${mobileBreakPoint}) {
    flex-direction: column;
  }
`;

export const SideContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.gray.lightGrey};
  width: 33.33%;
  justify-content: center;
  align-items: center;
  padding: 0% 7%;

  @media (max-width: ${mobileBreakPoint}) {
    width: 100%;
    height: auto;
    padding: 3% 7%;
  }
`;

export const LogoSection = styled.div`
  @media (max-width: ${mobileBreakPoint}) {
    padding-top: 3rem;
  }
`;

export const Text = styled.p`
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-style: normal;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 1.8rem;
  text-align: center;
  color: black;
  padding-top: 1.6rem;

  @media (max-width: ${mobileBreakPoint}) {
    font-size: 1.4rem;
  }
`;

export const MiddleContainer = styled.div`
  background-color: ${(props) => props.theme.colors.gray.mediumGrey};
  width: 33.33%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0% 7%;

  @media (max-width: ${mobileBreakPoint}) {
    display: none;
  }
`;

export const Tittle = styled.p`
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-style: normal;
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 2.2rem;

  color: #203699;

  @media (max-width: ${mobileBreakPoint}) {
    font-size: 1.6rem;
  }
`;

export const SocialMedias = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 0rem;
  gap: 1rem;
  margin-bottom: 1rem;
  margin-top: 1.5rem;

  @media (max-width: ${mobileBreakPoint}) {
    margin-bottom: 2rem;
    margin-top: 2rem;
  }
`;

export const SocialMediaButton = styled.a`
  all: unset;

  align-items: center;
  justify-content: center;
  text-align: center;
  width: 3.8rem;
  height: auto;
  border: none;
  background: none;

  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.colors.blue};
  }
`;

export const GoTo = styled(Link)`
  text-decoration: none;

  font-family: ${(props) => props.theme.fonts.montserrat};
  font-style: normal;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 1.8rem;

  color: #000000;
  padding-top: 1.3rem;

  &:hover {
    color: ${(props) => props.theme.colors.blue};
  }
`;

export const ButtonMobile = styled.div`
  display: none;
  width: 80%;
  height: 8rem;
  font-size: 1.5rem;
  margin-bottom: 4rem;

  @media (max-width: ${mobileBreakPoint}) {
    display: flex;
    height: auto;
    justify-content: center;
    margin-top: 0;
    margin-bottom: 2rem;
    width: 70%;
  }
`;

export const SectionGoTo = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: ${mobileBreakPoint}) {
    padding-bottom: 2rem;
    /* display: none; */
  }
`;

export const ContactButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;

  width: 100%;
  height: 6.2rem;
  margin-top: 3.5rem;

  background: ${(props) => props.theme.colors.blue};
  border: 0;
  border-radius: 0.4rem;

  font-family: ${(props) => props.theme.fonts.montserrat};
  font-style: normal;
  font-weight: 600;
  font-size: 2rem;
  line-height: 2.4rem;
  text-align: center;
  letter-spacing: 0.2rem;

  color: white;

  transition-duration: 0.3s;
  cursor: pointer;
  :hover {
    background-color: rgba(32, 54, 153, 0.6);
    color: rgba(255, 255, 255, 0.8);
  }

  @media (max-width: 700px) {
    font-size: 1.5rem;
    letter-spacing: 0.15rem;
    height: 4rem;
    margin-top: 0rem;
    max-width: 80%;
  }
  @media (max-width: 1200px) {
    font-size: 1.6rem;
    letter-spacing: 0.16rem;
    height: 4.5rem;
  }
  @media (max-width: 320px) {
    max-width: 95%;
  }
`;
