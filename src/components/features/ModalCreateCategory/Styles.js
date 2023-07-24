import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 2rem 2.4rem;

  font-family: ${(props) => props.theme.fonts.montserrat};
`;

export const Form = styled.form``;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
`;

export const Label = styled.label`
  font-style: normal;
  font-weight: 500;
  font-size: 2.4rem;
  align-self: baseline;

  color: white;
  padding-bottom: 0.5rem;
`;

export const Input = styled.input`
  display: flex;
  align-items: flex-start;
  padding: 0.8rem 1.1rem;
  gap: 1rem;
  border: ${({ error }) => (error ? '0.2rem solid red' : 'none')};
  color: black;

  font-family: ${(props) => props.theme.fonts.montserrat};
  font-style: normal;
  font-weight: 400;
  font-size: 2rem;
  line-height: 2.4rem;

  width: 40rem;
  height: 4rem;

  border-radius: 0.4rem;
`;

export const ErrorMessage = styled.p`
  font-weight: 700;
  color: red;

  margin-top: 0.5rem;
`;

export const ModalButton = styled.button`
  cursor: pointer;
  gap: 0.7rem;
  align-self: center;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  flex-direction: row;
  align-items: center;

  width: 21.2rem;
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

  p {
    font-family: ${(props) => props.theme.fonts.montserrat};
    font-style: normal;
    font-weight: 600;
    font-size: 1.8rem;
  }
`;
