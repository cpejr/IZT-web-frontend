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
  padding: 30px;
  gap: 10%;

  width: 100%;
  height: auto;
`;

export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0px;

  width: 400px;
  height: 770px;
`;

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0px;

  width: 400px;
  height: 770px;
`;

export const Subsection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding-top: 10px;
  width: 100%;
`;

export const CategorySubsection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 25px;
  width: 100%;
`;

export const Text = styled.p`
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;

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
  gap: 1em;
`;

export const DocumentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1em;

  width: 100%;
  max-width: 350px;
`;

export const MiniText = styled.p`
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: white;
`;

export const Input = styled.input`
  padding: 8px 11px;
  width: 100%;
  top: 34px;

  border: ${({ error }) => (error ? '2px solid red' : 'none')};

  background: #ffffff;
  border-radius: 4px;

  font-family: ${(props) => props.theme.fonts.montserrat};
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;

  color: #000000;
`;

export const TextAreaModal = styled.textarea`
  display: flex;
  padding: 8px 11px;
  width: 100%;
  height: 250px;

  border: ${({ error }) => (error ? '2px solid red' : 'none')};

  background: #ffffff;
  border-radius: 4px;

  font-family: ${(props) => props.theme.fonts.montserrat};
  font-style: normal;
  font-weight: 400;
  font-size: 20px;

  resize: none;
  color: #000000;
`;

export const ModalButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  cursor: pointer;

  border: 1px solid white;
  border-radius: 5px;
  background-color: transparent;

  width: 180px;
  height: 45px;
  left: 813px;
  top: 703px;
  padding: 10px;

  font-family: ${(props) => props.theme.fonts.montserrat};
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;

  color: white;

  :hover {
    transition-duration: 0.5s;
    //colocar hover quando desclicar do botão
    background-color: rgba(255, 255, 255, 0.2);
  }

  p {
    padding-left: 8px;
  }
`;
