import { Link } from 'react-router-dom';
import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 298px;
  height: 914px;
  left: 0px;
  top: 110px;

  font-family: 'Montserrat';
  font-style: normal;
  color: #000000;
  font-size: 20px;
  line-height: 24px;

  background: #eeeeee;
  box-shadow: 3px 0px 4px rgba(0, 0, 0, 0.25);
`;

export const MenuItens = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 40px;
  padding-top: 40px;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 15px;
`;

export const Title = styled.p`
  font-weight: 700;
`;

export const Text = styled.p`
  font-weight: 400;
`;

export const BlackLine = styled.p`
  width: 249px;
  border: 1.9px solid #123645;
`;

export const StyledLink = styled(Link)`
  all: unset;
  cursor: pointer;

  :hover {
    width: 230px;
    padding: 5px;
    border-radius: 10px;
    background-color: rgba(199, 199, 199, 1);
  }
`;

export const Button = styled.button`
  all: unset;
  cursor: pointer;

  :hover {
    width: 230px;
    padding: 5px;
    border-radius: 10px;
    background-color: rgba(199, 199, 199, 1);
  }
`;
