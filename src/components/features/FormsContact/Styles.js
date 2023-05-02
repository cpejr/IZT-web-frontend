import styled from 'styled-components';

export const ContactUs = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
  height: auto;
  padding-bottom: 40px;
  background-color: rgba(18, 54, 69, 1);

  @media (max-width: 700px) {
    height: auto;
    padding-top: 30px;
    padding-bottom: 30px;
    margin-bottom: 30px;
  }
`;

export const Title = styled.p`
  display: flex;
  align-items: center;
  font-size: 40px;
  color: white;
  font-family: ${(props) => props.theme.fonts.montserrat}, sans-serif;
  font-weight: 600;
  height: 20%;
  padding-bottom: 40px;
  padding-top: 40px;

  @media (max-width: 700px) {
    font-weight: 600;
    font-size: 32px;
    line-height: 39px;
    height: 39px;
  }

  @media (max-width: 370px) {
    font-size: 25px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  width: 80%;
  gap: 20px;
  height: 100%;

  @media (max-width: 700px) {
    align-items: center;
    flex-direction: column;
    width: 100%;
    gap: 0%;
  }

  @media (min-width: 1440px) {
    max-width: 1440px;
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  gap: 20px;

  @media (max-width: 700px) {
    width: 80%;
  }
`;

export const Mensagem = styled.div`
  display: flex;
  flex-direction: column;

  font-size: 24px;
  color: white;
  font-family: ${(props) => props.theme.fonts.montserrat}, sans-serif;
  font-weight: 500;
  gap: 5px;

  @media (max-width: 700px) {
    font-size: 20px;
    margin-top: 20px;
  }
  @media (max-width: 370px) {
    font-size: 15px;
  }

  textarea {
    border-radius: 4px;
    font-family: ${(props) => props.theme.fonts.montserrat};
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    padding: 8px 16px;

    color: #000000;
    resize: none;

    @media (max-width: 700px) {
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
    }
    @media (max-width: 370px) {
      font-size: 12px;
    }
  }
`;

export const SubmitButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  gap: 10px;

  color: white;
  background-color: #23a4a6;

  font-size: 20px;
  font-family: ${(props) => props.theme.fonts.montserrat}, sans-serif;
  font-weight: 500;

  height: 45px;
  margin-top: 20px;
  width: 200px;
  border: none;
  border-radius: 4px;

  @media (max-width: 700px) {
    width: 100%;
  }

  @media (max-width: 370px) {
    font-size: 12px;
    height: 30px;
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
    height: 160px;
  }
`;
