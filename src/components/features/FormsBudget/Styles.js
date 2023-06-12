import styled from 'styled-components';

const firstBreakPoint = '700px';
const secondBreakPoint = '370px';

export const ContactUs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 5rem 0rem;

  width: 100%;

  background-color: ${(props) => props.theme.colors.darkBlue};

  @media (max-width: ${firstBreakPoint}) {
    padding: 3rem 0rem;
  }
`;

export const Title = styled.p`
  color: white;

  font-size: 3rem;
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-weight: 600;

  padding-bottom: 4rem;

  @media (max-width: ${firstBreakPoint}) {
    font-size: 2.4rem;
    line-height: 3.9rem;
    height: 3.9rem;

    padding-bottom: 6rem;
  }
  @media (max-width: ${secondBreakPoint}) {
    font-size: 1.8rem;
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  height: 100%;
  width: 80%;
  max-width: 144rem;

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
    gap: 1rem;
    flex-direction: column;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  width: 48.5%;
  height: 100%;

  @media (max-width: ${firstBreakPoint}) {
    width: 100%;
  }
`;

export const Subsection = styled.div`
  display: flex;
  gap: 2rem;

  padding: 0rem;

  width: 100%;

  > div {
    width: calc(50% - 20px / 2);
  }
`;

export const AddressSelectDiv = styled.div`
  width: 100%;
  height: auto;

  margin-bottom: 3%;
`;

export const Label = styled.p`
  margin-bottom: 1rem;
  font-size: 1em;
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-weight: 400;
`;

export const SubmitButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
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

export const ButtonDiv = styled.div`
  gap: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
