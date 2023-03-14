import styled from 'styled-components';

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
  /* @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 20px;
  } */
`;
export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5%;
  margin-bottom: 15%;
  width: 98%;
  height: auto;
  @media (max-width: 700px) {
    padding: 0px;
    gap: 20px;
  }
`;

export const Title = styled.h2`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  text-align: center;
  color: #123645;
  width: 90%;
  height: auto;
  margin-bottom: 5%;

  @media (max-width: 700px) {
    font-size: 24px;
    line-height: 29px;
    text-align: center;
  }
`;

export const Subtitle = styled.h3`
  margin-bottom: 2%;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  white-space: nowrap;

  color: #000000;
  width: 100%;
  height: auto;
  @media (max-width: 700px) {
    font-size: 18px;
    line-height: 22px;
    text-align: left;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  align-items: flex-start;
  /* max-width: 1227px;
  max-height: 560px; */
  margin-top: 20px;
  padding-left: 10%;
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;
export const DataContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
    display: flex;
    justify-content: center;
  }
`;
export const FirstColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 50%;
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    gap: 20px;
  }
`;

export const SecondColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 50%;
  height: auto;
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center

    gap: 20px;
  }
`;

export const PersonalData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 5%;
  gap: 20px;
  width: 100%;
  height: auto;

  h3 {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;

    color: #000000;
  }
  @media (max-width: 700px) {
    text-align: left;
    align-items: left;
    h3 {
      font-size: 18px;
      line-height: 22px;
    }
  }
`;
export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 10px;
  width: 100;
  height: auto;
`;

export const Info = styled.div`
  display: flex;
  justify-content: stretch;
  gap: 20px;

  h1 {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;

    color: #000000;
  }
  h2 {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;

    color: #000000;
  }

  @media (max-width: 700px) {
    h1 {
      font-size: 14px;
      line-height: 17px;
    }
    h2 {
      font-size: 14px;
      line-height: 17px;
    }
  }
  @media (max-width: 320px) {
    h1 {
      font-size: 12px;
      line-height: 17px;
    }
    h2 {
      font-size: 12px;
      line-height: 17px;
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
  gap: 20px;
  width: 100%;
  height: auto;

  h3 {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;

    color: #000000;
  }
  @media (max-width: 700px) {
    h3 {
      font-size: 18px;
      line-height: 22px;
    }
  }
`;
export const ChangeInfo = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 40%;
  max-width: 239px;
  height: 45px;
  border: 1px solid #000000;
  border-radius: 5px;
  background-color: transparent;
  margin-top: 4%;

  font-family: ${(props) => props.theme.fonts.montserrat};
  font-size: 18px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.blue};
  @media (max-width: 700px) {
    align-items: center;
    justify-content: center;
    width: 218px;
  }
`;
export const Contact = styled.p`
  display: flex;
  flex-direction: column;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 5%;
  gap: 20px;
  width: 100%;
  height: auto;
  h3 {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;

    color: #000000;
  }
  @media (max-width: 700px) {
    h3 {
      font-size: 18px;
      line-height: 22px;
    }
  }
`;

export const Lessons = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 50px;
  gap: 20px;
  width: 100%;
  height: auto;

  background: #123645;
  border-radius: 15px 0px 0px 15px;
  h3 {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;

    color: #fff;
  }
  @media (max-width: 700px) {
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    max-width: 351px;
    h3 {
      font-size: 16px;
      line-height: 20px;
      text-align: center;
    }
  }
`;
export const Info2 = styled.div`
  display: flex;
  gap: 20px;
  h1 {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 29px;
    text-align: left;

    color: #fff;
  }
  h2 {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 29px;
    text-align: left;

    color: #fff;
  }
  @media (max-width: 700px) {
    h1 {
      font-size: 14px;
      line-height: 17px;
      text-align: center;
    }
    h2 {
      font-size: 14px;
      line-height: 17px;
      text-align: left;
    }
  }
  @media (max-width: 320px) {
    h1 {
      font-size: 12px;
      line-height: 17px;
    }
    h2 {
      font-size: 12px;
      line-height: 17px;
    }
  }
`;
