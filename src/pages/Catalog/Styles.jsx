import styled from 'styled-components';
import { Fonts, Colors } from '../../variables';

const breakValue900 = '900px';
const breakValue600 = '600px';
const breakValue380 = '380px';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 10%;
  gap: 50px;
  font-family: ${Fonts.montserrat};
  background-color: white;
  font-size: 20px;
  align-items: stretch;
  @media (max-width: ${breakValue900}) {
    font-size: 18px;
    padding: 50px 7%;
  }
  @media (max-width: ${breakValue600}) {
    font-size: 15px;
    padding: 30px 5%;
  }
  @media (max-width: ${breakValue380}) {
    font-size: 14px;
    padding: 30px 3%;
  }
`;

export const Introduction = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 1.3em;
  font-weight: 700;
  color: ${Colors.blue};
`;

export const Description = styled.p`
  font-size: 0.9em;
  font-weight: 500;
  text-align: center;
  width: 60%;
  @media (max-width: ${breakValue900}) {
    width: 70%;
  }
`;

export const ButtonRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  gap: 2%;
  overflow-x: auto;
  padding: 5px;
`;

export const Anchor = styled.a`
  text-decoration: none;
  display: flex;
  flex-grow: 1;
  min-width: 140px;
`;

export const Button = styled.button`
  display: flex;
  flex-grow: 1;
  padding: 5px;
  font-family: ${Fonts.montserrat};
  font-weight: 500;
  font-size: 1em;
  background-color: ${Colors.darkGreenishBlue};
  border-radius: 10px;
  border: none;
  color: white;
  text-align: center;
  justify-content: center;
  :hover {
    box-shadow: 3px 3px 3px black;
  }
  @media (max-width: ${breakValue600}) {
    font-weight: 700;
  }
`;

export const ProductCategory = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Divider = styled.div`
  height: 2px;
  width: 300px;
  border: 1px solid ${Colors.blue};
  background-color: ${Colors.blue};
  margin-bottom: 50px;
`;

export const CategoryName = styled.h2`
  font-family: ${Fonts.montserrat};
  font-weight: 600;
  font-size: 1.25em;
  color: ${Colors.blue};
  margin-bottom: 30px;
`;

export const ProductRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 100px;
  @media (max-width: ${breakValue600}) {
    gap: 40px;
  }
  @media (max-width: ${breakValue380}) {
    gap: 20px;
  }
`;

export const Product = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  align-self: stretch;
  width: auto;
  height: 280px;
  max-width: 25%;
  min-width: 150px;
  padding: 5px;
  border-radius: 20px;

  :hover {
    border: 2px solid ${Colors.blue};
  }
  @media (max-width: 1200px) {
    height: 250px;
  }
  @media (max-width: ${breakValue900}) {
    height: 200px;
  }
  @media (max-width: ${breakValue600}) {
    height: 160px;
  }
  @media (max-width: ${breakValue380}) {
    min-width: 116px;
    height: 150px;
  }
`;

export const ProductImage = styled.img`
  display: flex;
  height: auto;
  width: auto;
  max-height: 90%;
  max-width: 100%;
`;

export const ProductName = styled.h3`
  font-family: ${Fonts.montserrat};
  font-weight: 500;
  font-size: 1em;
`;
