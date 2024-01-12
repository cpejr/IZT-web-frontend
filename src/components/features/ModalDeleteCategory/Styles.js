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

  width: 15rem;
  height: 5rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  flex-direction: row;
  align-items: center;

  background-color: transparent;
  border: 1px solid white;
  border-radius: 0.5rem;
  color: white;

  margin-top: 1.5rem;

  font-family: ${(props) => props.theme.fonts.montserrat};
  font-style: normal;
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 2.2rem;

  :hover {
    transition-duration: 0.5s;
    //colocar hover quando desclicar do botão
    background-color: rgba(255, 255, 255, 0.2);
  }

  svg {
    margin-right: 0.5rem;
    margin-left: 0.5rem;
  }
`;
