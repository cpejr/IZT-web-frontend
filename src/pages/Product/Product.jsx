import { useMemo } from 'react';

import { useParams, useNavigate } from 'react-router-dom';

import { AiOutlineRight, AiOutlineDown } from 'react-icons/ai';
import { useState, useEffect } from 'react';
import step1 from '../../assets/productPage/steps/Group75.png';
import step2 from '../../assets/productPage/steps/Group76.png';
import step3 from '../../assets/productPage/steps/Group77.png';
import step4 from '../../assets/productPage/steps/Group78.png';
import { BudgetForm, FilesList, Carousel } from '../../components/features';
import { useGetProductById } from '../../hooks/query/products';
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
import buildGetProducErrorMessage from './utils';

export default function Product() {
  const { _id } = useParams();
  const navigate = useNavigate();

  const { data: product, isLoading } = useGetProductById({
    _id,
    onError: (err) => {
      const code = err?.response?.data?.httpCode;
      const message = buildGetProducErrorMessage(code);

      // Do something with the error message
      alert(message);

      navigate('*'); // Go to NotFound page
    },
  });

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

  if (isLoading) return <p style={{ height: '100vh' }}>Loading...</p>;
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
        <ProductName>{product.name}</ProductName>
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
              <Description>{product.description}</Description>
            </ProductDescription>
            <ProductBenefits>
              <BenefitsTitle>Vantagens do Produto</BenefitsTitle>
              <Benefits>{product.advantages}</Benefits>
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
