import styled from 'styled-components';

export const FileListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 0px 0px 20px;
  gap: 15px;

  width: 203.87px;
  height: 102px;
`;

export const FileItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 15px;

  width: 179.87px;
  height: 24px;
  a {
    width: 139px;
    height: 24px;

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    text-align: center;

    color: #000000;
  }
`;
