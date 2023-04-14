import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  width: 100%;
  margin-top: 35px;

  font-family: ${(props) => props.theme.fonts.montserrat};
  font-style: normal;
  font-weight: 500;
`;

export const ProductData = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 35px;

  width: 90%;
  max-width: 1440px;

  @media (max-width: 700px) {
    gap: 0;
  }
`;

export const ProductName = styled.p`
  width: 100%;
  max-width: 328px;

  padding: 35px 0;

  font-size: 36px;
  line-height: 44px;
  text-align: center;
  color: #000000;

  @media (max-width: 500px) {
    font-size: 26px;
  }

  @media (max-width: 700px) {
    padding: 10px 0;
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 50px;
  margin-bottom: 40px;

  @media (max-width: 1080px) {
    flex-direction: column;
  }
`;

export const CarouselContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;

  width: 100%;
`;

export const TextInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  gap: 40px;

  width: 100%;

  padding: 0px;
`;

export const ProductDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 15px;

  width: 100%;
`;

export const DescriptionTitle = styled.div`
  width: 100%;

  font-size: 24px;
  line-height: 29px;
  color: #000000;
`;

export const Description = styled.div`
  width: 100%;

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
`;

export const BenefitsTitle = styled.div`
  width: 100%;

  font-size: 24px;
  line-height: 29px;
  text-align: left;
  color: #000000;
`;

export const Benefits = styled.div`
  width: 100%;

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

  background: #eeeeee;
`;

export const InfoTitle = styled.div`
  width: 100%;

  font-size: 24px;
  line-height: 29px;
  text-align: left;
  color: #000000;
`;

export const InfoDescription = styled.div`
  width: 100%;

  max-height: 200px;
  overflow-y: auto;
`;

export const ProcessSteps = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 5px;
  gap: 40px;
  margin-top: 35px;
  margin-bottom: 50px;
  flex-direction: column;

  width: 100%;
`;

export const Steps = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;

  @media (max-width: 700px) {
    flex-direction: row;
    justify-content: center;
  }
`;

export const Title = styled.div`
  height: auto;
  width: 100%;
  text-align: center;

  font-size: 24px;
  line-height: 29px;

  color: #000000;

  @media (max-width: 370px) {
    font-size: 20px;
  }
`;

export const Image = styled.img`
  height: 136px;

  @media (max-width: 1000px) {
    height: 100px;
  }
`;

export const StepsText = styled.p`
  font-size: 18px;
  line-height: 22px;
  text-align: center;

  @media (max-width: 1000px) {
    font-size: 15px;
  }
  @media (max-width: 700px) {
    height: auto;
    font-size: 18px;
    margin-bottom: 5px;
  }
  @media (max-width: 350px) {
    font-size: 14px;
    font-weight: 600;
  }
`;
export const Pic = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;
export const All = styled.div`
  display: flex;
  align-items: center;
`;
export const Block = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (max-width: 700px) {
    flex-direction: row;
    align-items: center;
    gap: 20px;
    justify-content: flex-start;
  }
`;
export const Arrow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  @media (max-width: 700px) {
    display: flex;
    align-self: center;
    height: auto;
    width: auto;
  }
`;

export const EmptyCell = styled.div`
  width: 40px;
  height: 40px;
`;

export const StepsImages = styled.div`
  display: grid;
  grid-template-columns: 135px 40px 135px 40px 135px 40px 135px;
  justify-content: center;
  justify-items: center;
  column-gap: 25px;
  width: 100%;

  @media (max-width: 1000px) {
    column-gap: 5px;
  }
  @media (max-width: 700px) {
    grid-template-rows: 110px 40px 110px 40px 110px 40px 110px;
    grid-template-columns: 1fr;
    justify-items: center;
    row-gap: 5px;
    max-width: 100px;
    align-content: center;
  }
`;

export const StepsDescription = styled.div`
  display: grid;
  grid-template-columns: 135px 40px 135px 40px 135px 40px 135px;
  justify-content: center;
  align-content: center;
  align-items: flex-start;
  justify-items: center;
  column-gap: 25px;
  width: 100%;
  @media (max-width: 1000px) {
    column-gap: 5px;
  }

  @media (max-width: 700px) {
    grid-template-rows: 110px 40px 110px 40px 110px 40px 110px;
    grid-template-columns: 1fr;
    row-gap: 5px;
    max-width: 200px;
    align-items: center;
  }
`;
