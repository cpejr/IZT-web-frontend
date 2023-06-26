import { Modal } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 29.8rem;
  height: 91.4rem;
  left: 0rem;
  top: 11rem;

  font-family: ${(props) => props.theme.fonts.montserrat};
  font-style: normal;
  color: #000000;
  font-size: 2rem;
  line-height: 2.4rem;

  background: #eeeeee;
  box-shadow: 0.3rem 0rem 0.4rem rgba(0, 0, 0, 0.25);

  @media (max-width: 700px) {
    width: 100%;
    height: auto;
    box-shadow: none;
    align-items: normal;
    margin-bottom: 3rem;
  }
`;

export const MenuItens = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0rem;
  gap: 4rem;
  padding-top: 4rem;

  @media (max-width: 700px) {
    gap: ${(props) => (props.opened ? '3rem' : '0rem')};
    padding-top: ${(props) => (props.opened ? '2rem' : '0rem')};
    align-items: center;
    justify-content: center;
    transition: all 400ms ease-out;
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
  gap: 4rem;

  @media (max-width: 700px) {
    display: flex;
    flex-direction: row;
    gap: 3rem;
  }
  @media (max-width: 300px) {
    gap: 2rem;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0rem;
  gap: 1.5rem;

  @media (max-width: 700px) {
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
  }
`;

export const Title = styled.p`
  font-weight: 700;

  @media (max-width: 420px) {
    font-size: 1.8rem;
  }
  @media (max-width: 320px) {
    font-size: 1.5rem;
  }
`;

export const Text = styled.p`
  font-weight: 400;

  @media (max-width: 700px) {
    font-size: 1.7rem;
  }
  @media (max-width: 420px) {
    font-size: 1.4rem;
  }
  @media (max-width: 320px) {
    font-size: 1.2rem;
  }
`;

export const BlackLine = styled.p`
  display: flex;
  width: 25rem;
  border: 0.19rem solid #123645;

  @media (max-width: 700px) {
    display: none;
  }
`;

export const BlackLineMobile = styled.p`
  display: none;
  align-self: center;
  width: 20rem;
  border: 0.19rem solid #123645;

  @media (max-width: 700px) {
    display: flex;
  }
`;

export const StyledLink = styled(Link)`
  all: unset;
  cursor: pointer;
  width: 23rem;
  padding: 0.5rem;
  border-radius: 1rem;
  :hover {
    background-color: ${(props) => props.theme.colors.gray.mediumGrey};
  }

  @media (max-width: 700px) {
    font-size: 1.7rem;
    width: auto;
    border-radius: 1rem;
    text-align: center;
    :hover {
      background-color: ${(props) => props.theme.colors.gray.mediumGrey};
    }
  }

  @media (max-width: 420px) {
    font-size: 1.4rem;
  }
  @media (max-width: 320px) {
    font-size: 1.2rem;
  }
`;

export const Button = styled.button`
  all: unset;
  cursor: pointer;
  width: 23rem;
  padding: 0.5rem;
  border-radius: 1rem;
  :hover {
    background-color: ${(props) => props.theme.colors.gray.mediumGrey};
  }

  @media (max-width: 700px) {
    font-size: 1.7rem;
    width: auto;
    border-radius: 1rem;
    :hover {
      background-color: ${(props) => props.theme.colors.gray.mediumGrey};
    }
  }

  @media (max-width: 420px) {
    font-size: 1.4rem;
  }
  @media (max-width: 320px) {
    font-size: 1.2rem;
  }
`;

export const MenuMobile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;

  padding: 0rem;
  overflow-y: hidden;

  @media (max-width: 700px) {
    height: ${(props) => (props.opened ? 'auto' : '0')};
    /* transition: height 700ms ease-in-out 5s; */
  }
`;

export const MobileMenuButton = styled.button`
  display: none;

  @media (max-width: 700px) {
    display: flex;
    width: 100%;
    border-width: 0.1rem;
    border-left: none;
    border-right: none;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      transform: ${(props) =>
        props.opened ? 'rotate(180deg)' : 'rotate(0deg)'};
    }
  }
`;

export const ModalStyle = styled(Modal)`
  .ant-modal-content {
    background-color: ${(props) => props.theme.colors.darkBlue} !important;
  }
`;
