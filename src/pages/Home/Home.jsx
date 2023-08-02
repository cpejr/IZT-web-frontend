import Catalog from '../../assets/homePage/cards/catalog.png';
import Software from '../../assets/homePage/cards/software.png';
import Training from '../../assets/homePage/cards/training.png';
import carouselData from '../../assets/homePage/carousel/data';
import Image from '../../assets/homePage/imagemDaEmpresa.png';
import { FormsContact, Card, Carousel } from '../../components/features';
import {
  AboutUs,
  Container,
  OurHistory,
  OurHistoryTitle,
  Picture,
  CardsContainer,
  OuterDiv,
  CarouselContainer,
} from './Styles';

export default function Home() {
  return (
    <OuterDiv>
      <Container>
        <CarouselContainer>
          <Carousel carouselData={carouselData} />
        </CarouselContainer>
        <CardsContainer>
          <Card
            title="Treinamento em Retificação Centerless"
            text="Venha aprender tudo sobre retificação centerless com o nosso curso
          intensivo!"
            mediaTopWeb
            media1000Top
            media429Top
            media360Top
            image={Training}
            imageAlt="Training image"
            linkTo="/curso"
          />
          <Card
            isMiddle
            title="Catálogo de Produtos"
            text="Conheça nossos produtos."
            image={Catalog}
            imageAlt="Catalog image"
            linkTo="/catalogo"
          />
          <Card
            title="Centerless Grinding Software (CGS)"
            text="Otimize o seu processo de retificação centerless utilizando o nosso software de simulação."
            image={Software}
            imageAlt="Software image"
            pictureTopMedia1000
            linkTo="/software"
          />
        </CardsContainer>
        <FormsContact />
        <AboutUs>
          <OurHistoryTitle>Conheça a nossa história</OurHistoryTitle>
          <OurHistory>
            A IZT surgiu para atender a demanda por tecnologias e soluções nas
            áreas de usinagem, com foco em produtividade e engenharia
            sustentável. Nós somos especialistas em aprimorar e personalizar
            sistemas de fornecimento de lubrirrefigerantes para máquinas de
            usinagem adequados às necessidades técnicas, financeiras e
            ambientais. Desenvolvemos sistemas de limpeza de rebolos e bocais
            (ou bicos) para aplicação de fluidos em retificadoras cilíndricas
            internas, retificadoras cilíndricas externas, retificadoras de
            passagem, retificadoras de superfícies e, principalmente,
            retificadoras centerless. Visando maximizar a capacidade técnica dos
            profissionais do setor, elaboramos um treinamento em retificação
            centerless, aplicando o conhecimento de profissionais, os quais
            atuam por mais de 20 anos no mercado. Além disso, oferecemos
            softwares avançados de simulação de processos de retificação e
            acabamento superficial (brunimento/Honing) para definir os seus
            principais parâmetros.
            <Picture src={Image} alt="enterprise" />
          </OurHistory>
          <OurHistory>
            Quando começamos a trabalhar nesse setor, percebemos que muitas
            empresas enfrentavam problemas nos processos de fabricação, como
            dificuldade na definição de parâmetros e tempo elevado para o setup
            de maquinas, além da falta de recursos computacionais para simulação
            de processos. Foi nesse contexto que nossa equipe decidiu se dedicar
            a desenvolver soluções de usinagem inovadoras, que pudessem superar
            as expectativas dos clientes e ajudar a impulsionar a indústria.
            Desde então, temos trabalhado para fornecer as soluções mais
            avançadas e continuar a inovar em nossa área de atuação. Estamos
            ansiosos para continuar fornecendo soluções de usinagem de alta
            qualidade e ajudando a impulsionar a inovação, o progresso e a
            redução de impactos ambientais em todo o mundo.
          </OurHistory>
        </AboutUs>
      </Container>
    </OuterDiv>
  );
}
