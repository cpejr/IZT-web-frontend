import { AiOutlineLinkedin, AiOutlineFacebook } from 'react-icons/ai';
import { BsInstagram, BsWhatsapp } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { useLocation, useNavigate } from 'react-router-dom';

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
} from './Styles';

export default function Footer() {
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
        <Text>
          Inovação, tecnologia, precisão, qualidade e sustentabilidade.
        </Text>
      </SideContainer>
      <MiddleContainer>
        <Tittle>Contato</Tittle>
        <Text>
          Entre em contato agora para sanar todas dúvidas sobre nossos produtos,
          nossos softwares ou nossos cursos.
        </Text>

        <ContactButton onClick={handleContactButtonClick}>
          Fale Conosco
        </ContactButton>
      </MiddleContainer>

      <SideContainer>
        <Tittle>Nossas Redes</Tittle>
        <SocialMedias>
          <SocialMediaButton href="https://cpejr.com/">
            <BsInstagram size={30} />
          </SocialMediaButton>
          <SocialMediaButton href="https://cpejr.com/">
            <AiOutlineLinkedin size={40} />
          </SocialMediaButton>
          <SocialMediaButton href="https://cpejr.com/">
            <AiOutlineFacebook size={40} />
          </SocialMediaButton>
          <SocialMediaButton href="https://cpejr.com/">
            <BsWhatsapp size={30} />
          </SocialMediaButton>
          <SocialMediaButton href="https://cpejr.com/">
            <HiOutlineMail size={40} />
          </SocialMediaButton>
        </SocialMedias>

        <ButtonMobile>
          <ContactButton onClick={handleContactButtonClick}>
            Fale Conosco
          </ContactButton>
        </ButtonMobile>

        <SectionGoTo>
          <Tittle>Ir para</Tittle>
          <GoTo to="/catalogo">Produtos</GoTo>
          <GoTo to="/curso">Cursos</GoTo>
          <GoTo to="/software">Software</GoTo>
        </SectionGoTo>
      </SideContainer>
    </Container>
  );
}
