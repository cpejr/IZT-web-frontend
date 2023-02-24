import styled from 'styled-components';

export const Page = styled.div`
  background-color: ${(props) => props.theme.colors.gray[1]};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 45px;
  padding-bottom: 60px;
  font-size: 20px;
`;

export const Container = styled.div`
  width: 90%;
  height: 800px;
  max-width: 650px;
  border-radius: 30px;
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.25);
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;
  gap: 65px;
`;

export const Logo = styled.img`
  width: auto;
  max-height: 100px;
`;

export const dataEntry = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.blue};
  font-family: ${(props) => props.theme.fonts.montserrat};
  font-size: 1.9em;
  font-weight: 700;
`;

export const Form = styled.form`
  gap: 30px;
`;
