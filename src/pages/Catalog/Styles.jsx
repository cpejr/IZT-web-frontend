import styled from 'styled-components';
import { Fonts, Colors } from '../../variables';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 10%;
  gap: 50px;
  font-family: ${Fonts.montserrat};
  background-color: white;
`;

export const Introduction = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const Title = styled.h1`
  font-size: 26px;
  font-weight: 700;
  color: ${Colors.blue};
`;

export const Description = styled.p`
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  width: 70%;
`;

export const ButtonRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 2%;
  min-width: 100%;
`;

export const Button = styled.button`
  width: auto;
  padding: 5px 50px;
  font-family: ${Fonts.montserrat};
  font-weight: 500;
  font-size: 20px;
  background-color: ${Colors.darkBlue};
  border-radius: 10px;
  border: none;
  color: white;
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
  font-size: 25px;
  color: ${Colors.blue};
  margin-bottom: 30px;
`;

export const ProductRow = styled.div`
  width: 100%;
  display: grid;
  gap: 100px;
  grid-template-columns: 250px 250px 250px;
  grid-auto-flow: column;
  align-items: center;
  justify-content: center;
`;

export const Product = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 300px;
  padding: 5px;
  border-radius: 20px;

  :hover {
    border: 2px solid ${Colors.blue};
  }
`;

export const ProductImage = styled.img`
  display: flex;
  height: auto;
  width: auto;
  max-height: 100%;
  max-width: 100%;
`;

export const ProductName = styled.h3`
  font-family: ${Fonts.montserrat};
  font-weight: 500;
  font-size: 20px;
`;
