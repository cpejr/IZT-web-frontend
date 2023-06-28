import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;

  width: 100vw;

  margin-top: 3.5rem;

  font-family: ${(props) => props.theme.fonts.montserrat};
  font-style: normal;
  font-weight: 500;
`;

export const ProductData = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 3.5rem;

  width: 90%;
  max-width: 144rem;

  @media (max-width: 700px) {
    gap: 0;
  }
`;

export const ProductName = styled.p`
  width: 100%;
  max-width: 32.8rem;

  padding: 3.5rem 0;

  font-size: 3.6rem;
  line-height: 4.4rem;
  text-align: center;
  color: #000000;

  @media (max-width: 500px) {
    font-size: 2.6rem;
  }

  @media (max-width: 700px) {
    padding: 1rem 0;
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  gap: 5rem;

  width: 100%;
  margin-bottom: 4rem;

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
  gap: 4rem;

  width: 100%;

  padding: 0rem;
`;

export const ProductDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0rem;
  gap: 1.5rem;

  width: 100%;
`;

export const DescriptionTitle = styled.div`
  width: 100%;

  font-size: 2.4rem;
  line-height: 2.9rem;
  color: #000000;
`;

export const Description = styled.div`
  width: 100%;

  font-size: 1.8rem;
  line-height: 2.2rem;

  color: #000000;
`;

export const ProductBenefits = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0rem;
  gap: 1.5rem;

  width: 100%;
`;

export const BenefitsTitle = styled.div`
  width: 100%;

  font-size: 2.4rem;
  line-height: 2.9rem;
  text-align: left;
  color: #000000;
`;

export const Benefits = styled.div`
  width: 100%;

  font-size: 1.8rem;
  line-height: 2.2rem;
  color: #000000;
`;

export const ProductInfos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem;
  gap: 1.5rem;

  width: 100%;

  background: #eeeeee;
`;

export const InfoTitle = styled.div`
  width: 100%;

  font-size: 2.4rem;
  line-height: 2.9rem;
  text-align: left;
  color: #000000;
`;

export const InfoDescription = styled.div`
  width: 100%;

  max-height: 20rem;
  overflow-y: auto;
`;

export const ProcessSteps = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0rem 0.5rem;
  gap: 4rem;
  margin-top: 3.5rem;
  margin-bottom: 5rem;
  flex-direction: column;

  width: 100%;
`;

export const Steps = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
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

  font-size: 2.4rem;
  line-height: 2.9rem;

  color: #000000;

  @media (max-width: 370px) {
    font-size: 2rem;
  }
`;

export const Image = styled.img`
  height: 13.6rem;

  @media (max-width: 1000px) {
    height: 10rem;
  }
`;

export const StepsText = styled.p`
  font-size: 1.8rem;
  line-height: 2.2rem;
  text-align: center;

  @media (max-width: 1000px) {
    font-size: 1.5rem;
  }
  @media (max-width: 700px) {
    height: auto;
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }
  @media (max-width: 350px) {
    font-size: 1.4rem;
    font-weight: 600;
  }
`;
export const Pic = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
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
    gap: 2rem;
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
  width: 4rem;
  height: 4rem;
`;

export const StepsImages = styled.div`
  display: grid;
  grid-template-columns: 13.5rem 4rem 13.5rem 4rem 13.5rem 4rem 13.5rem;
  justify-content: center;
  justify-items: center;
  column-gap: 2.5rem;
  width: 100%;

  @media (max-width: 1000px) {
    column-gap: 0.5rem;
  }
  @media (max-width: 700px) {
    grid-template-rows: 11rem 4rem 11rem 4rem 11rem 4rem 11rem;
    grid-template-columns: 1fr;
    justify-items: center;
    row-gap: 0.5rem;
    max-width: 10rem;
    align-content: center;
  }
`;

export const StepsDescription = styled.div`
  display: grid;
  grid-template-columns: 13.5rem 4rem 13.5rem 4rem 13.5rem 4rem 13.5rem;
  justify-content: center;
  align-content: center;
  align-items: flex-start;
  justify-items: center;
  column-gap: 2.5rem;
  width: 100%;
  @media (max-width: 1000px) {
    column-gap: 0.5rem;
  }

  @media (max-width: 700px) {
    grid-template-rows: 11rem 4rem 11rem 4rem 11rem 4rem 11rem;
    grid-template-columns: 1fr;
    row-gap: 0.5rem;
    max-width: 20rem;
    align-items: center;
  }
`;
