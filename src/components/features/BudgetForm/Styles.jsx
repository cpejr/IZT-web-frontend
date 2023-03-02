import styled from 'styled-components';

export const ContactUs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 50px 0px;

  width: 100%;
  height: auto;

  background-color: ${(props) => props.theme.colors.darkBlue};

  @media (max-width: 700px) {
    padding: 50px 0px;
    gap: 0px;
  }
`;

export const Title = styled.p`
  display: flex;
  align-items: center;
  font-size: 30px;
  color: white;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  height: 20%;
  padding-bottom: 40px;
  padding-top: 40px;

  @media (max-width: 700px) {
    font-weight: 600;
    font-size: 24px;
    line-height: 39px;
    height: 39px;
    padding-top: 15px;
  }
  @media (max-width: 370px) {
    font-size: 18px;
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  width: 70%;

  @media (max-width: 700px) {
    width: 95%;
  }
`;

export const Container = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 3%;
  width: 100%;

  @media (max-width: 700px) {
    gap: 20px;
    flex-direction: column;
  }
  @media (max-width: 700px) {
    gap: 10px;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  width: 48.5%;
  height: 100%;
  gap: 20px;
  @media (max-width: 700px) {
    width: 80%;
  }
  @media (max-width: 700px) {
    gap: 10px;
  }
`;

export const Subsection = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0px;
  gap: 20px;
  height: auto;
  width: 100%;
`;

export const BotaoEnviar = styled.button`
  align-self: center;
  color: white;
  background-color: #23a4a6;

  font-size: 24px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;

  width: 500px;
  height: 57px;
  margin-top: 40px;
  line-height: 29px;

  border: none;
  border-radius: 4px;

  @media (max-width: 700px) {
    width: 50%;
    font-size: 18px;
    height: 44px;
  }
  @media (max-width: 370px) {
    font-size: 12px;
    height: 30px;
    margin-top: 25px;
  }
  cursor: pointer;
  transition-duration: 0.3s;
  :hover {
    background-color: rgba(35, 164, 166, 0.5);
  }
`;
