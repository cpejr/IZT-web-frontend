import { Upload } from 'antd';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1em;
`;

const mobileUploadStyle = css`
  .ant-upload-list-picture-card .ant-upload-list-item {
    position: relative;
  }
  .ant-upload-list-picture-card .ant-upload-list-item-info,
  .ant-upload-list-item-actions {
    position: absolute;
    bottom: -30px;
    /* left: 0; */
    /* right: 0; */
    padding: 8px;
    opacity: 1 !important;
    svg {
      color: black;
    }
  }

  .ant-upload-list-picture-card .ant-upload-list-item-actions::after {
    /* content: '';
    display: block;
    height: 40px; */
  }
`;
export const StyledUpload = styled(Upload)`
  color: white;

  ${(props) => (props.isMobile ? mobileUploadStyle : '')}
`;

export const UploadButton = styled.button`
  all: unset;
  color: ${(props) => (props.isMobile ? 'black' : 'white')};
  font-weight: 500;

  div {
    margin-top: 8px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 1em;
`;

export const Image = styled.img`
  width: 70px;
  height: 70px;

  object-fit: cover;
`;

export const Arrows = styled.div`
  display: flex;
  flex-direction: column;
`;
