import { Modal } from 'antd';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: auto;
  max-width: 106rem;
  padding-left: 1.5rem;
  max-height: ${(props) => (props.isOpened ? '100rem' : '0rem')};
  overflow-y: hidden;
  transition: all 0.5s ease-in-out 0.3s;
`;

export const Columns = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
  width: 100%;
  height: 100%;
  max-width: 106rem;
  margin-bottom: 2rem;
  overflow-y: hidden;
  overflow-x: hidden;
`;

export const DataColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  width: auto;
  height: 100%;
  max-height: 20rem;
  max-width: 28rem;
  @media (max-width: 1350px) {
    max-height: 30rem;
  }
  @media (max-width: 940px) {
    max-height: 30rem;
  }
`;

export const DataRow = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
  width: 100%;
  height: 100%;
  margin-left: 1rem;
  @media (max-width: 1075px) {
    gap: 0.5rem;
  }
`;

export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-wrap: wrap;
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
`;

export const Label = styled.div`
  font-family: ${(prop) => prop.theme.fonts.montserrat};
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.83rem;
  color: white;
  white-space: nowrap;
  @media (max-width: 1075px) {
    font-size: 1.2rem;
  }
`;
export const Data = styled.div`
  font-family: ${(prop) => prop.theme.fonts.montserrat};
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.83rem;
  color: white;
  white-space: nowrap;
  @media (max-width: 1075px) {
    font-size: 1.2rem;
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
  font-family: ${(prop) => prop.theme.fonts.montserrat};
  font-size: 1.6rem;
  font-weight: 600;
  color: white;
  padding: 1.5rem;
  width: 100%;
  max-width: 106rem;

  svg {
    transform: ${(props) =>
      props.isOpened ? 'rotate(180deg)' : 'rotate(0deg)'};
    transition: all 0.5s ease-in-out 0.3s;
  }

  :hover {
    cursor: pointer;
  }
`;

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
