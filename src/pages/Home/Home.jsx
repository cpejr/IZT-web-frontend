import React, { useEffect, useState } from 'react';

import { useLocation } from 'react-router-dom';

import Catalog from '../../assets/homePage/cards/catalog.png';
import Software from '../../assets/homePage/cards/software.png';
import Training from '../../assets/homePage/cards/training.png';
import carouselData from '../../assets/homePage/carousel/data';
import Image from '../../assets/homePage/imagemDaEmpresa.png';
import {
  FormsContact,
  Card,
  Carousel,
  Header,
} from '../../components/features';
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
  const [currentLanguage, setCurrentLanguage] = useState('PT');

  const location = useLocation();

  const translations = TranslateText({ currentLanguage });

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
    <>
      <Header setCurrentLanguage={setCurrentLanguage} />

      <OuterDiv>
        <Container>
          <CarouselContainer>
            <Carousel carouselData={carouselData} />
          </CarouselContainer>
          <CardsContainer>
            <Card
              currentLanguage={currentLanguage}
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
              currentLanguage={currentLanguage}
              isMiddle
              title={translations.cardTitle2}
              text={translations.cardText2}
              image={Catalog}
              imageAlt="Catalog image"
              linkTo="/catalogo"
            />
            <Card
              currentLanguage={currentLanguage}
              title={translations.cardTitle3}
              text={translations.cardText3}
              image={Software}
              imageAlt="Software image"
              pictureTopMedia1000
              linkTo="/software"
            />
          </CardsContainer>
          <FormsContact id="contact" language={currentLanguage} />
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
    </>
  );
}
