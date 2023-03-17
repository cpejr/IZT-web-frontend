import { useParams } from 'react-router-dom';
import { useGetProducts } from '../../hooks/query/products';
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
  ProcessSteps,
  Steps,
  Title,
  Step,
  Image,
  StepsText,
} from './Styles';

function ProductPage() {
  const { _id } = useParams();
  const {
    data: product,
    isLoading,
    error,
  } = useGetProducts({ filters: { _id } });
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;
  console.log(product);

  return (
    <Container>
      <ProductData>
        <ProductName>{product[0].name}</ProductName>
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
              <Description>{product[0].description}</Description>
            </ProductDescription>
            <ProductBenefits>
              <BenefitsTitle>Vantagens do Produto</BenefitsTitle>
              <Benefits>{product[0].advantages}</Benefits>
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
