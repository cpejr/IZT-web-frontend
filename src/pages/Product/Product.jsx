import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useGetProducts } from '../../hooks/query/products';
import step1 from '../../assets/productPage/steps/Group75.png';
import step2 from '../../assets/productPage/steps/Group76.png';
import step3 from '../../assets/productPage/steps/Group77.png';
import step4 from '../../assets/productPage/steps/Group78.png';
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

  const pictures = useMemo(
    () =>
      product?.[0]?.pictures.map((picture) => ({
        src: picture.url,
        name: picture.name,
        alt: picture.mimeType,
      })),
    [product]
  );

  const documents = useMemo(
    () =>
      product?.[0]?.documents.map((document, index) => ({
        name: `Documento ${index + 1}`,
        url: document.url,
      })),
    [product]
  );

  console.log(documents);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <Container>
      <ProductData>
        <ProductName>{product[0].name}</ProductName>
        <ProductInfo>
          <CarouselContainer>
            <Carousel
              carouselData={pictures}
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
                <FilesList files={documents} />
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
