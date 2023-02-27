import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 50px 0px;
  gap: 50px;

  width: 100%;
  height: auto;

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

  width: 80%;
  height: 326px;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  align-items: center;
  justify-content: center;
`;
export const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  width: 48%;
  height: 326px;
`;

export const Subsection = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0px;
  gap: 20px;
  width: 100%;
  height: 74px;
`;

export const SendButton = styled.button`
  align-self: center;
  color: white;
  background-color: ${(props) => props.theme.colors.greenishBlue};
  font-size: 20px;
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-weight: 700;
  height: 50px;
  margin-top: 40px;
  width: 35%;
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
