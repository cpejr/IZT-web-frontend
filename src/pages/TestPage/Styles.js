import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
`;

export const VideoContainer = styled.div`
  position: relative;
  width: 650px;
`;

export const WaterMark = styled.div`
  position: absolute;
  top: 5px;
  right: 10px;
  opacity: 0.7;
  margin-right: 5px;
  margin-top: 0;
  color: white;
  font-size: 14px;
  width: 40px;
  z-index: 10;
  img {
    width: 50px;
  }
`;
