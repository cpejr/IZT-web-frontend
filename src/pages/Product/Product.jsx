import { useMemo, useState } from 'react';

import { AiOutlineRight, AiOutlineDown } from 'react-icons/ai';
import { useMediaQuery } from 'react-responsive';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import step1 from '../../assets/productPage/steps/Group75.png';
import step2 from '../../assets/productPage/steps/Group76.png';
import step3 from '../../assets/productPage/steps/Group77.png';
import step4 from '../../assets/productPage/steps/Group78.png';
import {
  FilesList,
  FormsBudget,
  Carousel,
  Header,
} from '../../components/features';
import { useGetProductById } from '../../hooks/query/products';
import { useGlobalLanguage } from '../../stores/globalLanguage';
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
import { TranslateText } from './translations';
import buildGetProducErrorMessage from './utils';
import translateText from '../../utils/translateAPI';
export default function Product() {
  // Translations
  const { globalLanguage } = useGlobalLanguage();
  const translateLanguage = globalLanguage.toLowerCase();
  const translations = TranslateText({ globalLanguage });
  const [productDescription, setProductDescription] = useState('');
  const [productAdvanges, setProductAdvanges] = useState('');

  const { _id } = useParams();
  const navigate = useNavigate();
  const isMediumScreen = useMediaQuery({ minWidth: 700 });

  const { data: product, isLoading } = useGetProductById({
    _id,
    onError: (err) => {
      const code = err?.response?.data?.httpCode;
      const message = buildGetProducErrorMessage(code);
      toast.error(message);

      navigate('*'); // Go to NotFound page
    },
  });

  translateText(product?.description, translateLanguage)
    .then((translate) => {
      setProductDescription(translate);
    })
    .catch((error) => {
      console.error('Erro ao traduzir:', error);
    });

  translateText(product?.advantages, translateLanguage)
    .then((translate) => {
      setProductAdvanges(translate);
    })
    .catch((error) => {
      return { error };
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
        name: `${translations.document}  ${index + 1}`,
        url: document.url,
      })),
    [product]
  );

  return (
    <Container>
      <ProductData>
        {isLoading ? (
          <h1
            style={{
              height: '66rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {translations.cardTitle1}
          </h1>
        ) : (
          <>
            <ProductName>{product.name}</ProductName>
            <ProductInfo>
              <CarouselContainer>
                <Carousel
                  carouselData={pictures}
                  maxHeight="53.717rem"
                  maxWidth="54.375rem"
                  aspectRatio="12 / 9"
                  miniImages
                />
              </CarouselContainer>
              <TextInfoContainer>
                <ProductDescription>
                  <DescriptionTitle>{translations.text1}</DescriptionTitle>
                  <Description>{productDescription}</Description>
                </ProductDescription>
                <ProductBenefits>
                  <BenefitsTitle>{translations.text2}</BenefitsTitle>
                  <Benefits>{productAdvanges}</Benefits>
                </ProductBenefits>
                <ProductInfos>
                  <InfoTitle>{translations.text3}</InfoTitle>
                  <InfoDescription>
                    <FilesList files={documents} />
                  </InfoDescription>
                </ProductInfos>
              </TextInfoContainer>
            </ProductInfo>
          </>
        )}
      </ProductData>
      <FormsBudget
        productId={_id}
        isLoadingProduct={isLoading}
        language={globalLanguage}
      />
      <ProcessSteps>
        <Title>{translations.text4}</Title>
        <Steps>
          <StepsImages>
            <Image src={step1} alt="1 Step" />

            <Arrow>
              {isMediumScreen ? (
                <AiOutlineRight color="#123645" size="4rem" strokeWidth={20} />
              ) : (
                <AiOutlineDown color="#123645" size="4rem" strokeWidth={20} />
              )}
            </Arrow>

            <Image src={step2} alt="2 Step" />

            <Arrow>
              {isMediumScreen ? (
                <AiOutlineRight color="#123645" size="4rem" strokeWidth={20} />
              ) : (
                <AiOutlineDown color="#123645" size="4rem" strokeWidth={20} />
              )}
            </Arrow>

            <Image src={step3} alt="3 Step" />

            <Arrow>
              {isMediumScreen ? (
                <AiOutlineRight color="#123645" size="4rem" strokeWidth={20} />
              ) : (
                <AiOutlineDown color="#123645" size="4rem" strokeWidth={20} />
              )}
            </Arrow>

            <Image src={step4} alt="4 Step" />
          </StepsImages>
          <StepsDescription>
            <StepsText>{translations.text5}</StepsText>
            <EmptyCell />
            <StepsText>{translations.text6}</StepsText>
            <EmptyCell />
            <StepsText>{translations.text7}</StepsText>
            <EmptyCell />
            <StepsText>{translations.text8}</StepsText>
          </StepsDescription>
        </Steps>
      </ProcessSteps>
    </Container>
  );
}
