import styled from 'styled-components';

export const Boddy = styled.div`
  background-color: #123645;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  background-color: #123645;
  width: 100%;
  height: 100%;
  gap: 40px;
  flex-direction: flex-start;
`;
export const DataInput = styled.div`
  h1 {
    margin-top: 5%;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;

    color: #ffffff;
  }
`;
export const Containerleft = styled.div`
  width: 35%;
  height: 100%;
  border-right: dashed;
  border-color: #ffffff;
  display: flex;
  //align-items: center;
  flex-direction: row;
  background-color: #123645;

  flex-direction: column;
  gap: 50px;
  margin-top: 20px;
  align-self: flex-start;
`;

export const Analysis = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  width: auto;
`;

export const ContainerRight = styled.div`
  //height: 100%;
  //border-right: dashed;
  //border-color: #ffffff;
  display: flex;
  //align-items: center;
  background-color: #123645;
  width: 100%;
  display: flex;
  margin-top: 5px;
  flex-direction: column;

  gap: 10px;
`;

export const Container2 = styled.div`
  margin: 3%;
  display: flex;
  flex-direction: center;
  align-items: center;
  background-color: #ffffff;
  height: 360px;
  width: 640px;

  @media (max-width: 1200px) {
    height: 250px;
    width: 540px;
  }
  @media (max-width: 1030px) {
    height: 210px;
    width: 500px;
  }
  @media (max-width: 950px) {
    height: 180px;
    width: 470px;
  }
  @media (max-width: 860px) {
    height: 150px;
    width: 440px;
  }
  @media (max-width: 730px) {
    height: 130px;
    width: 420px;
  }
`;

export const H1 = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  margin-left: 5px;
  color: #ffffff;
  @media (max-width: 950px) {
    font-size: 20px;
  }
  @media (max-width: 800px) {
    font-size: 17px;
  }
`;

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
`;

export const OutputData = styled.div`
  margin-bottom: 5%;
  padding-right: 0.6rem;
  flex-direction: row;
  border-right: dashed;
  border-color: #ffffff;
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
    font-size: 15px;
    line-height: 29px;
    color: #ffffff;
  }
  @media (max-width: 800px) {
    white-space: normal;
  }
`;

export const OutputData2 = styled.div`
  margin-bottom: 5%;
  border-right: dashed;
  border-color: #ffffff;
  h1 {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 29px;
    color: #ffffff;
  }
`;

export const Hw = styled.div``;
export const Hd = styled.div``;
export const Adr = styled.div``;
export const InclDresser = styled.div``;
export const RullerDegree = styled.div``;
export const Nr1 = styled.div``;
export const Nr2 = styled.div``;
export const Vp = styled.div``;
export const Vfa = styled.div``;
export const Qp = styled.div``;
export const Tc = styled.div``;
export const U = styled.div``;
export const Qw = styled.div``;
export const Hef = styled.div``;
export const Y = styled.div``;
export const Yra = styled.div``;
export const Yrc = styled.div``;

export const Text2 = styled.a`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 15px;

  color: #ffffff;
`;

export const Datas = styled.div``;
export const DataAnalysis = styled.div``;
export const MachineData = styled.div``;
export const ProductData = styled.div``;
export const RA = styled.div``;

export const Text = styled.a`
  font-family: 'Montserrat';
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
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
  padding: 5px;
  font-size: 20px;
  font-weight: normal;
  text-align: center;
  color: white;
  background-color: #123645;
  border-radius: 6px;
  border: solid;
  border-color: white;
  font-family: 'Montserrat';
  @media (max-width: 950px) {
    font-size: 14px;
    padding: 4px;
  }
`;

export const Button2 = styled.button`
  display: inline-block;
  margin-left: 5%;
  padding: 5px, 20px, 5px, 20px;
  font-size: 20px;
  font-weight: normal;
  text-align: center;
  color: white;
  background-color: #123645;
  border-radius: 6px;
  border: solid;
  border-color: white;
  font-family: 'Montserrat';
`;

export const Edit = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const Column = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  gap: 20px;
`;
