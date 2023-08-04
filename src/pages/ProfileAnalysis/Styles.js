import styled from 'styled-components';

export const Boddy = styled.div`
  background-color: #123645;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  background-color: #123645;
  width: 100%;
  height: 100%;
  gap: 4rem;
  flex-direction: flex-start;
`;
export const DataInput = styled.div`
  h1 {
    margin-top: 5%;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 2.4rem;
    line-height: 2.9rem;

    color: #ffffff;
  }
`;

export const Containerleft = styled.div`
  width: 35%;
  height: 95%;
  border-right: 1.7px dashed;
  border-color: #ffffff;
  display: flex;
  flex-direction: row;
  background-color: #123645;

  flex-direction: column;
  gap: 5rem;
  margin-top: 20px;
  align-self: flex-start;
`;

export const Analysis = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  width: auto;
`;

export const ContainerRight = styled.div`
  display: flex;

  background-color: #123645;
  width: 100%;
  display: flex;
  margin-top: 0.5rem;
  flex-direction: column;

  gap: 1rem;
`;

export const Container2 = styled.div`
  margin: 3rem 0rem 3rem 0rem;
  display: flex;
  flex-direction: center;
  align-items: center;
  background-color: #ffff;
  height: 36rem;
  width: 64rem;

  @media (max-width: 1200px) {
    height: 33rem;
    width: 54rem;
  }
  @media (max-width: 1030px) {
    height: 31rem;
    width: 50rem;
  }
  @media (max-width: 950px) {
    height: 28rem;
    width: 47rem;
  }
  @media (max-width: 860px) {
    height: 25rem;
    width: 44rem;
  }
  @media (max-width: 730px) {
    height: 23rem;
    width: 42rem;
  }
`;

export const H1 = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 2.4rem;
  line-height: 2.9rem;
  color: #ffffff;

  @media (max-width: 950px) {
    font-size: 2rem;
  }
  @media (max-width: 800px) {
    font-size: 1.7rem;
  }
`;

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
`;

export const OutputData = styled.div`
  margin-bottom: 5%;
  padding-right: 3rem;
  padding-left: ${(props) => (props.rightOutputData ? '0rem' : '3rem')};
  flex-direction: row;
  border-right: ${(props) =>
    props.rightOutputData ? 'none' : '1.7px dashed white'};
  width: 100%;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  white-space: nowrap;

  h1 {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 2.9rem;
    color: #ffffff;
  }

  .OutputDataRight {
    background-color: black;
  }
  @media (max-width: 850px) {
    white-space: normal;
  }
`;

export const OutputData2 = styled.div`
  margin-bottom: 5%;
  border-color: #ffffff;
  h1 {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 2.9rem;
    color: #ffffff;
  }
`;

export const Text2 = styled.a`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 300;
  font-size: 1.2rem;
  line-height: 1.5rem;

  color: #ffffff;
`;

export const Text = styled.a`
  font-family: 'Montserrat';
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 2rem;
  letter-spacing: 0em;
  text-align: left;

  color: #ffffff;
`;

export const Data = styled.div`
  display: flex;
  align-self: center;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export const InputData = styled.div`
  width: 24%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 2%;
`;

export const Button = styled.button`
  display: inline-block;
  margin-left: 5%;
  padding: 0.5rem 1.5rem 0.5rem 1.5rem;
  font-size: 2rem;
  font-weight: normal;
  text-align: center;
  color: white;
  background-color: #123645;
  border-radius: 0.6rem;
  border: 1px solid;
  border-color: white;
  font-family: 'Montserrat';
  cursor: pointer;

  @media (max-width: 950px) {
    font-size: 1.4rem;
    padding: 0.4rem 1.5rem 0.4rem 1.5rem;
  }

  &:hover {
    opacity: 0.8;
  }
  
`;

export const Button2 = styled.button`
  display: inline-block;
  margin-left: 5%;
  padding: 0.5rem, 2rem, 0.5rem, 2rem;
  font-size: 2rem;
  font-weight: normal;
  text-align: center;
  color: white;
  background-color: #123645;
  border-radius: 0.6rem;
  border: solid;
  border-color: white;
  font-family: 'Montserrat';
`;

export const Edit = styled.div`
  margin-top: 3rem;
  padding-left: 2rem;
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const Column = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  gap: 2rem;
`;
