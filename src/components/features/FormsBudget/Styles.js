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
    gap: 0rem;
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
    width: calc(50% - 2rem / 2);
  }
`;

export const SubmitButton = styled.button`
  align-self: center;
  color: white;
  background-color: #23a4a6;

  font-size: 2.4rem;
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-weight: 700;

  width: 50rem;
  height: 5.7rem;
  margin-top: 4rem;
  line-height: 2.9rem;

  border: none;
  border-radius: 0.4rem;

  @media (max-width: ${firstBreakPoint}) {
    width: 50%;
    font-size: 1.8rem;
    height: 4.4rem;
  }
  @media (max-width: ${secondBreakPoint}) {
    font-size: 1.2rem;
    height: 3rem;
    margin-top: 2.5rem;
  }
  cursor: pointer;
  transition-duration: 0.3s;
  :hover {
    background-color: rgba(35, 164, 166, 0.5);
  }
`;
