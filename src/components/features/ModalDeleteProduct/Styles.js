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

  gap: 0.7rem;
  align-self: center;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  flex-direction: row;
  align-items: center;

  width: 15rem;
  height: 4.5rem;

  background-color: transparent;
  border: 0.1rem solid white;
  border-radius: 0.5rem;
  color: white;

  margin-top: 1.5rem;

  :hover {
    transition-duration: 0.5s;
    //colocar hover quando desclicar do botão
    background-color: rgba(255, 255, 255, 0.2);
  }

  font-family: ${(props) => props.theme.fonts.montserrat};
  font-style: normal;
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 2.2rem;
`;
