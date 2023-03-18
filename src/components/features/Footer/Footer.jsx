import { AiOutlineLinkedin, AiOutlineFacebook } from 'react-icons/ai';
import { BsInstagram, BsWhatsapp } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
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
import { Logo } from '../../common';

export default function Footer() {
  return (
    <Container>
      <SideContainer>
        <LogoSection>
          <Logo />
        </LogoSection>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          aliquam blandit convallis. Proin luctus turpis vitae urna feugiat
          eleifend. Orci varius natoque penatibus et magnis dis parturient
          montes, nascetur ridiculus.
        </Text>
      </SideContainer>

      <MiddleContainer>
        <Tittle>Contato</Tittle>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in
          risus ullamcorper, venenatis sem vulputate, dapibus lacus. Integer
          risus turpis.
        </Text>
        <ContactButton>Fale Conosco</ContactButton>
      </MiddleContainer>

      <SideContainer>
        <Tittle>Nossas Redes</Tittle>
        <SocialMedias>
          <SocialMediaButton href="https://cpejr.com/">
            <BsInstagram size={30} />
          </SocialMediaButton>
          <SocialMediaButton href="https://cpejr.com/">
            <AiOutlineLinkedin size={35} />
          </SocialMediaButton>
          <SocialMediaButton href="https://cpejr.com/">
            <AiOutlineFacebook size={35} />
          </SocialMediaButton>
          <SocialMediaButton href="https://cpejr.com/">
            <BsWhatsapp size={30} />
          </SocialMediaButton>
          <SocialMediaButton href="https://cpejr.com/">
            <HiOutlineMail size={35} />
          </SocialMediaButton>
        </SocialMedias>

        <ButtonMobile>
          <ContactButton>Fale Conosco</ContactButton>
        </ButtonMobile>

        <SectionGoTo>
          <Tittle>Ir para</Tittle>
          <GoTo to="/">Produtos</GoTo>
          <GoTo to="/">Cursos</GoTo>
          <GoTo to="/">Software</GoTo>
        </SectionGoTo>
      </SideContainer>
    </Container>
  );
}
