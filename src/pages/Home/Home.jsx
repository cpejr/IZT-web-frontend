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
import { TranslateText } from './translations';

export default function Home({ language }) {
  const location = useLocation();

  const translations = TranslateText({ language });

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
    <OuterDiv>
      <Container>
        <CarouselContainer>
          <Carousel carouselData={carouselData} />
        </CarouselContainer>
        <CardsContainer>
          <Card
            language={language}
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
            language={language}
            isMiddle
            title={translations.cardTitle2}
            text={translations.cardText2}
            image={Catalog}
            imageAlt="Catalog image"
            linkTo="/catalogo"
          />
          <Card
            language={language}
            title={translations.cardTitle3}
            text={translations.cardText3}
            image={Software}
            imageAlt="Software image"
            pictureTopMedia1000
            linkTo="/software"
          />
        </CardsContainer>
        <FormsContact id="contact" language={language} />
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
  );
}
Home.propTypes = {
  language: PropTypes.string.isRequired,
};
