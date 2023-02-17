import React from 'react';
import { Carousel, FormsContactUs } from '../../components/features';
import carouselImages from '../../components/features/Carousel/carouselImages';
import { Carousel, Card } from '../../components/features';
import { CardsContainer, Container } from './Styles';
import Catalog from '../../assets/homeCards/catalog.png';
import Software from '../../assets/homeCards/software.png';
import Training from '../../assets/homeCards/training.png';

function Home() {
  return (
    <Container>
      <Carousel slides={carouselImages} />
      <FormsContactUs />
      <CardsContainer>
        <Card
          title="Treinamento em Retificação Centerless"
          text="Venha aprender tudo sobre retificação centerless com o nosso curso
            intensivo!"
          image={Training}
          imageAlt="Training image"
          // marginBottomTitle="13%"
          // marginTopText="13%"
          // marginBottomText="13%"
          // marginBottomButton="55%"
        />
        <Card
          isMiddle
          title="Catálogo de Produtos"
          text="Conheça nossos produtos em nossos catálogos!"
          image={Catalog}
          imageAlt="Catalog image"
          // marginBottomTitle="13%"
          // marginTopText="13%"
          // marginBottomText="13%"
          // marginBottomButton="55%"
        />
        <Card
          title="Software de estabilidade"
          text="Com o nosso software de mapa de estabilidade centerless, você pode
          ter acesso a análises precisas e confiáveis da estabilidade do
          processo de retificação centerless em sua empresa."
          image={Software}
          imageAlt="Software image"
          // marginBottomTitle="13%"
          // marginTopText="13%"
          // marginBottomText="13%"
          // marginBottomButton="48%"
        />
      </CardsContainer>
      <div>Contact inputs</div>
      <div>
        <h1>Conheça a nossa história</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec urna
          dolor, malesuada ac cursus a, porttitor a ligula. Etiam nec ipsum quis
          dui malesuada vehicula quis at diam. Nunc suscipit est eget orci
          lobortis tempor. Vivamus scelerisque sem nec lacus rutrum pretium.
          Donec quis mauris eu lorem luctus suscipit. Mauris maximus consequat
          molestie. Sed a molestie elit, dapibus porta massa. Pellentesque vel
          nulla egestas, sollicitudin sem vel, maximus lectus. Fusce interdum
          condimentum nulla, sit amet ultrices justo placerat ut. Nullam
          pellentesque aliquet quam ut condimentum. Mauris libero magna,
          vehicula quis dui ac, faucibus suscipit turpis. Quisque sed convallis
          diam, tempus aliquam erat. Mauris id risus at purus pharetra euismod
          id sed arcu. Duis nisl augue, mattis quis congue sed, scelerisque eu
          augue. Mauris ac elementum risus.
        </p>
        <p>
          Quisque id dui id felis lobortis luctus quis vitae turpis. Duis auctor
          congue urna, eu dictum urna laoreet in. Donec vitae nunc ac nibh
          finibus pellentesque a vitae purus. Proin fringilla ligula ac placerat
          luctus. Sed orci lacus, dapibus ut gravida vitae, auctor sed leo. Nunc
          laoreet leo imperdiet rhoncus efficitur. Sed quis risus erat.
          Phasellus non enim metus. Sed eget gravida sapien. Nunc quis facilisis
          nunc. Morbi non placerat justo. Cras congue mi nisi, quis volutpat
          orci tincidunt iaculis.
        </p>
      </div>
    </Container>
  );
}

export default Home;
