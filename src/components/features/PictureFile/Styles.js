import { Upload } from 'antd';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1em;
`;

export const StyledUpload = styled(Upload)`
  color: white;
`;

export const UploadButton = styled.button`
  all: unset;
  color: white;
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
