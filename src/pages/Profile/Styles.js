import { Modal } from 'antd';
import styled from 'styled-components';

export const ModalStyle = styled(Modal)`
  :where(.css-dev-only-do-not-override-ph9edi).ant-modal .ant-modal-content {
    background-color: white;
    border-radius: rem;
  }
`;

export const Background = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  background-color: ${(props) => props.theme.colors.darkBlue};
`;
export const Page = styled.div`
  display: flex;
  flex-direction: column;
  width: 92%;
  height: auto;
  background-color: #fff;
  align-items: center;
  @media (max-width: 700px) {
    width: 100%;
  }
`;
export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5%;
  margin-bottom: 10%;
  width: 100%;
  height: auto;
  @media (max-width: 700px) {
    padding: 0rem;
    gap: 2rem;
    width: 90%;
  }
`;

export const Title = styled.h2`
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-style: normal;
  font-weight: 700;
  font-size: 3.2rem;
  line-height: 3.9rem;
  text-align: center;
  color: #123645;
  width: 90%;
  height: auto;
  margin-bottom: 5%;

  @media (max-width: 700px) {
    font-size: 2.4rem;
    line-height: 2.9rem;
    text-align: center;
  }
`;

export const Subtitle = styled.h3`
  margin-bottom: 2%;
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-style: normal;
  font-weight: 700;
  font-size: 2rem;
  line-height: 2.4rem;
  white-space: nowrap;

  color: #000000;
  width: 100%;
  height: auto;
  @media (max-width: 700px) {
    font-size: 1.8rem;
    line-height: 2.2rem;
    text-align: left;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  align-items: flex-start;
  margin-top: 2rem;
  padding-left: 10%;
  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding-left: 0rem;
  }
`;
export const DataContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  gap: 5%;
  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const FirstColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 50%;
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    gap: 2rem;
  }
`;

export const SecondColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 50%;
  height: auto;
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
    gap: 2rem;
  }
`;

export const PersonalData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 5%;
  gap: 2rem;
  width: 100%;
  height: auto;

  h3 {
    font-family: ${(props) => props.theme.fonts.montserrat};
    font-style: normal;
    font-weight: 600;
    font-size: 2.4rem;
    line-height: 2.9rem;
    color: #000000;
  }
  @media (max-width: 700px) {
    text-align: center;
    align-items: flex-start;
    h3 {
      font-size: 1.8rem;
      line-height: 2.2rem;
      text-align: start;
    }
  }
`;
export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0rem;
  gap: 1rem;
  width: 100%;
  height: auto;
  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const Info = styled.div`
  display: flex;
  justify-content: stretch;
  gap: 2rem;
  width: 100%;

  h1 {
    font-family: ${(props) => props.theme.fonts.montserrat};
    font-style: normal;
    font-weight: 700;
    font-size: 2rem;
    line-height: 2.4rem;
    text-align: center;
    color: #000000;
  }
  h2 {
    font-family: ${(props) => props.theme.fonts.montserrat};
    font-style: normal;
    font-weight: 500;
    font-size: 2rem;
    line-height: 2.4rem;

    color: #000000;
  }
  @media (max-width: 800px) {
    h1 {
      font-size: 1.7rem;
      line-height: 2.3rem;
    }
    h2 {
      font-size: 1.7rem;
      line-height: 2.3rem;
    }
  }

  @media (max-width: 700px) {
    h1 {
      font-size: 1.4rem;
      line-height: 1.7rem;
    }
    h2 {
      font-size: 1.4rem;
      line-height: 1.7rem;
    }
  }
  @media (max-width: 320px) {
    h1 {
      font-size: 1.2rem;
      line-height: 1.7rem;
    }
    h2 {
      font-size: 1.2rem;
      line-height: 1.7rem;
    }
  }
`;

export const Address = styled.div`
  display: flex;
  flex-direction: column;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 5%;
  gap: 2rem;
  width: 100%;
  height: auto;

  h3 {
    font-family: ${(props) => props.theme.fonts.montserrat};
    font-style: normal;
    font-weight: 600;
    font-size: 2.4rem;
    line-height: 2.9rem;

    color: #000000;
  }
  @media (max-width: 700px) {
    align-items: flex-start;
    h3 {
      font-size: 1.8rem;
      line-height: 2.2rem;
      text-align: start;
    }
  }
`;
export const ChangeInfo = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  width: 24rem;
  height: 4.5rem;

  border: 0.1rem solid #000000;
  border-radius: 0.5rem;
  background-color: transparent;
  margin-top: 4%;

  font-family: ${(props) => props.theme.fonts.montserrat};
  font-size: 1.8rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.blue};

  cursor: pointer;
  transition-duration: 0.3s;
  :hover {
    background-color: ${(props) => props.theme.colors.blue};
    color: white;
  }
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 5%;
  gap: 2rem;
  width: 100%;
  height: auto;
  h3 {
    font-family: ${(props) => props.theme.fonts.montserrat};
    font-style: normal;
    font-weight: 600;
    font-size: 2.4rem;
    line-height: 2.9rem;

    color: #000000;
  }
  @media (max-width: 700px) {
    align-items: flex-start;
    width: 90%;
    h3 {
      font-size: 1.8rem;
      line-height: 2.2rem;
      text-align: start;
    }
  }
`;

export const Lessons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 5rem;
  gap: 2rem;
  width: 100%;
  height: auto;

  background: #123645;
  border-radius: 1.5rem 0rem 0rem 1.5rem;
  h3 {
    font-family: ${(props) => props.theme.fonts.montserrat};
    font-style: normal;
    font-weight: 600;
    font-size: 2.4rem;
    line-height: 2.9rem;
    text-align: start;

    color: #fff;
  }
  @media (max-width: 900px) {
    border-radius: 1rem;
    justify-content: flex-start;
    align-items: flex-start;
    text-align: center;
    width: 100%;
    /* max-width: 50rem; */
    h3 {
      font-size: 2rem;
      line-height: 2rem;
      text-align: start;
    }
  }
  @media (max-width: 320px) {
    h3 {
      font-size: 1.8rem;
      line-height: 2rem;
      text-align: start;
    }
  }
`;
export const LessonInfo = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  h1 {
    font-family: ${(props) => props.theme.fonts.montserrat};
    font-style: normal;
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 2.9rem;
    text-align: start;

    color: #fff;
  }
  h2 {
    font-family: ${(props) => props.theme.fonts.montserrat};
    font-style: normal;
    font-weight: 500;
    font-size: 1.8rem;
    line-height: 2.9rem;
    text-align: right;

    color: #fff;
  }
  @media (max-width: 700px) {
    h1 {
      font-size: 1.4rem;
      line-height: 1.7rem;
      text-align: start;
    }
    h2 {
      font-size: 1.4rem;
      line-height: 1.7rem;
      text-align: end;
    }
  }
  @media (max-width: 320px) {
    h1 {
      font-size: 1.1rem;
      line-height: 1.7rem;
    }
    h2 {
      font-size: 1.1rem;
      line-height: 1.7rem;
    }
  }
`;
