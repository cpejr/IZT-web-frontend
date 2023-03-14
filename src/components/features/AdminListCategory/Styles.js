import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Modal } from 'antd';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;

  width: 100%;
  height: auto;
  margin-bottom: 50px;
  padding-left: 40px;
  padding-right: 5%;
  padding-top: 25px;

  font-family: 'Montserrat';
  font-style: normal;
  color: #000000;

  @media (max-width: 700px) {
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    gap: 20px;
  }
`;

export const Title = styled.p`
  width: 100%;
  height: 39px;

  font-weight: 600;
  font-size: 32px;
  line-height: 39px;
  margin-bottom: 20px;

  @media (max-width: 700px) {
    font-size: 20px;
    margin-bottom: 0px;
  }
`;

export const CategoryFilterContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  flex-direction: row;

  width: 100%;
  height: 50px;
  padding-right: 10px;

  background: #eeeeee;

  @media (max-width: 700px) {
    justify-content: flex-start;
    padding-left: 10px;
  }
`;

export const Text = styled.p`
  height: 20px;

  font-weight: 500;
  font-size: 16px;
  line-height: 20px;

  @media (max-width: 700px) {
    font-size: 14px;
  }
`;

export const SearchProduct = styled.input`
  display: block;
  width: 100%;
  height: 35px;

  background: #ffffff;
  border-radius: 20px;
  border: none;
  padding-left: 10px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;

  @media (max-width: 990px) {
    font-size: 14px;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const EditButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;

  svg {
    @media (max-width: 700px) {
      height: 23px;
      width: 23px;
    }
  }
`;

export const CategoryList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;

  @media (max-width: 700px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`;

export const StyledLink = styled(Link)`
  all: unset;
  cursor: pointer;
`;

export const Subsection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const SearchSection = styled.div`
  display: flex;
  align-items: center;
  width: 230px;
  position: relative;
  max-height: 35px;
  height: 100%;

  @media (max-width: 990px) {
    width: 100%;
  }
`;

export const SearchIconButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
  z-index: 10;
  border: none;
  background: none;
  outline: none;
  height: auto;
  width: auto;

  cursor: pointer;

  svg {
    @media (max-width: 990px) {
      height: 22px;
      width: 22px;
    }
  }
`;

export const ModalStyle = styled(Modal)`
  :where(.css-dev-only-do-not-override-1me4733).ant-modal .ant-modal-content {
    background-color: #123645;
  }
`;
