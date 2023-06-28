import styled from 'styled-components';

import { Button } from '../../common';

const menuBreak = '900px';

export const Content = styled.div`
  display: flex;
  justify-content: center;

  padding: 0rem 5rem;

  height: 10rem;
  width: 100%;

  background-color: white;
  border-bottom: 0.2rem solid ${(props) => props.theme.colors.blue};

  @media (max-width: 420px) {
    padding: 0rem 2rem;
    height: 8rem;
  }
`;

export const InternContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  max-width: 140rem;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4rem;
  @media (max-width: 1100px) {
    gap: 2rem;
  }
`;

export const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: justify;
  gap: 2rem;
  a {
    font-size: 2.2rem;
    font-family: ${(props) => props.theme.fonts.montserrat};
    text-decoration: none;
    color: ${(props) => props.theme.colors.blue};
    position: relative;
    flex-direction: row;
    flex-grow: 1;
    :hover {
      text-decoration: underline;
    }
    @media (max-width: 1080px) {
      font-size: 1.8rem;
    }
    @media (max-width: ${menuBreak}) {
      margin-right: 0rem;
    }
  }
  @media (max-width: 990px) {
    gap: 1rem;
  }
  @media (max-width: ${menuBreak}) {
    background-color: ${(props) => props.theme.colors.darkGreenishBlue};
    text-align: center;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    top: 10rem;
    padding: ${(props) => (props.bar ? '1rem 0' : '0rem')};
    height: auto;
    max-height: ${(props) => (props.bar ? '50rem' : '0rem')};
    left: 0%;
    right: 0%;
    transition: all 400ms ease;
    font-weight: 600;
    z-index: 10000;
    overflow-y: hidden;
    a {
      color: #fff;
      display: flex;
    }
    button {
      transition: all 700ms ease;
      font-weight: 600;
    }
  }
  @media (max-width: 420px) {
    top: 8rem;
  }
`;

export const Bar = styled.div`
  width: 2.6rem;
  right: 4%;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  display: none;
  cursor: pointer;
  z-index: 100;
  @media (max-width: ${menuBreak}) {
    display: flex;
  }
  span {
    position: absolute;
    width: 100%;
    height: 0.2rem;
    background-color: ${(props) =>
      props.bar ? 'transparent' : props.theme.colors.darkGreenishBlue};
    border-radius: 0.5rem;
    transition: all 400ms ease-in-out;
    :before,
    :after {
      content: '';
      position: absolute;
      width: 100%;
      height: 0.2rem;
      background-color: #1d4f69;
      border-radius: 0.5rem;
    }
    :before {
      transform: ${(props) =>
        props.bar ? `rotate(-45deg)` : `translateY(8px)`};
      transition: all 400ms ease-in-out;
    }
    :after {
      transform: ${(props) =>
        props.bar ? `rotate(45deg)` : `translateY(-8px)`};
      transition: all 400ms ease-in-out;
    }
  }
`;

export const ButtonLogin = styled(Button)`
  font-size: 2rem;
  width: 13rem;
  @media (max-width: 990px) {
    font-size: 1.8rem;
    width: 12rem;
  }
  @media (max-width: ${menuBreak}) {
    display: ${(props) => (props.collapse ? 'flex' : 'none')};
  }
`;

export const LanguageSelector = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 200;
  margin-top: 2rem;
  transition: height 1s ease-in-out;
  height: ${(props) => (props.collapse ? 'auto' : '0rem')};
  overflow-y: hidden;
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-weight: 700;
  background-color: white;
  border: 0.15rem solid ${(props) => props.theme.colors.blue};
  border-radius: 0.5rem;
  gap: 0.3rem;
  button {
    border: none;
    background-color: white;
    width: 3.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: ${(props) => props.theme.fonts.montserrat};
    font-weight: 700;
    :hover {
      cursor: pointer;
    }
    p {
      font-family: ${(props) => props.theme.fonts.montserrat};
      font-weight: 700;
      :hover {
        cursor: pointer;
        text-decoration: underline;
        text-decoration-color: ${(props) => props.theme.colors.blue};
        text-decoration-thickness: 0.2rem;
      }
    }
  }
  @media (max-width: ${menuBreak}) {
    flex-direction: row;
    border: none;
    width: auto;
    font-weight: 600;
    height: auto;
    display: ${(props) => (props.collapse ? 'flex' : 'none')};
    transition: display 500ms ease-in-out;
    margin-top: 0;
    background-color: ${(props) => props.theme.colors.darkGreenishBlue};
    left: 0;
    right: 0;
    text-align: center;
    justify-content: center;
    button {
      font-size: 1.5rem;
      background-color: ${(props) => props.theme.colors.darkGreenishBlue};
      color: white;
      font-weight: 600;
      p {
        font-family: ${(props) => props.theme.fonts.montserrat};
        font-weight: 700;
        :hover {
          cursor: pointer;
          text-decoration: underline;
          text-decoration-color: white;
          text-decoration-thickness: 0.2rem;
        }
      }
    }
  }
`;

export const Select = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-weight: 700;
  align-self: center;
  :hover {
    cursor: pointer;
    text-decoration: underline;
    text-decoration-color: ${(props) => props.theme.colors.blue};
    text-decoration-thickness: 0.2rem;
  }
  @media (max-width: ${menuBreak}) {
    display: flex;
    flex-direction: row;
    font-weight: 600;
    :hover {
      text-decoration: underline;
      text-decoration-color: white;
      text-decoration-thickness: 0.2rem;
    }
  }
  p {
    font-size: 1.5rem;
  }
`;

export const Selected = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  min-width: 4.2rem;
  @media (max-width: ${menuBreak}) {
    padding-left: 1.4rem;
    svg {
      color: white;
    }
    p {
      text-align: center;
      color: white;
    }
  }
`;

export const InvertItems = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4rem;

  @media (max-width: ${menuBreak}) {
    flex-direction: column-reverse;
    justify-content: center;
    gap: 1rem;
  }
`;

export const Welcome = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0rem;
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-size: 2.2rem;
  font-weight: 700;
  a {
    margin-right: 0.5rem;
  }
  @media (max-width: 1080px) {
    font-size: 1.8rem;
  }
  @media (max-width: ${menuBreak}) {
    text-align: center;
    font-weight: 600;
  }
`;

export const Divider = styled.div`
  background-color: white;
  height: 0.2rem;
  display: flex;
  max-height: ${(props) => (props.collapse ? '1rem' : '0rem')};
  align-self: stretch;
  overflow-y: hidden;
  transition: all 400ms ease-in-out;
`;

export const MenuProfile = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.5s ease-in-out 0.5s;
  div {
    svg {
      transform: ${(props) =>
        props.collapse ? 'rotate(180deg)' : 'rotate(0deg)'};
      transition: all 400ms ease-in-out;
    }
  }
`;

export const MyProfile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;

  button {
    background-color: transparent;
    border: none;
    max-height: none;
    color: white;
    font-family: ${(props) => props.theme.fonts.montserrat};
    font-size: 1.8rem;
    :hover {
      cursor: pointer;
      text-decoration: underline solid white 0.2rem;
    }
  }
  svg {
    :hover {
      cursor: pointer;
    }
  }
`;

export const LogoutBtn = styled.button`
  border: none;
  border-left: 0.2rem solid ${(props) => props.theme.colors.blue};
  color: ${(props) => props.theme.colors.blue};
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-weight: 500;
  text-decoration: none;
  background-color: transparent;
  padding-left: 0.5rem;
  display: flex;
  align-items: center;
  font-size: 2.2rem;
  :hover {
    text-decoration: underline solid ${(props) => props.theme.colors.blue}
      0.2rem;
    cursor: pointer;
  }

  @media (max-width: ${menuBreak}) {
    border-left: none;
    color: white;
    font-weight: 500;
    padding-left: 0rem;
    display: flex;
    max-height: ${(props) => (props.collapse ? '10rem' : '0rem')};
    overflow-y: hidden;
    :hover {
      text-decoration-color: white;
      text-decoration-thickness: 0.1rem;
    }
  }
  @media (max-width: 1080px) {
    font-size: 1.8rem;
  }
  transition: all 400ms ease-in-out;
`;
