import { useMemo, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useGetProducts } from '../../hooks/query/products';
import step1 from '../../assets/productPage/steps/Group75.png';
import step2 from '../../assets/productPage/steps/Group76.png';
import step3 from '../../assets/productPage/steps/Group77.png';
import step4 from '../../assets/productPage/steps/Group78.png';
import { BudgetForm, FilesList, Carousel } from '../../components/features';
import { ERROR_CODES } from '../../utils/constants';
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

const errorMessages = {
  [ERROR_CODES.NOT_FOUND]: 'Produto não encontrado',
};
const defaultErrorMessage =
  'Erro ao solicitar os dados do produto. Tente novamente mais tarde';

export default function ProductPage() {
  const [submitErrorMessage, setSubmitErrorMessage] = useState('');
  const { _id } = useParams();

  const onError = (error) => {
    const code = error.response.status;
    const message = errorMessages[code] || defaultErrorMessage;

    setSubmitErrorMessage(message);
  };
  const { data, isLoading } = useGetProducts({
    filters: { _id },
    onError,
  });

  const product = data?.[0];
  const pictures = useMemo(
    () =>
      product?.pictures?.map((picture) => ({
        src: picture.url,
        name: picture.name,
        alt: `Imagem de nome ${picture.name}`,
      })),
    [product]
  );
  const documents = useMemo(
    () =>
      product?.documents?.map((document, index) => ({
        name: `Documento ${index + 1}`,
        url: document.url,
      })),
    [product]
  );

  if (isLoading) return <p>Loading...</p>;
  if (submitErrorMessage) return <p>{submitErrorMessage}</p>;
  if (!product) return <Navigate to="*" />;

  return (
    <Container>
      <ProductData>
        <ProductName>{product?.name}</ProductName>
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
              <Description>{product?.description}</Description>
            </ProductDescription>
            <ProductBenefits>
              <BenefitsTitle>Vantagens do Produto</BenefitsTitle>
              <Benefits>{product?.advantages}</Benefits>
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
      <BudgetForm productId={_id} />
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
