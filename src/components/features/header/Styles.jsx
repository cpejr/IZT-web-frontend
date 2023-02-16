import styled from 'styled-components';
import { Colors, Fonts } from '../../../variables';

export const Content = styled.div`
  padding: 0 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 0;
  background-color: #fff;
  .shadow {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: #0000009e;
    z-index: 1;
    display: ${(props) => (props.bar ? 'block' : 'none')};
  }
`;
export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  span {
    font-size: 1.8rem;
    color: #01be96;
  }
  h1 {
    font-weight: 600;
    font-size: 1.2rem;
  }
`;
export const Nav = styled.div`
  display: flex;
  align-items: center;
  padding: 1em 2em;
  gap: 40px;
  left: 732px;
  margin-left: auto;
  margin-right: 5%;
  text-align: right;

  a {
    font-size: 24px;
    font-family: ${Fonts.montserrat};
    margin-right: 20px;
    text-decoration: none;
    color: #203699;
    font-weight: 500;
    position: relative;
    flex-direction: row;

    :before {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      right: 0;
      background-color: #fff;
      height: 2px;
      transform: scale(0);
      transform-origin: right;
      transition: transform 400ms ease-in-out;
    }
    :hover {
      opacity: 0.6;
    }
    :hover:before {
      transform: scale(1);
      transform-origin: left;
    }
  }
  @media (max-width: 650px) {
    background-color: #123645;
    text-align: center;
    position: absolute;
    display: flex;
    flex-direction: column;s
    gap: 1rem;
    top: ${(props) => (props.bar ? '90px' : '-20rem')};
    padding: ${(props) => (props.bar ? '1rem 0' : '0')};
    left: 5%;
    right: 5%;
    transition: all 400ms ease-in-out;
    a {
      color: #fff;
    }
    .Login {
      border: none;
    }
  }
  z-index: 10000;
`;
export const Login = styled.a`
  background-color: transparent;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  width: 140px;
  text-align: center;
  border: 1.5px solid #203699;
  @media (max-width: 650px) {
    border: none;
  }

  &:hover {
    background-color: #203699;
    color: #fff;
    cursor: pointer;
  }
`;

export const Language = styled.div`
  display: flex;
  align-items: center;
  padding: 50px;
  a {
    margin-left: 10px;
    text-decoration: none;
    color: #000;
    font-size: 16px;
    font-weight: 700;
    transition: all 0.3s ease-in-out;
  }
  a:hover {
    color: #000;
  }
  @media (max-width: 650px) {
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
  @media (max-width: 650px) {
    display: flex;
  }
  span {
    position: absolute;
    width: 80%;
    height: 2px;
    background-color: ${(props) => (props.bar ? 'transparent' : `#1D4F69`)};
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
export const Image = styled.img`
  width: auto;
  height: 81px;
  left: 82px;
  padding: 0 10%;
`;
