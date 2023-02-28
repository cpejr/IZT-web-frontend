import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const ContactButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;

  width: 100%;
  height: 62px;
  margin-top: 35px;

  background: ${(props) => props.theme.colors.blue};
  border: 0;
  border-radius: 4px;

  font-family: ${(props) => props.theme.fonts.montserrat};
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.1em;

  color: white;

  transition-duration: 0.3s;
  cursor: pointer;
  :hover {
    background-color: rgba(32, 54, 153, 0.6);
    color: rgba(255, 255, 255, 0.8);
  }

  @media (max-width: 700px) {
    font-size: 15px;
    height: 40px;
    margin-top: 0px;
    max-width: 80%;
  }
  @media (max-width: 1200px) {
    font-size: 16px;
    height: 45px;
  }
  @media (max-width: 320px) {
    max-width: 95%;
  }
`;
