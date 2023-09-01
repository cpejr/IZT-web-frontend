import React, { useEffect } from 'react';

import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

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

export default function Home({ language }) {
  const location = useLocation();

  window.history.replaceState(
    {},
    document.title,
    location.pathname + location.search
  );

  useEffect(() => {
    const scrollToFormsContact = () => {
      const formsContactElement = document.getElementById('contact');
      if (formsContactElement) {
        window.scrollTo(0, 0);

        formsContactElement.scrollIntoView({ behavior: 'smooth' });
      }
    };

    if (location.hash === '#contact') {
      scrollToFormsContact();
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  let cardTitle1;
  let cardText1;
  let cardTitle2;
  let cardText2;
  let cardTitle3;
  let cardText3;
  let ourHistoryTitle;
  let ourHistoryText1;
  let ourHistoryText2;

  if (language === 'EN') {
    cardTitle1 = 'Training in Centerless Grinding';
    cardText1 =
      'Come learn all about centerless grinding with our intensive course!';
    cardTitle2 = 'Product Catalog';
    cardText2 = 'Get to know our products.';
    cardTitle3 = 'Centerless Grinding Software (CGS)';
    cardText3 =
      'Optimize your centerless grinding process using our simulation software.';
    ourHistoryTitle = 'Know our history';
    ourHistoryText1 =
      'IZT emerged to meet the demand for technologies and solutions in the machining areas, with a focus on productivity and sustainable engineering. We specialize in enhancing and customizing lubricoolant supply systems for machining machines suitable for technical, financial, and environmental needs. We develop cleaning systems for grinding wheels and nozzles (or jets) for fluid application in internal cylindrical grinders, external cylindrical grinders, plunge grinders, surface grinders, and especially centerless grinders. To maximize the technical capacity of professionals in the industry, we have developed centerless grinding training, applying the knowledge of professionals who have been in the market for over 20 years. In addition, we offer advanced software for simulating grinding and surface finishing (honing) processes to define their main parameters.';
    ourHistoryText2 =
      'When we started working in this sector, we noticed that many companies faced problems in the manufacturing processes, such as difficulty in defining parameters and long setup times for machines, as well as a lack of computational resources for process simulation. It was in this context that our team decided to dedicate itself to developing innovative machining solutions that could exceed customer expectations and help drive the industry forward. Since then, we have been working to provide the most advanced solutions and continue to innovate in our field. We look forward to continuing to provide high-quality machining solutions and helping drive innovation, progress, and the reduction of environmental impacts worldwide.';
  } else if (language === 'PT') {
    cardTitle1 = 'Treinamento em Retificação Centerless';
    cardText1 =
      'Venha aprender tudo sobre retificação centerless com o nosso curso intensivo!';
    cardTitle2 = 'Catálogo de Produtos';
    cardText2 = 'Conheça nossos produtos.';
    cardTitle3 = 'Software de Retificação Centerless (CGS)';
    cardText3 =
      'Otimize o seu processo de retificação centerless utilizando o nosso software de simulação.';
    ourHistoryTitle = 'Conheça a nossa história';
    ourHistoryText1 =
      'A IZT surgiu para atender a demanda por tecnologias e soluções nas áreas de usinagem, com foco em produtividade e engenharia sustentável. Nós somos especialistas em aprimorar e personalizar sistemas de fornecimento de lubrirrefigerantes para máquinas de usinagem adequados às necessidades técnicas, financeiras e ambientais. Desenvolvemos sistemas de limpeza de rebolos e bocais (ou bicos) para aplicação de fluidos em retificadoras cilíndricas internas, retificadoras cilíndricas externas, retificadoras de passagem, retificadoras de superfícies e, principalmente, retificadoras centerless. Visando maximizar a capacidade técnica dos profissionais do setor, elaboramos um treinamento em retificação centerless, aplicando o conhecimento de profissionais, os quais atuam por mais de 20 anos no mercado. Além disso, oferecemos softwares avançados de simulação de processos de retificação e acabamento superficial (brunimento/Honing) para definir os seus principais parâmetros.';
    ourHistoryText2 =
      'Quando começamos a trabalhar nesse setor, percebemos que muitas empresas enfrentavam problemas nos processos de fabricação, como dificuldade na definição de parâmetros e tempo elevado para o setup de maquinas, além da falta de recursos computacionais para simulação de processos. Foi nesse contexto que nossa equipe decidiu se dedicar a desenvolver soluções de usinagem inovadoras, que pudessem superar as expectativas dos clientes e ajudar a impulsionar a indústria. Desde então, temos trabalhado para fornecer as soluções mais avançadas e continuar a inovar em nossa área de atuação. Estamos ansiosos para continuar fornecendo soluções de usinagem de alta qualidade e ajudando a impulsionar a inovação, o progresso e a redução de impactos ambientais em todo o mundo.';
  } else if (language === 'DE') {
    cardTitle1 = 'Schulung in der Centerless-Schleiftechnik';
    cardText1 =
      'Kommen Sie und lernen Sie alles über Centerless-Schleiftechnik in unserem Intensivkurs!';
    cardTitle2 = 'Produktkatalog';
    cardText2 = 'Lernen Sie unsere Produkte kennen.';
    cardTitle3 = 'Centerless-Schleifsoftware (CGS)';
    cardText3 =
      'Optimieren Sie Ihren Centerless-Schleifprozess mit unserer Simulationsoftware.';
    ourHistoryTitle = 'Kennen Sie unsere Geschichte';
    ourHistoryText1 =
      'IZT entstand, um die Nachfrage nach Technologien und Lösungen im Bereich der Bearbeitungstechnologien zu erfüllen, mit Fokus auf Produktivität und nachhaltiger Ingenieurwissenschaft. Wir haben uns darauf spezialisiert, Schmierkühlmittelsysteme für Bearbeitungsmaschinen zu verbessern und anzupassen, die den technischen, finanziellen und ökologischen Anforderungen gerecht werden. Wir entwickeln Reinigungssysteme für Schleifscheiben und Düsen (oder Düsen) zur Flüssigkeitsanwendung in inneren zylindrischen Schleifmaschinen, äußeren zylindrischen Schleifmaschinen, Tauchschleifmaschinen, Flachschleifmaschinen und insbesondere Centerless-Schleifmaschinen. Um die technischen Fähigkeiten von Fachleuten in der Branche zu maximieren, haben wir ein Centerless-Schleiftraining entwickelt, bei dem das Wissen von Fachleuten, die seit über 20 Jahren auf dem Markt sind, angewendet wird. Darüber hinaus bieten wir fortschrittliche Software zur Simulation von Schleif- und Oberflächenbearbeitungsprozessen (Honen) an, um ihre Hauptparameter zu definieren.';
    ourHistoryText2 =
      'Als wir in diesem Sektor zu arbeiten begannen, haben wir festgestellt, dass viele Unternehmen Probleme in den Herstellungsprozessen hatten, wie Schwierigkeiten bei der Definition von Parametern und lange Rüstzeiten für Maschinen sowie einen Mangel an Rechenleistung für die Prozesssimulation. Es war in diesem Zusammenhang, dass unser Team beschlossen hat, sich der Entwicklung innovativer Bearbeitungslösungen zu widmen, die die Erwartungen der Kunden übertreffen und die Branche vorantreiben könnten. Seitdem arbeiten wir daran, die fortschrittlichsten Lösungen anzubieten und in unserem Bereich weiterhin innovativ zu sein. Wir freuen uns darauf, weiterhin hochwertige Bearbeitungslösungen anzubieten und die Innovation, den Fortschritt und die Reduzierung der Umweltaus';
  }

  return (
    <OuterDiv>
      <Container>
        <CarouselContainer>
          <Carousel carouselData={carouselData} />
        </CarouselContainer>
        <CardsContainer>
          <Card
            language={language}
            title={cardTitle1}
            text={cardText1}
            mediaTopWeb
            media1000Top
            media429Top
            media360Top
            image={Training}
            imageAlt="Training image"
            linkTo="/curso"
          />
          <Card
            language={language}
            isMiddle
            title={cardTitle2}
            text={cardText2}
            image={Catalog}
            imageAlt="Catalog image"
            linkTo="/catalogo"
          />
          <Card
            language={language}
            title={cardTitle3}
            text={cardText3}
            image={Software}
            imageAlt="Software image"
            pictureTopMedia1000
            linkTo="/software"
          />
        </CardsContainer>
        <FormsContact id="contact" language={language} />
        <AboutUs>
          <OurHistoryTitle>{ourHistoryTitle}</OurHistoryTitle>
          <OurHistory>
            {ourHistoryText1}
            <Picture src={Image} alt="enterprise" />
          </OurHistory>
          <OurHistory>{ourHistoryText2}</OurHistory>
        </AboutUs>
      </Container>
    </OuterDiv>
  );
}
Home.propTypes = {
  language: PropTypes.string.isRequired,
};
