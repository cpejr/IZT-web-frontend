import step1 from '../../assets/productPage/steps/Group75.png';
import step2 from '../../assets/productPage/steps/Group76.png';
import step3 from '../../assets/productPage/steps/Group77.png';
import step4 from '../../assets/productPage/steps/Group78.png';
import productData from '../../assets/productPage/carousel/data';
import { BudgetForm, FilesList, Carousel } from '../../components/features';
import {
  Container,
  ProductData,
  ProductName,
  DataContainer,
  TextInfo,
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
  ProcessSteps,
  Steps,
  Title,
  Step,
  Image,
  StepsText,
} from './Styles';

function ProductPage() {
  return (
    <Container>
      <ProductData>
        <ProductName>Nome do Produto</ProductName>
        <ProductInfo>
          <DataContainer>
            <Carousel
              productData={productData}
              height="537.17px"
              width="543.75px"
              aspectRatio="12 / 9"
              miniImages
            />
          </DataContainer>
          <DataContainer>
            <TextInfo>
              <ProductDescription>
                <DescriptionTitle>Descrição do produto</DescriptionTitle>
                <Description>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque sed odio eu enim gravida varius quis non orci.
                  Curabitur sed placerat sem, eu faucibus diam. Fusce ut nulla
                  sed sapien.
                </Description>
              </ProductDescription>
              <ProductBenefits>
                <BenefitsTitle>Vantagens do Produto</BenefitsTitle>
                <Benefits>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque sed odio eu enim gravida varius quis non orci.
                  Curabitur sed placerat sem, eu faucibus diam. Fusce ut nulla
                  sed sapien.
                </Benefits>
              </ProductBenefits>
              <ProductInfos>
                <InfoTitle>Mais informações</InfoTitle>
                <InfoDescription>
                  <FilesList />
                </InfoDescription>
              </ProductInfos>
            </TextInfo>
          </DataContainer>
        </ProductInfo>
      </ProductData>
      <BudgetForm />
      <ProcessSteps>
        <Title>Como processamos seu orçamento?</Title>
        <Steps>
          <Step>
            <Image src={step1} alt="1 Step" />
            <StepsText>Entramos em contato para planejar o produto</StepsText>
          </Step>

          <Step>
            <Image src={step2} alt="2 Step" />
            <StepsText>Produzimos a sua peça</StepsText>
          </Step>

          <Step>
            <Image src={step3} alt="3 Step" />
            <StepsText>Realizamos a inspeção do produto</StepsText>
          </Step>

          <Step>
            <Image src={step4} alt="4 Step" />
            <StepsText>Enviamos para você</StepsText>
          </Step>
        </Steps>
      </ProcessSteps>
    </Container>
  );
}

export default ProductPage;
