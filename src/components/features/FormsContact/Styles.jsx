import styled from 'styled-components';

export const ContactUs = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  height: 542px;
  background-color: rgba(18, 54, 69, 1);
  padding-bottom: 5%;
  padding-top: 1%;

  @media (max-width: 700px) {
    height: 700px;
  }
`;

export const Title = styled.p`
  display: flex;
  align-items: center;
  font-size: 40px;
  color: white;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  height: 20%;

  @media (max-width: 700px) {
    font-size: 32px;
    height: 10%;
  }
`;

export const Form = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 80%;
  gap: 105px;
  height: 80%;

  @media (max-width: 700px) {
    flex-direction: column;
    gap: 0px;
    width: 100%;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;

  @media (max-width: 700px) {
    width: 80%;
  }
`;

export const Mensagem = styled.div`
  display: flex;
  flex-direction: column;

  font-size: 24px;
  color: white;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  gap: 5px;

  @media (max-width: 700px) {
    font-size: 20px;
  }
`;

export const BotaoEnviar = styled.button`
  align-self: flex-end;
  color: white;
  background-color: #23a4a6;

  font-size: 20px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;

  height: 45px;
  margin-top: 20px;
  width: 200px;
  border: none;
  border-radius: 4px;

  cursor: pointer;
  transition-duration: 0.3s;
  :hover {
    background-color: rgba(35, 164, 166, 0.5);
  }
`;

export const InputMessage = styled.div`
  height: 72%;
`;
