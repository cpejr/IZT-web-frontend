import React from 'react';
import { Carousel, FormsContactUs, Card } from '../../components/features';
import carouselImages from '../../components/features/Carousel/carouselImages';
import Catalog from '../../assets/homeCards/catalog.png';
import Software from '../../assets/homeCards/software.png';
import Training from '../../assets/homeCards/training.png';
import {
  AboutUs,
  Container,
  OurHistory,
  OurHistoryTitle,
  Picture,
  CardsContainer,
  OuterDiv,
} from './Styles';
import Image from '../../assets/imagemDaEmpresa.png';

function Home() {
  return (
    <OuterDiv>
      <Container>
        <Carousel slides={carouselImages} />
        <CardsContainer>
          <Card
            title="Treinamento em Retificação Centerless"
            text="Venha aprender tudo sobre retificação centerless com o nosso curso
          intensivo!"
            media1000Top="10%"
            media429Top="9%"
            media360Top="10%"
            image={Training}
            imageAlt="Training image"
          />
          <Card
            isMiddle
            title="Catálogo de Produtos"
            text="Conheça nossos produtos em nossos catálogos!"
            image={Catalog}
            imageAlt="Catalog image"
          />
          <Card
            title="Software de estabilidade"
            text="O software de mapa de estabilidade centerless fornece análises precisas e 
          confiáveis do processo de retificação em sua empresa."
            image={Software}
            imageAlt="Software image"
          />
        </CardsContainer>
        <FormsContactUs />
        <AboutUs>
          <OurHistoryTitle>Conheça a nossa história</OurHistoryTitle>
          <OurHistory>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec urna
            dolor, malesuada ac cursus a, porttitor a ligula. Etiam nec ipsum
            quis dui malesuada vehicula quis at diam. Nunc suscipit est eget
            orci lobortis tempor. Vivamus scelerisque sem nec lacus rutrum
            pretium. Donec quis mauris eu lorem luctus suscipit. Mauris maximus
            consequat molestie. Sed a molestie elit, dapibus porta massa.
            Pellentesque vel nulla egestas, sollicitudin sem vel, maximus
            lectus. Fusce interdum condimentum nulla, sit amet ultrices justo
            placerat ut. Nullam pellentesque aliquet quam ut condimentum. Mauris
            libero magna, vehicula quis dui ac, faucibus suscipit turpis.
            Quisque sed convallis diam, tempus aliquam erat. Mauris id risus at
            purus pharetra euismod id sed arcu. Duis nisl augue, mattis quis
            congue sed, scelerisque eu augue. Mauris ac elementum risus.
            <Picture src={Image} alt="enterprise" />
          </OurHistory>
          <OurHistory>
            Quisque id dui id felis lobortis luctus quis vitae turpis. Duis
            auctor congue urna, eu dictum urna laoreet in. Donec vitae nunc ac
            nibh finibus pellentesque a vitae purus. Proin fringilla ligula ac
            placerat luctus. Sed orci lacus, dapibus ut gravida vitae, auctor
            sed leo. Nunc laoreet leo imperdiet rhoncus efficitur. Sed quis
            risus erat. Phasellus non enim metus. Sed eget gravida sapien. Nunc
            quis facilisis nunc. Morbi non placerat justo. Cras congue mi nisi,
            quis volutpat orci tincidunt iaculis.
          </OurHistory>
        </AboutUs>
      </Container>
    </OuterDiv>
  );
}

export default Home;
