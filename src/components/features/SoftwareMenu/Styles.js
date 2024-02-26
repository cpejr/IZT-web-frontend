import { FaCogs } from 'react-icons/fa';
import { GiCarWheel, GiBackwardTime } from 'react-icons/gi';
import styled from 'styled-components';

export const CarWheel = styled(GiCarWheel)`
  color: white;
  font-size: 70px;

  @media (max-width: 1330px) {
    font-size: 60px;
  }
  @media (max-width: 900px) {
    font-size: 50px;
  }
`;
export const BackwardTime = styled(GiBackwardTime)`
  color: white;
  font-size: 70px;

  @media (max-width: 1330px) {
    font-size: 60px;
  }
  @media (max-width: 900px) {
    font-size: 50px;
  }
`;
export const Cogs = styled(FaCogs)`
  color: white;
  font-size: 70px;

  @media (max-width: 1330px) {
    font-size: 60px;
  }
  @media (max-width: 900px) {
    font-size: 50px;
  }
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 10px;
  gap: 40px;

  width: 12.5%;
  height: 100%;
  left: 0px;
  top: 109px;

  background: ${(props) => props.theme.colors.darkGreenishBlue};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
  @media (max-width: 1000px) {
    width: 15.5%;
  }
`;

export const MenuItem = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  width: 100%;

  cursor: pointer;
`;

export const MenuLink = styled.div`
  width: 100%;
  height: 60px;
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-style: normal;
  font-weight: 600;
  font-size: ${(props) =>
    // eslint-disable-next-line no-nested-ternary
    props.language === 'PT'
      ? '24px'
      : props.language === 'DE'
      ? '18px'
      : '24px'};
  line-height: 29px;
  text-align: center;
  padding-top: 10px;

  padding-bottom: 80px;
  border-bottom: 2px solid #ffffff;

  color: #ffffff;
  text-decoration: none;

  position: relative;

  &:after {
    content: '';
    position: absolute;
    top: 0%;
    right: -7%;
    transform: translateY(-50%) scaleX(-1);
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 12px 0 12px 20px;
    border-color: transparent transparent transparent #123645;
    opacity: ${({ active }) => (active ? 1 : 0)};
    transition: opacity 0.2s ease;
  }

  @media (max-width: 1180px) {
    font-size: 20px;
  }
  @media (max-width: 1330px) {
    font-size: 18px;
  }

  @media (max-width: 1000px) {
    &:after {
      right: -9%;
    }
  }
  @media (max-width: 900px) {
    font-size: 15px;
  }
`;

export const Line = styled.div`
  border-bottom: 2px solid #ffffff;
  width: 100%;
`;

export const MenuImage = styled.div``;
