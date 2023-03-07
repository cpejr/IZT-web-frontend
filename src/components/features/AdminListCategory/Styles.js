import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;

  width: 100%;
  height: 399px;
  left: 338px;
  top: 135px;

  font-family: 'Montserrat';
  font-style: normal;
  color: #000000;
`;

export const Title = styled.p`
  width: 100%;
  height: 39px;

  font-weight: 600;
  font-size: 32px;
  line-height: 39px;
`;

export const CategoryFilterContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
  height: 50px;

  background: #eeeeee;
`;

export const Text = styled.p`
  height: 20px;

  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
`;

export const SearchProduct = styled.input`
  display: block;
  padding: 5px 10px;

  width: 100%;
  height: 35px;

  background: #ffffff;
  border-radius: 20px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Button = styled.button`
  background-color: none;
  border-radius: none;

  cursor: pointer;
`;

export const ProductList = styled.div``;

export const Subsection = styled.div``;

export const TypeFilter = styled.div``;

export const SearchSection = styled.div`
  display: flex;
  align-items: center;
  width: 200px;
  position: relative;
  max-height: 35px;
  height: 100%;
`;

export const SearchIconButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
  z-index: 10;
  border: none;
  background: transparent;
  outline: none;
  height: auto;
  width: auto;

  cursor: pointer;
`;
