import { AiOutlineLinkedin, AiOutlineFacebook } from 'react-icons/ai';
import { BsInstagram, BsWhatsapp } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { useLocation, useNavigate } from 'react-router-dom';

import { useGlobalLanguage } from '../../../stores/globalLanguage';
import { Logo } from '../../common';
import {
  Container,
  SideContainer,
  LogoSection,
  MiddleContainer,
  Text,
  Tittle,
  SocialMedias,
  SocialMediaButton,
  GoTo,
  ButtonMobile,
  SectionGoTo,
  ContactButton,
  Centralize,
} from './Styles';
import { TranslateText } from './translations';

export default function Footer() {
  // Translation
  const { globalLanguage } = useGlobalLanguage();
  const translations = TranslateText({ globalLanguage });

  const navigate = useNavigate();
  const location = useLocation();

  const handleContactButtonClick = () => {
    const currentURL = window.location.href;
    const isHomePage = !currentURL.includes('/');
    function changeUrl() {
      window.history.replaceState(
        {},
        document.title,
        location.pathname + location.search
      );
    }

    if (isHomePage) {
      window.location.href = '/#contact';
      window.location.href = '/#home';
      changeUrl();
    } else if (currentURL.includes('#contact')) {
      window.location.href = '/#contact';
      window.location.href = '/#home';
      changeUrl();
    } else {
      navigate('/');
      window.location.href = '/#contact';
      changeUrl();
    }
  };

  return (
    <Container>
      <SideContainer>
        <LogoSection>
          <Logo />
        </LogoSection>
        <Text> {translations.IZTDescription} </Text>
      </SideContainer>
      <MiddleContainer>
        <Tittle>{translations.contact}</Tittle>
        <Text>{translations.contactDescription}</Text>

        <ContactButton onClick={handleContactButtonClick}>
          {translations.button}
        </ContactButton>
      </MiddleContainer>

      <SideContainer>
        <Tittle>
          <Centralize>{translations.socialMedia}</Centralize>
        </Tittle>
        <SocialMedias>
          <SocialMediaButton href="https://www.instagram.com/iztcore/" target="_blank">
            <BsInstagram size={30} />
          </SocialMediaButton>
          <SocialMediaButton href="https://cpejr.com/" target="_blank">
            <AiOutlineLinkedin size={40} />
          </SocialMediaButton>
          <SocialMediaButton href="https://cpejr.com/" target="_blank">
            <AiOutlineFacebook size={40} />
          </SocialMediaButton>
          <SocialMediaButton href="https://api.whatsapp.com/send/?phone=%2B5531993912235&text&type=phone_number&app_absent=0" target="_blank">
            <BsWhatsapp size={30} />
          </SocialMediaButton>
          <SocialMediaButton href="mailto:contato@iztcore.com" target="_blank">
            <HiOutlineMail size={40} />
          </SocialMediaButton>
        </SocialMedias>

        <ButtonMobile>
          <ContactButton onClick={handleContactButtonClick}>
            {translations.button}
          </ContactButton>
        </ButtonMobile>

        <SectionGoTo>
          <Tittle>{translations.goTo}</Tittle>
          <GoTo to="/catalogo">{translations.products}</GoTo>
          <GoTo to="/curso">{translations.courses}</GoTo>
          <GoTo to="/software">Software</GoTo>
        </SectionGoTo>
      </SideContainer>
    </Container>
  );
}
