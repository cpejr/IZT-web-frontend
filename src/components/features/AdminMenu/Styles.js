import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Modal } from 'antd';

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

  @media (max-width: 700px) {
    width: 100%;
    height: auto;
    box-shadow: none;
    align-items: normal;
    margin-bottom: 30px;
  }
`;

export const MenuItens = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 40px;
  padding-top: 40px;

  @media (max-width: 700px) {
    gap: 30px;
    padding-top: 20px;
    align-items: center;
    justify-content: center;
  }
`;

export const TitleDiv = styled.div`
  @media (max-width: 700px) {
    display: none;
  }
`;

export const SectionMobile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (max-width: 700px) {
    display: flex;
    flex-direction: row;
    gap: 30px;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 15px;

  @media (max-width: 700px) {
    align-items: center;
    justify-content: center;
    gap: 8px;
  }
`;

export const Title = styled.p`
  font-weight: 700;

  @media (max-width: 420px) {
    font-size: 18px;
  }
  @media (max-width: 320px) {
    font-size: 15px;
  }
`;

export const Text = styled.p`
  font-weight: 400;

  @media (max-width: 700px) {
    font-size: 17px;
  }
  @media (max-width: 420px) {
    font-size: 14px;
  }
  @media (max-width: 320px) {
    font-size: 12px;
  }
`;

export const BlackLine = styled.p`
  display: flex;
  width: 250px;
  border: 1.9px solid #123645;

  @media (max-width: 700px) {
    display: none;
  }
`;

export const BlackLineMobile = styled.p`
  display: none;
  align-self: center;
  width: 200px;
  border: 1.9px solid #123645;

  @media (max-width: 700px) {
    display: flex;
  }
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

  @media (max-width: 700px) {
    font-size: 17px;

    :hover {
      width: auto;
      border-radius: 10px;
      background-color: rgba(199, 199, 199, 1);
    }
  }

  @media (max-width: 420px) {
    font-size: 14px;
  }
  @media (max-width: 320px) {
    font-size: 12px;
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

  @media (max-width: 700px) {
    font-size: 17px;

    :hover {
      width: auto;
      border-radius: 10px;
      background-color: rgba(199, 199, 199, 1);
    }
  }

  @media (max-width: 420px) {
    font-size: 14px;
  }
  @media (max-width: 320px) {
    font-size: 12px;
  }
`;

export const MobileMenuButton = styled.button`
  display: none;

  @media (max-width: 700px) {
    display: flex;
    width: 100%;
    border-width: 1px;
    border-left: none;
    border-right: none;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ModalStyle = styled(Modal)`
  :where(.css-dev-only-do-not-override-1me4733).ant-modal .ant-modal-content {
    background-color: #123645;
  }
`;
