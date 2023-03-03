import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 326px;
  width: 100%;

  @media (max-width: 850px) {
    flex-direction: column;
    height: 500px;
  }
`;

export const SideContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.gray.lightGrey};
  width: 33.33%;
  justify-content: center;
  align-items: center;
  padding: 7%;

  @media (max-width: 850px) {
    width: 100%;
    height: auto;
    padding: 3% 7%;
  }
`;

export const Text = styled.p`
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  text-align: center;
  color: black;
  padding-top: 16px;

  @media (max-width: 850px) {
    font-size: 14px;
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

  @media (max-width: 850px) {
    display: none;
  }
`;

export const Tittle = styled.p`
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;

  color: #203699;

  @media (max-width: 850px) {
    font-size: 16px;
  }
`;

export const SocialMedias = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 5px 0px;
  gap: 10px;
  margin-bottom: 10px;
  margin-top: 15px;

  @media (max-width: 850px) {
    margin-bottom: 20px;
    margin-top: 20px;
  }
`;

export const SocialMediaButton = styled.a`
  all: unset;

  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
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
  font-size: 15px;
  line-height: 18px;

  color: #000000;
  padding-top: 13px;

  &:hover {
    color: ${(props) => props.theme.colors.blue};
  }
`;

export const ButtonMobile = styled.div`
  display: none;
  width: 80%;
  height: 80px;
  font-size: 15px;
  margin-bottom: 40px;

  @media (max-width: 850px) {
    display: flex;
    height: auto;
    justify-content: center;
    margin-top: 0;
    margin-bottom: 20px;
    width: 70%;
  }
`;

export const SectionGoTo = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 850px) {
    padding-bottom: 20px;
  }
`;

export const ContactButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;

  width: 100%;
  height: 62px;
  margin-top: 35px;

  background: ${(props) => props.theme.colors.blue};
  border: 0;
  border-radius: 4px;

  font-family: ${(props) => props.theme.fonts.montserrat};
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.1em;

  color: white;

  transition-duration: 0.3s;
  cursor: pointer;
  :hover {
    background-color: rgba(32, 54, 153, 0.6);
    color: rgba(255, 255, 255, 0.8);
  }

  @media (max-width: 700px) {
    font-size: 15px;
    height: 40px;
    margin-top: 0px;
    max-width: 80%;
  }
  @media (max-width: 1200px) {
    font-size: 16px;
    height: 45px;
  }
  @media (max-width: 320px) {
    max-width: 95%;
  }
`;
