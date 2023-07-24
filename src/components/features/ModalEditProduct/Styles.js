import styled from 'styled-components';

export const Container = styled.div`
  z-index: 1000;
`;

export const Form = styled.form``;

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;

  .svg {
    color: white;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 3rem;
  gap: 10%;

  width: 100%;
  height: auto;
`;

export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0rem;

  width: 40rem;
  height: 77rem;
`;

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0rem;

  width: 40rem;
  height: 77rem;
`;

export const Subsection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-top: 1rem;
  width: 100%;
`;

export const CategorySubsection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2.5rem;
  width: 100%;
`;

export const Text = styled.p`
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-style: normal;
  font-weight: 500;
  font-size: 2.4rem;
  line-height: 2.9rem;

  color: white;
`;

export const ErrorMessage = styled.p`
  font-weight: 700;
  color: red;
`;

export const PicturesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  gap: 1rem;
`;

export const DocumentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;

  width: 100%;
  max-width: 35rem;
`;

export const MiniText = styled.p`
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-style: normal;
  font-weight: 500;
  font-size: 1.6rem;
  line-height: 2rem;
  color: white;
`;

export const Input = styled.input`
  padding: 0.8rem 1.1rem;
  width: 100%;
  top: 3.4rem;

  border: ${({ error }) => (error ? '0.2rem solid red' : 'none')};

  background: #ffffff;
  border-radius: 0.4rem;

  font-family: ${(props) => props.theme.fonts.montserrat};
  font-style: normal;
  font-weight: 400;
  font-size: 2rem;
  line-height: 2.4rem;

  color: #000000;
`;

export const TextAreaModal = styled.textarea`
  display: flex;
  padding: 0.8rem 1.1rem;
  width: 100%;
  height: 25rem;

  border: ${({ error }) => (error ? '0.2rem solid red' : 'none')};

  background: #ffffff;
  border-radius: 0.4rem;

  font-family: ${(props) => props.theme.fonts.montserrat};
  font-style: normal;
  font-weight: 400;
  font-size: 2rem;

  resize: none;
  color: #000000;
`;

export const ModalButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  cursor: pointer;

  border: 0.1rem solid white;
  border-radius: 0.5rem;
  background-color: transparent;

  width: 22rem;
  height: 4.5rem;
  left: 81.3rem;
  top: 70.3rem;
  padding: 1rem;

  font-family: ${(props) => props.theme.fonts.montserrat};
  font-style: normal;
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 2.2rem;

  color: white;

  :hover {
    transition-duration: 0.5s;
    //colocar hover quando desclicar do botão
    background-color: rgba(255, 255, 255, 0.2);
  }

  p {
    padding-left: 0.8rem;
    font-size: 1.8rem;
  }
`;
