import styled from 'styled-components';

export const Page = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
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
  margin-bottom: 10%;
  padding-left: 7%;
  width: 100%;
  height: auto;
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 20px;
  }
`;
export const Border = styled.div`
  width: 8%;
  max-width: 110px;
  height: auto;
  background-color: ${(props) => props.theme.colors.darkBlue};
`;
export const Title = styled.h2`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  text-align: center;
  position: relative;

  color: #123645;
  width: 100%;
  height: auto;

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
    text-align: center;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  max-width: 1227px;
  max-height: 560px;
  margin-top: 50px;
  padding-top: 10%;
  gap: 30%;
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 20px;
  }
`;

export const FirstColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-left: 10%;
`;

export const SecondColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  height: auto;
`;

export const PersonalData = styled.div`
  display: flex;
  flex-direction: column;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 25%;
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
`;

export const Address = styled.div`
  display: flex;
  flex-direction: column;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
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
`;
export const ChangeInfo = styled.p`
  padding: 10px;
  gap: 10px;

  width: 100%;
  height: auto;

  border: 1px solid #000000;
  border-radius: 5px;
  h3 {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;

    display: flex;
    align-items: center;
    text-align: center;

    color: #203699;
  }
`;
export const Contact = styled.p`
  gap: 20px;
  h3 {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;

    color: #000000;
  }
`;

export const Lessons = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 50px;
  white-space: nowrap;
  gap: 20px;

  width: 639px;
  height: auto;
  max-height: 310px;

  background: #123645;
  border-radius: 15px 15px 15px 15px;
  h3 {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;

    color: #fff;
  }
`;
export const Info2 = styled.div`
  display: flex;
  gap: 20px;
  h1 {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;

    color: #fff;
  }
  h2 {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;

    color: #fff;
  }
`;
