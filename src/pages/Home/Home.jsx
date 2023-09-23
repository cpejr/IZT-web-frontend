import React, { useEffect } from 'react';

import { useLocation } from 'react-router-dom';

import Catalog from '../../assets/homePage/cards/catalog.png';
import Software from '../../assets/homePage/cards/software.png';
import Training from '../../assets/homePage/cards/training.png';
import carouselData from '../../assets/homePage/carousel/data';
import Image from '../../assets/homePage/imagemDaEmpresa.png';
import { FormsContact, Card, Carousel } from '../../components/features';
import { useGlobalLanguage } from '../../stores/globalLanguage';
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
import { TranslateText } from './translations';

export default function Home() {
  const { globalLanguage } = useGlobalLanguage();
  const translations = TranslateText({ globalLanguage });

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

  return (
    <Container>
      <OuterDiv>
        <Container>
          <CarouselContainer>
            <Carousel carouselData={carouselData} />
          </CarouselContainer>
          <CardsContainer>
            <Card
              currentLanguage={globalLanguage}
              title={translations.cardTitle1}
              text={translations.cardText1}
              mediaTopWeb
              media1000Top
              media429Top
              media360Top
              image={Training}
              imageAlt="Training image"
              linkTo="/curso"
            />
            <Card
              currentLanguage={globalLanguage}
              isMiddle
              title={translations.cardTitle2}
              text={translations.cardText2}
              image={Catalog}
              imageAlt="Catalog image"
              linkTo="/catalogo"
            />
            <Card
              currentLanguage={globalLanguage}
              title={translations.cardTitle3}
              text={translations.cardText3}
              image={Software}
              imageAlt="Software image"
              pictureTopMedia1000
              linkTo="/software"
            />
          </CardsContainer>
          <FormsContact id="contact" language={globalLanguage} />
          <AboutUs>
            <OurHistoryTitle>{translations.ourHistoryTitle}</OurHistoryTitle>
            <OurHistory>
              {translations.ourHistoryText1}
              <Picture src={Image} alt="enterprise" />
            </OurHistory>
            <OurHistory>{translations.ourHistoryText2}</OurHistory>
          </AboutUs>
        </Container>
      </OuterDiv>
    </Container>
  );
}
