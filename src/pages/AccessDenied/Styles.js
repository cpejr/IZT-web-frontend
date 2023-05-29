import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const UpperDiv = styled.div`
  width: 100%;
  padding: 10%;
  gap: 10%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-image: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)),
    url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: cover;

  background-color: ${(props) => props.theme.colors.blue};
  color: white;

  @media (max-width: 1080px) {
    flex-direction: column;
    gap: 4rem;
  }
`;

export const TextDiv = styled.div`
  width: 100%;
  font-family: ${(props) => props.theme.fonts.montserrat};
  h1 {
    font-size: 6.4rem;
    font-weight: 700;

    @media (max-width: 1080px) {
      text-align: center;
    }
  }
  p {
    font-size: 2.8rem;
    font-weight: 500;
    text-align: center;
  }
  @media (max-width: 1100px) {
    h1 {
      font-size: 5.76rem;
    }
    p {
      font-size: 2.52rem;
    }
  }
  @media (max-width: 750px) {
    h1 {
      font-size: 4.8rem;
    }
    p {
      font-size: 2.1rem;
    }
  }
  @media (max-width: 500px) {
    h1 {
      font-size: 3.2rem;
    }
    p {
      font-size: 1.4rem;
    }
  }
`;
