import { Select } from 'antd';
import styled, { css } from 'styled-components';

const isBudgetStyle = css`
  .ant-select-selector {
    display: flex !important;
    align-items: center !important;
    align-items: center !important;
    background-color: ${(props) =>
      props.error ? 'rgb(239, 202, 202)' : 'white'} !important;
    border: 0.2rem solid ${(props) => (props.error ? ' red' : 'none')} !important;
    border-radius: 0.4rem !important;
    font-size: 2rem !important;
    padding: 0.8rem 1.6rem !important;
    line-height: 2rem !important;
    height: 4rem !important;

    @media (max-width: 700px) {
      height: 3rem !important;
    }
  }

  .ant-select-selection-placeholder {
    color: ${(props) => props.theme.colors.gray.mediumGray} !important;
    font-family: ${(props) => props.theme.fonts.montserrat} !important;
    font-weight: 400 !important;
    font-size: 2rem !important;
    line-height: 2rem !important;
    height: 4rem !important;
    padding-top: 0.8rem !important;

    @media (max-width: 700px) {
      font-size: 1.6rem !important;
    }
  }
`;
const isBudgetLabelStyle = css`
  color: white;
  font-size: 2.4rem;
  font-weight: 500;
  padding-bottom: 0.5rem;

  @media (max-width: 700px) {
    font-size: 2rem;
    padding-bottom: 9px;
  }
  @media (max-width: 370px) {
    font-size: 1.5rem;
  }
`;

const isProfileStyle = css`
  .ant-select-selector {
    border: ${(props) =>
      props.error ? '0.2rem red solid' : '0.1rem black solid'} !important;
    border-radius: 0.4rem !important;
    height: 4.5rem !important;
    width: 100% !important;
    background-color: transparent !important;
    padding: 0 5% !important;
    font-family: ${(props) => props.theme.fonts.montserrat} !important;
    font-size: 2.2rem !important;
    font-weight: 600 !important;
    margin-bottom: 0.9rem !important;
  }

  .ant-select-selection-placeholder {
    color: black;
    font-weight: 400 !important;
    font-family: ${(props) => props.theme.fonts.montserrat} !important;
    font-size: 2.4rem !important;
    font-weight: 600 !important;
  }
`;

const isRegisterStyle = css`
  .ant-select-selector {
    border: ${(props) =>
      props.error ? '0.2rem red solid' : '0.1rem black solid'} !important;
  }

  .ant-select-selection-placeholder {
    color: black;
    font-family: ${(props) => props.theme.fonts.montserrat} !important;
    font-size: 2.2rem !important;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .ant-select-selector {
    border: 0.2rem solid ${(props) => (props.error ? 'red' : '#9f9f9f ')};
    margin: 0 !important;
  }

  .ant-select-selection-placeholder {
    color: #9f9f9f;
  }
  ${({ isBudget }) => (isBudget ? isBudgetStyle : '')};
  ${({ isProfile }) => (isProfile ? isProfileStyle : '')};
  ${({ isRegister }) => (isRegister ? isRegisterStyle : '')};
`;

export const StyledSelect = styled(Select)`
  flex-grow: 1;
  width: 100%;
`;

export const ErrorMessage = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  color: red;

  margin-top: ${(props) => (props.error ? '0.5rem' : '0')};

  @media (max-width: 700px) {
    font-size: 1.4rem !important;
  }
`;

export const Label = styled.label`
  font-size: 2.2rem;
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-weight: 400;

  ${({ isBudget }) => (isBudget ? isBudgetLabelStyle : '')};
  @media (max-width: 700px) {
    ${({ isBudget }) => (isBudget ? isBudgetLabelStyle : '')};
  }
  @media (max-width: 370px) {
    ${({ isBudget }) => (isBudget ? isBudgetLabelStyle : '')};
  }
`;
