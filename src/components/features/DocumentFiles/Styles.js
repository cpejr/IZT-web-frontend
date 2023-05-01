import { Upload } from 'antd';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 1em;
`;

export const StyledUpload = styled(Upload)`
  color: white;
  width: 100%;

  display: flex;
  flex-direction: column-reverse;
  gap: 10px;

  .ant-upload-list-item-name {
    color: white;
    font-size: 19px;
  }

  .ant-upload-icon {
    svg {
      color: white;
      width: 19px;
      height: 19px;
    }

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .ant-upload-list-item {
    margin-bottom: 8px;
  }

  .ant-upload-list-item-actions {
    svg {
      color: white;
      width: 19px;
      height: 19px;
    }

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .ant-upload-icon {
    svg {
      color: white;
      width: 19px;
      height: 19px;
    }

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .ant-upload-list-item-error {
    svg {
      color: rgb(255, 77, 79);
    }
  }
`;

export const AddButton = styled.button`
  cursor: pointer;

  display: flex;
  justify-content: baseline;
  align-items: center;

  width: 180px;
  height: 30px;
  background-color: transparent;
  border: none;

  color: ${({ color }) => color};
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  svg {
    padding-right: 5px;
  }
`;

export const FileLink = styled.a`
  font-size: 1.3em;
  color: 'white';

  flex: 1;

  white-space: nowrap;
  overflow: hidden;

  text-overflow: ellipsis;
`;

export const Arrows = styled.div`
  display: flex;
  flex-direction: column;

  gap: 2px;
`;
