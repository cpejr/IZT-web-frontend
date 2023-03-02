import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  width: 100%;
`;
export const Product = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 35px;
  max-width: 1400px;
`;
export const ProductImage = styled.div``;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
  margin-bottom: 40px;
  @media (max-width: 700px) {
    flex-direction: column;
    gap: 23px;
  }
`;

export const ProductName = styled.div`
  width: 328px;
  height: 44px;
  padding-top: 35px;
  padding-bottom: 35px;
  align-self: center;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 44px;
  text-align: center;
  color: #000000;
`;
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  gap: 40px;
  height: 537.17px;
`;
export const ProductDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 15px;

  width: 100%;
  height: 132px;
`;
export const DescriptionTitle = styled.div`
  height: auto;
  width: 100%;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #000000;
`;
export const Description = styled.div`
  width: 100%;
  height: auto;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;

  color: #000000;
`;
export const ProductBenefits = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 15px;

  width: 100%;
  height: auto;
`;
export const BenefitsTitle = styled.div`
  width: 100%;
  height: auto;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  text-align: left;
  color: #000000;
`;
export const Benefits = styled.div`
  width: 100%;
  height: auto;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #000000;
`;
export const ProductInfos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  gap: 15px;
  width: 100%;
  height: auto;
  background: #eeeeee;
`;
export const InfoTitle = styled.div`
  width: 100%;
  height: auto;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  text-align: left;
  color: #000000;
`;
export const InfoDescription = styled.div`
  width: 100%;
  height: auto;

  flex-grow: 1;
  max-height: 200px; /* set the maximum height of the file list */
  overflow-y: auto; /* add a vertical scrollbar when the file list exceeds the maximum height */
`;
export const ProcessSteps = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 40px;
  margin-top: 35px;
  margin-bottom: 50px;
  flex-direction: column;

  width: 100%;
  height: auto;

  @media (max-width: 700px) {
    height: 950px;
  }
`;
export const Steps = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 50px;

  width: 100%;
  height: auto;

  @media (max-width: 1000px) {
    gap: 1%;
  }
  @media (max-width: 700px) {
    flex-direction: column;
    gap: 23px;
  }
`;
export const Title = styled.div`
  height: auto;
  width: 100%;
  text-align: center;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;

  color: #000000;

  @media (max-width: 370px) {
    font-size: 20px;
  }
`;
export const Step = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media (max-width: 700px) {
    gap: 10px;
  }
`;

export const Image = styled.img`
  width: auto;
  height: 136px;

  @media (max-width: 1000px) {
    height: 110px;
  }
`;

export const StepsText = styled.p`
  max-width: 180px;
  height: 66px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  text-align: center;

  @media (max-width: 1000px) {
    font-size: 15px;
    width: 80%;
  }
  @media (max-width: 700px) {
    height: auto;
  }
`;
