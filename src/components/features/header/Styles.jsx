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
    font-weight: 500;
    font-size: 22px;
    color: ${Colors.blue};
    @media (max-width: 320px) {
      font-size: 18px;
    }
  }
`;

export const Image = styled.img`
  width: auto;
  height: 75px;
  @media (max-width: 990px) {
    height: 60px;
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
      font-size: 20px;
    }
    @media (max-width: 900px) {
      font-size: 18px;
    }
    @media (max-width: 800px) {
      margin-right: 0px;
    }
  }
  @media (max-width: 990px) {
    gap: 10px;
  }
  @media (max-width: ${menuBreak}) {
    background-color: #123645;
    text-align: center;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    top: ${(props) => (props.bar ? '100px' : '-20rem')};
    padding: ${(props) => (props.bar ? '1rem 0' : '0')};
    left: 0%;
    right: 0%;
    transition: all 400ms ease-in-out, top 20ms ease-in-out;
    a {
      color: #fff;
    }
  }
  @media (max-width: 420px) {
    top: ${(props) => (props.bar ? '80px' : '-20rem')};
  }
  z-index: 10000;
`;

export const Language = styled.select`
  display: flex;
  align-items: center;
  border: none;
  option {
    text-decoration: none;
    color: #000;
    font-size: 16px;
    font-weight: 700;
    transition: all 0.3s ease-in-out;
    background-color: white;
  }
  option:hover {
    color: #000;
  }
  @media (max-width: ${menuBreak}) {
    display: none;
  }
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
  @media (max-width: 900px) {
    font-size: 18px;
    width: 120px;
  }
`;
