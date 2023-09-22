import { Modal } from 'antd';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  max-width: 600rem;
  padding-left: 1.5rem;
  max-height: ${(props) => (props.isOpened ? 'auto' : '0rem')};
  overflow-y: hidden;
  transition: all 0.5s ease-in-out 0.3s;
`;

export const Columns = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  width: 100%;
  height: 100%;
  margin-bottom: 2rem;
  overflow-y: hidden;
  overflow-x: hidden;

  @media (max-width: 1270px) {
    display: flex;
    flex-direction: column;
  }
`;

export const GraphsDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  margin-bottom: 5rem;

  div {
    width: 100%;
  }
`;

export const DataColumn = styled.div`
  align-items: flex-start;
  gap: 0.5rem;
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  max-height: 25rem;
  max-width: 28rem;
  padding: 0.5rem;

  @media (max-width: 1350px) {
    max-height: 30rem;
  }
  @media (max-width: 940px) {
    max-height: 30rem;
  }
`;

export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex;
  flex-wrap: wrap;
  padding: 15px 20px;
  gap: 0.5rem;
  width: 100%;
  height: 100%;
  max-height: 15rem;
  max-width: 28rem;
  padding-left: 1.5rem;
  @media (max-width: 1350px) {
    max-height: 25rem;
  }
`;

export const DataContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex;
  margin-left: 1rem;
  flex-wrap: wrap;
  margin-top: 4rem;
  gap: 0.5rem;
  width: 100%;
  height: 100%;
  max-height: 15rem;
  max-width: 28rem;
  padding-left: 1.5rem;
  @media (max-width: 1350px) {
    max-height: 25rem;
  }
  @media (max-width: 910px) {
    mar: 0rem;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export const DataRow = styled.div`
  display: flex;
  flex-direction: row;
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
  width: 100%;
  //height: 100%; // tá aquiii
  margin-left: 1rem;
  @media (max-width: 1075px) {
    gap: 0.5rem;
  }
`;

export const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 4rem;
  width: 100%;
  height: 100%;
  button {
    background-color: transparent;
    padding: 0.5rem 1rem;
    color: white;
    font-family: ${(prop) => prop.theme.fonts.montserrat};
    font-size: 1.4rem;
    font-weight: 500;
    border: 0.1rem solid white;
    border-radius: 0.5rem;
    :hover {
      cursor: pointer;
    }
  }
  PDFDownloadLink {
    text-decoration: none;
    text-decoration-line: none;
  }
`;

export const Label = styled.div`
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.83rem;
  color: white;
  white-space: nowrap;
  @media (max-width: 1580px) {
    font-size: 1.4rem;
  }
  @media (max-width: 1530px) {
    font-size: 1.3rem;
  }
  @media (max-width: 1460px) {
    font-size: 1.1rem;
  }
  @media (max-width: 1390px) {
    font-size: 1.08rem;
  }
  @media (max-width: 1270px) {
    font-size: 1.45rem;
  }
  @media (max-width: 1000px) {
    font-size: 1.3rem;
  }
  @media (max-width: 910px) {
    font-size: 1.1rem;
  }
  @media (max-width: 810px) {
    font-size: 1rem;
  }
`;

export const Data = styled.div`
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.83rem;
  color: white;
  white-space: nowrap;
  @media (max-width: 1580px) {
    font-size: 1.4rem;
  }
  @media (max-width: 1530px) {
    font-size: 1.3rem;
  }
  @media (max-width: 1460px) {
    font-size: 1.1rem;
  }
  @media (max-width: 1390px) {
    font-size: 1.08rem;
  }
  @media (max-width: 1270px) {
    font-size: 1.45rem;
  }
  @media (max-width: 1000px) {
    font-size: 1.3rem;
  }
  @media (max-width: 910px) {
    font-size: 1.1rem;
  }
  @media (max-width: 810px) {
    font-size: 1rem;
  }
`;

export const Title = styled.div`
  font-family: ${(prop) => prop.theme.fonts.montserrat};
  font-size: 1.6rem;
  font-weight: 600;
  color: white;
  margin-bottom: 1.5rem;
`;
export const ReportName = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-size: 1.6rem;
  font-weight: 600;
  color: white;
  padding: 1.5rem;
  width: 100%;
  max-width: 120rem;

  svg {
    margin-left: auto; /* Move the DownOutlined component to the right */
    transform: ${(props) =>
      props.isOpened ? 'rotate(180deg)' : 'rotate(0deg)'};
    transition: all 0.5s ease-in-out 0.3s;
  }

  :hover {
    cursor: pointer;
  }
`;

export const Icon = styled.div``;

export const DashedBar = styled.div`
  display: flex;
  height: auto;
  width: 0.1rem;
  border-right: 0.1rem dashed white;
`;
export const ModalStyle = styled(Modal)`
  .ant-modal-content {
    background-color: ${(props) => props.theme.colors.darkBlue} !important;
  }
`;

export const ConstDashedBar = styled.div`
  display: flex;
  height: auto;
  width: 0.1rem;
  border-right: 0.1rem dashed white;
`;
