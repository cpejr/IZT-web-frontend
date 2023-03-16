import styled from 'styled-components';
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
  display: flex;
  width: 100%;
  height: 35px;
  flex-grow: 1;
  background-color: transparent;
  border: none;

  font-family: ${(props) => props.theme.fonts.montserrat};
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  font-size: 1em;

  @media (max-width: 700px) {
    width: 100%;
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

export const StyledLink = styled.button`
  all: unset;
  cursor: pointer;
`;

export const Subsection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const SearchSection = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: row;
  align-items: space-between;
  width: 220px;
  position: relative;
  max-height: 35px;
  height: 100%;
  background-color: white;
  border-radius: 20px;
  padding-left: 10px;
  padding-right: 5px;
  font-size: 16px;
  @media (max-width: 990px) {
    width: 190px;
    gap: 5px;
    font-size: 14px;
  }
  @media (max-width: 700px) {
    width: 100%;
    gap: 10px;
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
  :where(.css-dev-only-do-not-override-1me4733).ant-modal .ant-modal-content {
    background-color: #123645;
  }
`;
