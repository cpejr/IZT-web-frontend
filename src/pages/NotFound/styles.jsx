import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 70px;

  position: absolute;
  width: 824px;
  height: 710px;
  left: 102px;
  top: 189px;

  @media (max-width: 1024px) {
    width: 100%;
    height: auto;
    left: 0;
    top: 0;
    padding: 40px;
  }
  @media (max-width: 1024px) {
    width: 100%;
    gap: 30px;
  }
`;

export const Title = styled.h1`
  width: 527px;
  height: 312px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 256px;
  line-height: 312px;
  /* identical to box height */

  text-transform: uppercase;

  color: #af0c0c;

  @media (max-width: 700px) {
    font-size: 120px;
    width: 100%;
    text-align: center;
  }
`;
export const Subtitle = styled.h2`
  width: 697px;
  height: 219px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 96px;
  line-height: 117px;

  color: #123645;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  white-space: pre-wrap;

  @media (max-width: 700px) {
    font-size: 64px;
    width: 100%;
    text-align: center;
  }
`;
export const Description = styled.h3`
  width: 824px;
  height: 39px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 39px;
  /* identical to box height */

  color: #000000;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;

  @media (max-width: 890px) {
    font-size: 27px;
    width: 100%;
  }

  @media (max-width: 700px) {
    font-size: 24px;
    width: 100%;
    text-align: center;
  }
`;
