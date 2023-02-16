import styled from 'styled-components';
import { Colors, Fonts } from '../../../variables';

const menuBreak = '800px';

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 10%;
  background-color: white;
  @media (max-width: 900px) {
    padding: 18px 5%;
  }
  @media (max-width: ${menuBreak}) {
    padding: 10px 5%;
  }
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  width: auto;
  min-width: 179px;
  h1 {
    font-weight: 500;
    font-size: 1.5rem;
    color: ${Colors.blue};
    @media (max-width: ${menuBreak}) {
      font-size: 1rem;
      font-weight: 600;
    }
  }
`;

export const Image = styled.img`
  width: auto;
  height: 75px;
  @media (max-width: ${menuBreak}) {
    height: 40px;
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
  gap: 40px;
  text-align: center;

  a {
    font-size: 24px;
    font-family: ${Fonts.montserrat};
    margin-right: 20px;
    text-decoration: none;
    color: ${Colors.blue};
    font-weight: 500;
    position: relative;
    flex-direction: row;
    text-align: center;
    :hover {
      text-decoration: underline;
    }
    @media (max-width: 990px) {
      font-size: 20px;
    }
  }
  @media (max-width: 1100px) {
    gap: 20px;
  }
  @media (max-width: ${menuBreak}) {
    background-color: #123645;
    text-align: center;
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    top: ${(props) => (props.bar ? '90px' : '-20rem')};
    padding: ${(props) => (props.bar ? '1rem 0' : '0')};
    left: 5%;
    right: 5%;
    transition: all 400ms ease-in-out;
    a {
      color: #fff;
    }
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
