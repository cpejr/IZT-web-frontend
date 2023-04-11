import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LinkContainer = styled(Link)`
  text-decoration: none;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
  width: auto;
  min-width: 179px;

  h1 {
    font-family: ${(props) => props.theme.fonts.montserrat};
    font-weight: 500;
    font-size: 22px;
    color: ${(props) => props.theme.colors.blue};

    @media (max-width: 990px) {
      gap: 5px;
      font-weight: 600;
    }
    @media (max-width: 320px) {
      font-size: 18px;
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
`;
