import styled from 'styled-components';

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 10px;
  gap: 40px;

  position: absolute;
  width: 190px;
  height: 915px;
  left: 0px;
  top: 109px;

  background: ${(props) => props.theme.colors.darkGreenishBlue};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const MenuItem = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
`;

export const MenuLink = styled.div`
  width: 153px;
  height: 60px;
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
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
    right: -20px;
    transform: translateY(-50%) scaleX(-1);
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 12px 0 12px 20px;
    border-color: transparent transparent transparent #123645;
    opacity: ${({ active }) => (active ? 1 : 0)};
    transition: opacity 0.2s ease;
  }
`;
export const Line = styled.div`
  border-bottom: 2px solid #ffffff;
`;

export const MenuImage = styled.div``;
