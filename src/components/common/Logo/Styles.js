import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LinkContainer = styled(Link)`
  text-decoration: none;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.5rem;
  width: auto;
  min-width: 17.9rem;

  h1 {
    font-family: ${(props) => props.theme.fonts.montserrat};
    font-weight: 500;
    font-size: 2.2rem;
    color: ${(props) => props.theme.colors.blue};

    @media (max-width: 990px) {
      gap: 0.5rem;
      font-weight: 600;
    }
    @media (max-width: 320px) {
      font-size: 1.8rem;
    }
  }
`;
export const Image = styled.img`
  width: auto;
  height: 7.5rem;

  @media (max-width: 990px) {
    height: 5rem;
  }
`;
