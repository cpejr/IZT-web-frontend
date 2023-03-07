import styled from 'styled-components';

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

export const Title = styled.h2`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  text-align: center;

  color: #123645;
`;

export const Subtitle = styled.h3`
  margin-bottom: 5%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  width: 100%;
  max-width: 1227px;
  max-height: 560px;
  margin-top: 50px;
`;

export const FirstColumn = styled.div`
  display: flex;
  flex-direction: column;

  margin-right: 20%;
`;

export const SecondColumn = styled.div`
  display: flex;
  flex-direction: column;
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
export const Info = styled.div`
  display: flex;
  gap: 5px;
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

export const Value = styled.p`
  margin: 5%;
  color: ${(props) => props.color ?? 'black'};
`;

export const Label = styled.p`
  font-weight: bold;
  color: ${(props) => props.color ?? 'black'};
`;
export const Address = styled.p`
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
export const Contact = styled.p`
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
  /* gap: 40px; */

  width: 100%;
  height: auto;
  max-height: 310px;

  background: #123645;
  border-radius: 15px 0px 0px 15px;
  h2 {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;

    color: #ffff;
  }

  h3 {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;

    color: #ffff;
  }
`;
