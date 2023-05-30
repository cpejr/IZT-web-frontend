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
  font-size: 2rem;
  font-family: ${(props) => props.theme.fonts.montserrat};
  text-align: center;
  margin: 2rem;
  color: white;
`;

export const DeleteButton = styled.button`
  cursor: pointer;

  width: 10rem;
  height: 4rem;

  border-radius: 0.8rem;
  background-color: white;

  font-size: 1.7rem;
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-weight: 700;
  text-align: center;
`;
