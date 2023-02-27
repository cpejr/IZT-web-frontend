import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 50px 0px;
  gap: 50px;

  width: 1440px;
  height: 600px;

  background-color: ${(props) => props.theme.colors.darkBlue};
`;

export const Title = styled.text`
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 37px;
  color: white;
`;

export const Information = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 1000px;
  height: 326px;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  width: 480px;
  height: 326px;
`;

export const Subsection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 10px;

  width: 480px;
  height: 74px;
`;

export const SendButton = styled.button`
  align-self: flex-end;
  color: white;
  background-color: ${(props) => props.theme.colors.greenishBlue};
  font-size: 20px;
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-weight: 500;
  height: 45px;
  margin-top: 20px;
  width: 200px;
  border: none;
  border-radius: 4px;
  @media (max-width: 700px) {
    width: 100%;
  }
  cursor: pointer;
  transition-duration: 0.3s;
  :hover {
    background-color: rgba(35, 164, 166, 0.5);
  }
`;
