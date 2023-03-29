import { AiOutlineRight, AiOutlineDown } from 'react-icons/ai';
import { useState, useEffect } from 'react';
import step1 from '../../assets/productPage/steps/Group75.png';
import step2 from '../../assets/productPage/steps/Group76.png';
import step3 from '../../assets/productPage/steps/Group77.png';
import step4 from '../../assets/productPage/steps/Group78.png';
import carouselData from '../../assets/productPage/carousel/data';
import { BudgetForm, FilesList, Carousel } from '../../components/features';
import {
  Container,
  ProductData,
  ProductName,
  CarouselContainer,
  TextInfoContainer,
  ProductDescription,
  ProductInfo,
  DescriptionTitle,
  Description,
  ProductBenefits,
  BenefitsTitle,
  Benefits,
  ProductInfos,
  InfoTitle,
  InfoDescription,
  Arrow,
  ProcessSteps,
  Steps,
  Title,
  Image,
  StepsText,
  EmptyCell,
  StepsDescription,
  StepsImages,
} from './Styles';

export default function ProductPage() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <Container>
      <ProductData>
        <ProductName>Nome do Produto</ProductName>
        <ProductInfo>
          <CarouselContainer>
            <Carousel
              carouselData={carouselData}
              maxHeight="537.17px"
              maxWidth="543.75px"
              aspectRatio="12 / 9"
              miniImages
            />
          </CarouselContainer>
          <TextInfoContainer>
            <ProductDescription>
              <DescriptionTitle>Descrição do produto</DescriptionTitle>
              <Description>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque sed odio eu enim gravida varius quis non orci.
                Curabitur sed placerat sem, eu faucibus diam. Fusce ut nulla sed
                sapien.
              </Description>
            </ProductDescription>
            <ProductBenefits>
              <BenefitsTitle>Vantagens do Produto</BenefitsTitle>
              <Benefits>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque sed odio eu enim gravida varius quis non orci.
                Curabitur sed placerat sem, eu faucibus diam. Fusce ut nulla sed
                sapien.
              </Benefits>
            </ProductBenefits>
            <ProductInfos>
              <InfoTitle>Mais informações</InfoTitle>
              <InfoDescription>
                <FilesList />
              </InfoDescription>
            </ProductInfos>
          </TextInfoContainer>
        </ProductInfo>
      </ProductData>
      <BudgetForm />
      <ProcessSteps>
        <Title>Como processamos seu orçamento?</Title>
        <Steps>
          <StepsImages>
            <Image src={step1} alt="1 Step" />

            <Arrow>
              {windowWidth > 700 ? (
                <AiOutlineRight color="#123645" size="40px" strokeWidth={20} />
              ) : (
                <AiOutlineDown color="#123645" size="40px" strokeWidth={20} />
              )}
            </Arrow>

            <Image src={step2} alt="2 Step" />

            <Arrow>
              {' '}
              {windowWidth > 700 ? (
                <AiOutlineRight color="#123645" size="40px" strokeWidth={20} />
              ) : (
                <AiOutlineDown color="#123645" size="40px" strokeWidth={20} />
              )}
            </Arrow>

            <Image src={step3} alt="3 Step" />

            <Arrow>
              {' '}
              {windowWidth > 700 ? (
                <AiOutlineRight color="#123645" size="40px" strokeWidth={20} />
              ) : (
                <AiOutlineDown color="#123645" size="40px" strokeWidth={20} />
              )}
            </Arrow>

            <Image src={step4} alt="4 Step" />
          </StepsImages>
          <StepsDescription>
            <StepsText>Entramos em contato para planejar o produto</StepsText>
            <EmptyCell />
            <StepsText>Produzimos a sua peça</StepsText>
            <EmptyCell />
            <StepsText>Realizamos a inspeção do produto</StepsText>
            <EmptyCell />
            <StepsText>Enviamos para você</StepsText>
          </StepsDescription>
        </Steps>
      </ProcessSteps>
    </Container>
  );
}
