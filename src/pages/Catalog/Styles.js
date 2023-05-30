import styled from 'styled-components';

const breakValue900 = '900px';
const breakValue600 = '600px';
const breakValue380 = '380px';

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  font-family: ${(props) => props.theme.fonts.montserrat};
  background-color: white;
  font-size: 2rem;
  align-items: stretch;
  padding: 5rem 10%;
  width: 100%;
  max-width: 144rem;
  @media (max-width: ${breakValue900}) {
    font-size: 1.8rem;
    padding: 5rem 7%;
  }
  @media (max-width: ${breakValue600}) {
    font-size: 1.5rem;
    padding: 3rem 5%;
  }
  @media (max-width: ${breakValue380}) {
    font-size: 1.4rem;
    padding: 3rem 3%;
  }
  @media (min-width: 1440px) {
    padding: 5rem 14.4rem;
  }
`;

export const Introduction = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 2.6rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.blue};
  @media (max-width: ${breakValue900}) {
    font-size: 2.34rem;
  }
  @media (max-width: ${breakValue600}) {
    font-size: 1.95rem;
  }
  @media (max-width: ${breakValue380}) {
    font-size: 1.82rem;
  }
`;

export const Description = styled.p`
  font-size: 1.8rem;
  font-weight: 500;
  text-align: center;
  width: 60%;
  @media (max-width: ${breakValue900}) {
    font-size: 1.62rem;
    width: 70%;
  }
  @media (max-width: ${breakValue600}) {
    font-size: 1.35rem;
  }
  @media (max-width: ${breakValue380}) {
    font-size: 1.26rem;
  }
`;

export const ButtonRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2%;
  padding: 0.5rem;
  @media (max-width: 965px) {
    justify-content: center;
  }
`;

export const Anchor = styled.a`
  text-decoration: none;
  display: flex;
  flex-grow: 1;
  min-width: 14rem;
  max-width: 21.5rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  @media (max-width: 965px) {
    flex-grow: 0;
  }
`;

export const Button = styled.button`
  display: flex;
  flex-grow: 1;
  padding: 0.5rem;
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-weight: 500;
  font-size: 2rem;
  background-color: ${(props) => props.theme.colors.darkGreenishBlue};
  border-radius: 1rem;
  border: none;
  color: white;
  text-align: center;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  animation-timing-function: ease;

  @keyframes shadow {
    from {
      box-shadow: none;
    }
    to {
      box-shadow: 0.3rem 0.3rem 0.3rem black;
    }
  }
  :hover {
    animation: shadow 0.3s ease 10ms 1 normal forwards;
    cursor: pointer;
  }
  @media (max-width: ${breakValue900}) {
    font-size: 1.8rem;
    gap: 0.9rem;
  }
  @media (max-width: ${breakValue600}) {
    font-size: 1.5rem;
    font-weight: 700;
    gap: 0.75rem;
  }
  @media (max-width: ${breakValue380}) {
    font-size: 1.4rem;
    gap: 0.7rem;
  }
`;

export const ProductCategory = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1rem;
`;

export const Divider = styled.div`
  height: 0.2rem;
  width: 50%;
  max-width: 30rem;
  border: 0.1rem solid ${(props) => props.theme.colors.blue};
  background-color: ${(props) => props.theme.colors.blue};
  margin-bottom: 5rem;
`;

export const CategoryName = styled.h2`
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-weight: 600;
  font-size: 2.5rem;
  color: ${(props) => props.theme.colors.blue};
  margin-bottom: 3rem;
  @media (max-width: ${breakValue900}) {
    font-size: 2.25rem;
  }
  @media (max-width: ${breakValue600}) {
    font-size: 1.875rem;
  }
  @media (max-width: ${breakValue380}) {
    font-size: 1.75rem;
  }
`;

export const ProductRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10rem;
  @media (max-width: ${breakValue600}) {
    gap: 4rem;
  }
  @media (max-width: ${breakValue380}) {
    gap: 2rem;
  }
`;

export const Product = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  align-self: stretch;
  width: auto;
  height: 28rem;
  max-width: 25%;
  min-width: 15rem;
  padding: 1rem;
  border-radius: 2rem;
  @keyframes onHover {
    from {
      padding: 1rem;
      border: none;
    }
    to {
      padding: 0.5rem;
      border: 0.2rem solid ${(props) => props.theme.colors.blue};
    }
  }
  :hover {
    animation: onHover 0.2s ease 10ms 1 normal forwards;
    cursor: pointer;
  }
  @media (max-width: 1200px) {
    height: 25rem;
  }
  @media (max-width: ${breakValue900}) {
    height: 20rem;
  }
  @media (max-width: ${breakValue600}) {
    height: 16rem;
  }
  @media (max-width: ${breakValue380}) {
    min-width: 11.6rem;
    height: 15rem;
  }
`;

export const ProductImage = styled.img`
  display: flex;
  height: auto;
  width: auto;
  max-height: 90%;
  max-width: 100%;
  border-radius: 2rem;
`;

export const ProductName = styled.h3`
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-weight: 500;
  font-size: 2rem;
  @media (max-width: ${breakValue900}) {
    font-size: 1.8rem;
  }
  @media (max-width: ${breakValue600}) {
    font-size: 1.5rem;
  }
  @media (max-width: ${breakValue380}) {
    font-size: 1.4rem;
  }
`;
