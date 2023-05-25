import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  width: 100%;
  max-width: 100rem;
  height: 100%;
`;

export const Message = styled.h1`
  font-size: 2.1rem;
  font-family: ${(props) => props.theme.fonts.montserrat};
  text-align: center;
  margin: 1.4rem;
  color: white;
  @media (max-width: 375px) {
    font-size: 1.5rem;
    margin: 1rem;
  }
`;

export const DeleteButton = styled.button`
  cursor: pointer;

  width: 14rem;
  height: 4.2rem;

  border-radius: 1rem;
  background-color: white;

  font-size: 1.5rem;
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-weight: 700;
  text-align: center;
`;
