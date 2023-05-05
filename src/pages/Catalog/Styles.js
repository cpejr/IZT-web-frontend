import { Modal } from 'antd';
import styled from 'styled-components';

const breakValue900 = '900px';
const breakValue600 = '600px';
const breakValue380 = '380px';

export const ModalStyle = styled(Modal)`
  /* :where(.css-dev-only-do-not-override-ph9edi).ant-modal  */
  .ant-modal-content {
    background-color: white;
    border-radius: 0px;
  }
`;

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  font-family: ${(props) => props.theme.fonts.montserrat};
  background-color: white;
  font-size: 20px;
  align-items: stretch;
  padding: 50px 10%;
  width: 100%;
  max-width: 1440px;
  @media (max-width: ${breakValue900}) {
    font-size: 18px;
    padding: 50px 7%;
  }
  @media (max-width: ${breakValue600}) {
    font-size: 15px;
    padding: 30px 5%;
  }
  @media (max-width: ${breakValue380}) {
    font-size: 14px;
    padding: 30px 3%;
  }
  @media (min-width: 1440px) {
    padding: 50px 144px;
  }
`;

export const Introduction = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 1.3em;
  font-weight: 700;
  color: ${(props) => props.theme.colors.blue};
`;

export const Description = styled.p`
  font-size: 0.9em;
  font-weight: 500;
  text-align: center;
  width: 60%;
  @media (max-width: ${breakValue900}) {
    width: 70%;
  }
`;

export const ButtonRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2%;
  padding: 5px;
  @media (max-width: 965px) {
    justify-content: center;
  }
`;

export const Anchor = styled.a`
  text-decoration: none;
  display: flex;
  flex-grow: 1;
  min-width: 140px;
  max-width: 215px;
  margin-top: 5px;
  margin-bottom: 5px;
  @media (max-width: 965px) {
    flex-grow: 0;
  }
`;

export const Button = styled.button`
  display: flex;
  flex-grow: 1;
  padding: 5px;
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-weight: 500;
  font-size: 1em;
  background-color: ${(props) => props.theme.colors.darkGreenishBlue};
  border-radius: 10px;
  border: none;
  color: white;
  text-align: center;
  justify-content: center;
  animation-timing-function: ease;

  @keyframes shadow {
    from {
      box-shadow: none;
    }
    to {
      box-shadow: 3px 3px 3px black;
    }
  }
  :hover {
    animation: shadow 0.3s ease 10ms 1 normal forwards;
    cursor: pointer;
  }
  @media (max-width: ${breakValue600}) {
    font-weight: 700;
  }
`;

export const ProductCategory = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
`;

export const Divider = styled.div`
  height: 2px;
  width: 50%;
  max-width: 300px;
  border: 1px solid ${(props) => props.theme.colors.blue};
  background-color: ${(props) => props.theme.colors.blue};
  margin-bottom: 50px;
`;

export const CategoryName = styled.h2`
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-weight: 600;
  font-size: 1.25em;
  color: ${(props) => props.theme.colors.blue};
  margin-bottom: 30px;
`;

export const ProductRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 100px;
  @media (max-width: ${breakValue600}) {
    gap: 40px;
  }
  @media (max-width: ${breakValue380}) {
    gap: 20px;
  }
`;

export const Product = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  align-self: stretch;
  width: auto;
  height: 280px;
  max-width: 25%;
  min-width: 150px;
  padding: 10px;
  border-radius: 20px;
  @keyframes onHover {
    from {
      padding: 10px;
      border: none;
    }
    to {
      padding: 5px;
      border: 2px solid ${(props) => props.theme.colors.blue};
    }
  }
  :hover {
    animation: onHover 0.2s ease 10ms 1 normal forwards;
    cursor: pointer;
  }
  @media (max-width: 1200px) {
    height: 250px;
  }
  @media (max-width: ${breakValue900}) {
    height: 200px;
  }
  @media (max-width: ${breakValue600}) {
    height: 160px;
  }
  @media (max-width: ${breakValue380}) {
    min-width: 116px;
    height: 150px;
  }
`;

export const ProductImage = styled.img`
  display: flex;
  height: auto;
  width: auto;
  max-height: 90%;
  max-width: 100%;
  border-radius: 20px;
`;

export const ProductName = styled.h3`
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-weight: 500;
  font-size: 1em;
`;
