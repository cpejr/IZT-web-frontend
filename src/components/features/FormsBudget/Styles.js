import styled from 'styled-components';

const firstBreakPoint = '700px';
const secondBreakPoint = '370px';

export const ContactUs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 50px 0px;

  width: 100%;

  background-color: ${(props) => props.theme.colors.darkBlue};

  @media (max-width: ${firstBreakPoint}) {
    padding: 30px 0px;
    gap: 0px;
  }
`;

export const Title = styled.p`
  color: white;

  font-size: 30px;
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-weight: 600;

  padding-bottom: 40px;

  @media (max-width: ${firstBreakPoint}) {
    font-size: 24px;
    line-height: 39px;
    height: 39px;

    padding-bottom: 60px;
  }
  @media (max-width: ${secondBreakPoint}) {
    font-size: 18px;
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  height: 100%;
  width: 80%;
  max-width: 1440px;

  @media (max-width: ${firstBreakPoint}) {
    width: 85%;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 3%;
  width: 100%;

  @media (max-width: ${firstBreakPoint}) {
    gap: 10px;
    flex-direction: column;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  width: 48.5%;
  height: 100%;

  @media (max-width: ${firstBreakPoint}) {
    width: 100%;
  }
`;

export const Subsection = styled.div`
  display: flex;
  gap: 20px;

  padding: 0px;

  width: 100%;

  > div {
    width: calc(50% - 20px / 2);
  }
`;

export const SubmitButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: flex-end;

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

export const ButtonDiv = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
