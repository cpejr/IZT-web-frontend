import React from 'react';
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
  Step1,
  Image1,
  Step2,
  Image2,
  Step3,
  Image3,
  Step4,
  Image4,
} from './Styles';

function ProductPage() {
  return (
    <Container>
      <Product>
        <ProductName>Nome do Produto</ProductName>
        <ProductContainer>
          <Carousel productData={productData} maxHeight="100vh" />
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
              <InfoDescription> </InfoDescription>
            </ProductInfos>
          </Info>
        </ProductContainer>
      </Product>
      <BudgetForm />
      <ProcessSteps>
        <Title>Como processamos seu orçamento?</Title>
        <Steps>
          <Step1>
            <Image1 src={Img1} alt="1 Step" />
            <h1>Entramos em contato para planejar o produto</h1>
          </Step1>
          <Step2>
            <Image2 src={Img2} alt="2 Step" />
            <h1>Produzimos a sua peça</h1>
          </Step2>
          <Step3>
            <Image3 src={Img3} alt="3 Step" />
            <h1>Realizamos a inspeção do produto</h1>
          </Step3>
          <Step4>
            <Image4 src={Img4} alt="4 Step" />
            <h1>Enviamos para você</h1>
          </Step4>
        </Steps>
      </ProcessSteps>
    </Container>
  );
}

export default ProductPage;
