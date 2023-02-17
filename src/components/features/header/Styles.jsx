import styled from 'styled-components';
import { Colors, Fonts } from '../../../variables';
import Button from '../../../styles/Button';

const menuBreak = '800px';

export const Content = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  padding: 0px 50px;
  height: 100px;
  width: 100%;
  @media (max-width: 420px) {
    padding: 0px 20px;
    height: 80px;
  }
`;

export const InternContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  max-width: 1400px;
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
  width: auto;
  min-width: 179px;
  h1 {
    font-family: ${Fonts.montserrat};
    font-weight: 500;
    font-size: 22px;
    color: ${Colors.blue};
    @media (max-width: 320px) {
      font-size: 18px;
    }
    @media (max-width: 990px) {
      font-size: 18px;
      gap: 5px;
    }
  }
  @media (max-width: 990px) {
    gap: 5px;
  }
`;

export const Image = styled.img`
  width: auto;
  height: 75px;
  @media (max-width: 990px) {
    height: 50px;
  }
  @media (max-width: 320px) {
    height: 50px;
  }
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
  @media (max-width: 1100px) {
    gap: 20px;
  }
`;

export const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  text-align: center;

  a {
    font-size: 22px;
    font-family: ${Fonts.montserrat};
    margin-right: 20px;
    text-decoration: none;
    color: ${Colors.blue};
    position: relative;
    flex-direction: row;
    text-align: center;
    :hover {
      text-decoration: underline;
    }
    @media (max-width: 990px) {
      font-size: 18px;
    }
    @media (max-width: ${menuBreak}) {
      margin-right: 0px;
    }
  }
  @media (max-width: 990px) {
    gap: 10px;
  }
  @media (max-width: ${menuBreak}) {
    background-color: ${Colors.darkGreenishBlue};
    text-align: center;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    top: 100px;
    padding: ${(props) => (props.bar ? '1rem 0' : '0')};
    height: ${(props) => (props.bar ? 'auto' : '0%')};
    left: 0%;
    right: 0%;
    transition: all 400ms ease;
    a {
      color: #fff;
      display: ${(props) => (props.bar ? 'flex' : 'none')};
      transition: all 700ms ease;
    }
    button {
      display: ${(props) => (props.bar ? 'flex' : 'none')};
      transition: all 700ms ease;
    }
  }
  @media (max-width: 420px) {
    top: 80px;
  }
  z-index: 10000;
`;

export const Bar = styled.div`
  width: 26px;
  right: 4%;
  height: 40px;
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
    height: 2px;
    background-color: ${(props) =>
      props.bar ? 'transparent' : Colors.darkGreenishBlue};
    border-radius: 5px;
    transition: all 400ms ease-in-out;
    :before,
    :after {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      background-color: #1d4f69;
      border-radius: 5px;
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

export const ButtonEntrar = styled(Button)`
  font-size: 20px;
  width: 130px;
  @media (max-width: 990px) {
    font-size: 18px;
    width: 120px;
  }
`;

export const LanguageSelector = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 200;
  margin-top: 20px;
  transition: height 1s ease-in-out;
  height: ${(props) => (props.collapse ? 'auto' : '0px')};
  overflow-y: hidden;
  font-family: ${Fonts.montserrat};
  font-weight: 700;
  background-color: white;
  border: 1.5px solid ${Colors.blue};
  border-radius: 5px;
  gap: 3px;
  button {
    border: none;
    background-color: white;
    width: 35px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: ${Fonts.montserrat};
    font-weight: 700;
    :hover {
      cursor: pointer;
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
    background-color: ${Colors.darkGreenishBlue};
    left: 0;
    right: 0;
    text-align: center;
    justify-content: center;
    button {
      font-size: 15px;
      background-color: ${Colors.darkGreenishBlue};
      color: white;
      font-weight: 600;
    }
  }
`;

export const Select = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-family: ${Fonts.montserrat};
  font-weight: 700;
  align-self: center;
  :hover {
    cursor: pointer;
  }
  @media (max-width: ${menuBreak}) {
    display: ${(props) => (props.bar ? 'flex' : 'none')};
    flex-direction: row;
    font-weight: 600;
  }
  p {
    font-size: 15px;
  }
`;

export const Selected = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  min-width: 42px;
  @media (max-width: ${menuBreak}) {
    padding-left: 14px;
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
  gap: 40px;

  @media (max-width: ${menuBreak}) {
    flex-direction: column-reverse;
    justify-content: center;
    gap: 1rem;
  }
`;
