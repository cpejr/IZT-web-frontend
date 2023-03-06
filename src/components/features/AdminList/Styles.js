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
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px 10px;
  gap: 10px;

  width: 230px;
  height: 35px;
  left: 760px;
  top: 8px;

  background: #ffffff;
  border-radius: 20px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const EditButton = styled.button`
  background-color: none;
  border-radius: none;
`;
