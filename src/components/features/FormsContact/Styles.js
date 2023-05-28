import styled from 'styled-components';

export const ContactUs = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
  height: auto;
  padding-bottom: 4rem;
  background-color: rgba(18, 54, 69, 1);

  @media (max-width: 700px) {
    height: auto;
    padding-top: 3rem;
    padding-bottom: 3rem;
    margin-bottom: 3rem;
  }
`;

export const Title = styled.p`
  display: flex;
  align-items: center;
  font-size: 4rem;
  color: white;
  font-family: ${(props) => props.theme.fonts.montserrat}, sans-serif;
  font-weight: 600;
  height: 20%;
  padding-bottom: 4rem;
  padding-top: 4rem;
  text-align: center;

  @media (max-width: 700px) {
    font-weight: 600;
    font-size: 3.2rem;
    line-height: 3.9rem;
    height: 3.9rem;
  }

  @media (max-width: 370px) {
    font-size: 2.5rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  width: 80%;
  gap: 2rem;
  height: 100%;

  @media (max-width: 700px) {
    align-items: center;
    flex-direction: column;
    width: 100%;
    gap: 0%;
  }

  @media (min-width: 1440px) {
    max-width: 144rem;
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  gap: 2rem;

  @media (max-width: 700px) {
    width: 80%;
  }
`;

export const Mensagem = styled.div`
  display: flex;
  flex-direction: column;

  font-size: 2.4rem;
  color: white;
  font-family: ${(props) => props.theme.fonts.montserrat}, sans-serif;
  font-weight: 500;
  gap: 0.5rem;

  @media (max-width: 700px) {
    font-size: 2rem;
    margin-top: 2rem;
  }
  @media (max-width: 370px) {
    font-size: 1.5rem;
  }

  textarea {
    border-radius: 0.4rem;
    font-family: ${(props) => props.theme.fonts.montserrat};
    font-style: normal;
    font-weight: 400;
    font-size: 2rem;
    line-height: 2.4rem;
    padding: 0.8rem 1.6rem;

    color: #000000;
    resize: none;

    @media (max-width: 700px) {
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 2rem;
    }
    @media (max-width: 370px) {
      font-size: 1.2rem;
    }
  }
`;

export const SubmitButton = styled.button`
  align-self: flex-end;
  color: white;
  background-color: #23a4a6;

  font-size: 2rem;
  font-family: ${(props) => props.theme.fonts.montserrat}, sans-serif;
  font-weight: 500;

  height: 4.5rem;
  margin-top: 2rem;
  width: 20rem;
  border: none;
  border-radius: 0.4rem;

  @media (max-width: 700px) {
    width: 100%;
  }

  @media (max-width: 370px) {
    font-size: 1.2rem;
    height: 3rem;
  }

  cursor: pointer;
  transition-duration: 0.3s;
  :hover {
    background-color: rgba(35, 164, 166, 0.5);
  }
`;

export const InputMessage = styled.div`
  height: 72%;
`;

export const AreaText = styled.textarea`
  @media (max-width: 700px) {
    height: 16rem;
  }
`;
