import styled from 'styled-components';

export const ContactUs = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 542px;
  background-color: rgba(18, 54, 69, 1);
`;

export const Title = styled.text`
  font-size: 40px;
  color: white;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;

  @media (max-width: 700px) {
    font-size: 32px;
  }

  padding-bottom: 30px;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: row;
  width: 60%;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const SectionOne = styled.div`
  width: 50%;
  height: 255px;
`;

export const Empresa = styled.div`
  display: flex;
  flex-direction: column;

  font-size: 24px;
  color: white;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;

  @media (max-width: 700px) {
    font-size: 20px;
  }

  padding-bottom: 20px;
`;

export const Representante = styled.div`
  display: flex;
  flex-direction: column;

  font-size: 24px;
  color: white;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;

  @media (max-width: 700px) {
    font-size: 20px;
  }

  padding-bottom: 20px;
`;

export const Email = styled.div`
  display: flex;
  flex-direction: column;

  font-size: 24px;
  color: white;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;

  @media (max-width: 700px) {
    font-size: 20px;
  }

  padding-bottom: 20px;
`;

export const Telefone = styled.div`
  display: flex;
  flex-direction: column;

  font-size: 24px;
  color: white;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;

  @media (max-width: 700px) {
    font-size: 20px;
  }

  padding-bottom: 20px;
`;

export const SectionTwo = styled.div`
  width: 50%;
  height: 255px;
  padding-left: 105px;

  @media (max-width: 700px) {
    padding-left: 0px;
  }
`;

export const Mensagem = styled.div`
  display: flex;
  flex-direction: column;

  font-size: 24px;
  color: white;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;

  @media (max-width: 700px) {
    font-size: 20px;
  }
`;

export const BotaoEnviar = styled.button`
  background-color: #23a4a6;
  font-size: 20px;
  color: white;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
`;
