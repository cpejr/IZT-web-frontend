/* eslint-disable import/prefer-default-export */
import styled, { css } from 'styled-components';
import { Colors, Fonts } from '../../../variables';

const isMiddleStyle = css`
  position: relative;
  z-index: 2;
  font-size: 24px;
  width: 460px;
  height: 580px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-family: ${Fonts.montserrat};
  font-size: 20px;
  font-weight: 700;

  width: 470px;
  height: 570px;
  background-color: white;
  border-top: 230px solid ${Colors.gray[1]};
  box-shadow: 0 0 8px 8px ${Colors.gray[2]};

  ${(isMiddle) => (isMiddle ? isMiddleStyle : '')}
`;

export const CardTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-family: ${Fonts.montserrat};
  font-size: 24px;
  font-weight: 700;

  margin-bottom: ${(props) => props.marginBottom};
`;

export const CardText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 77%;

  font-family: ${Fonts.montserrat};
  font-size: 18px;
  font-weight: 400;

  margin-bottom: ${(props) => props.marginBottom};
`;
