import { Modal } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;

  .ant-modal .ant-modal-content {
    background-color: ${(props) => props.theme.colors.darkBlue};
  }

  width: 95%;
  height: 40rem;
  padding-left: 4rem;
  padding-right: 5%;
  padding-top: 2.5rem;

  font-family: ${(props) => props.theme.fonts.montserrat};
  font-style: normal;
  color: #000000;
  @media (max-width: 700px) {
    align-items: center;
    justify-content: center;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    height: auto;
    margin-bottom: 5rem;
    gap: 1rem;
  }
`;

export const Title = styled.p`
  width: 100%;
  height: 3.9rem;

  font-weight: 600;
  font-size: 3.2rem;
  line-height: 3.9rem;
  margin-bottom: 2rem;

  @media (max-width: 700px) {
    font-size: 2rem;
    margin-bottom: 0rem;
  }
`;

export const CategoryFilterContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
  height: 5rem;
  padding: 0.5rem 1rem;
  gap: 2rem;
  background: #eeeeee;

  @media (max-width: 810px) {
    flex-direction: column-reverse;
    align-items: flex-start;
    justify-content: center;
    gap: 1rem;
    padding: 1rem 1rem;
    border-radius: 0.4rem;
    height: auto;
  }
`;

export const CategoryText = styled.p`
  height: 2rem;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 2rem;
  min-width: 17rem;
  @media (max-width: 790px) {
    width: 100%;
    font-size: 1.4rem;
    min-width: 15rem;
  }
  @media (max-width: 350px) {
    gap: 0.5rem;
    min-width: 0rem;
    height: auto;
  }
`;

export const Text = styled.p`
  height: 2rem;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 2rem;
  text-overflow: hidden;
`;

export const SearchProduct = styled.input`
  display: flex;
  width: 100%;
  height: 3.5rem;
  flex-grow: 1;
  background-color: transparent;
  border: none;

  font-family: ${(props) => props.theme.fonts.montserrat};
  font-style: normal;
  font-weight: 500;
  line-height: 2rem;
  font-size: 1.6rem;

  @media (max-width: 810px) {
    width: 100%;
  }
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 3rem 3rem;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  width: 100%;
`;

export const EditButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;

  svg {
    @media (max-width: 700px) {
      height: 2.3rem;
      width: 2.3rem;
    }
  }
`;

export const DeleteButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;

  svg {
    height: 2.3rem;
    width: 2.3rem;
  }
`;

export const ProductList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding-left: 2rem;
  padding-right: 2rem;
`;

export const StyledLink = styled(Link)`
  all: unset;
  cursor: pointer;
`;

export const Subsection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  width: 100%;
  align-items: center;
  @media (max-width: 350px) {
    gap: 0.5rem;
  }
`;

export const SearchSection = styled.div`
  gap: 1rem;
  display: flex;
  flex-direction: row;
  align-items: space-between;
  width: 27rem;
  position: relative;
  max-height: 3.5rem;
  height: 100%;
  background-color: white;
  border-radius: 2rem;
  padding-left: 1rem;
  padding-right: 0.5rem;
  font-size: 1.6rem;
  @media (max-width: 990px) {
    width: 19rem;
    gap: 0.5rem;
    font-size: 1.4rem;
  }
  @media (max-width: 810px) {
    width: 100%;
    gap: 1rem;
  }
`;

export const SearchIconButton = styled.button`
  right: 0;
  border: none;
  background: none;
  outline: none;
  height: auto;
  width: auto;

  cursor: pointer;
`;

export const ModalStyle = styled(Modal)`
  .ant-modal-content {
    background-color: ${(props) => props.theme.colors.darkBlue} !important;
  }
`;
