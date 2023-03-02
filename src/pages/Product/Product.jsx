import React from 'react';
// import { FaBeerAiOutlineVerticalAlignBottom } from 'react-icons/fa';
import Img1 from '../../assets/Product/Group75.png';
import Img2 from '../../assets/Product/Group76.png';
import Img3 from '../../assets/Product/Group77.png';
import Img4 from '../../assets/Product/Group78.png';
import { BudgetForm } from '../../components/features';
import FileList from '../../components/features/Files/Files';
import Carousel from '../../components/features/Carousel/Carousel';
import productData from '../../assets/Product/productCarousel/data';

import {
  Container,
  Product,
  ProductName,
  Info,
  ProductDescription,
  ProductContainer,
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
      <Product>
        <ProductName>Nome do Produto</ProductName>
        <ProductContainer>
          <Carousel
            productData={productData}
            height="537.17px"
            width="543.75px"
            miniImages
          />
          <Info>
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
                <FileList />{' '}
              </InfoDescription>
            </ProductInfos>
          </Info>
        </ProductContainer>
      </Product>
      <BudgetForm />
      <ProcessSteps>
        <Title>Como processamos seu orçamento?</Title>
        <Steps>
          <Step>
            <Image src={Img1} alt="1 Step" />
            <StepsText>Entramos em contato para planejar o produto</StepsText>
          </Step>

          <Step>
            <Image src={Img2} alt="2 Step" />
            <StepsText>Produzimos a sua peça</StepsText>
          </Step>

          <Step>
            <Image src={Img3} alt="3 Step" />
            <StepsText>Realizamos a inspeção do produto</StepsText>
          </Step>

          <Step>
            <Image src={Img4} alt="4 Step" />
            <StepsText>Enviamos para você</StepsText>
          </Step>
        </Steps>
      </ProcessSteps>
    </Container>
  );
}

export default ProductPage;
