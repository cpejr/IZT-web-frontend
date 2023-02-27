import { BsInstagram } from 'react-icons/bs';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { AiOutlineFacebook } from 'react-icons/ai';
import { BsWhatsapp } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import React from 'react';
import {
  BodyFooter,
  FirstDiv,
  SecondDiv,
  LogoIZT,
  Text,
  Tittle,
  SocialMedias,
  SocialMediaButton,
  GoTo,
  ButtonMobile,
  SectionIr,
} from './Styles';
import ImagemLogoIZT from '../../../assets/ImagemLogoIZT.png';
import ContactUsButton from '../ContactUsButton/ContactUsButton';

export default function Footer() {
  return (
    <BodyFooter>
      <FirstDiv>
        <LogoIZT src={ImagemLogoIZT} alt="ImagemLogoIZT" />
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          aliquam blandit convallis. Proin luctus turpis vitae urna feugiat
          eleifend. Orci varius natoque penatibus et magnis dis parturient
          montes, nascetur ridiculus.
        </Text>
      </FirstDiv>

      <SecondDiv>
        <Tittle>Contato:</Tittle>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in
          risus ullamcorper, venenatis sem vulputate, dapibus lacus. Integer
          risus turpis.
        </Text>
        <ContactUsButton />
      </SecondDiv>

      <FirstDiv>
        <Tittle>Nossas Redes:</Tittle>
        <SocialMedias>
          {/* Botão Instagram */}
          <SocialMediaButton type="button">
            <BsInstagram size={30} />
          </SocialMediaButton>

          {/* Botão LinkedIn */}
          <SocialMediaButton type="button">
            <AiOutlineLinkedin size={35} />
          </SocialMediaButton>

          {/* Botão Facebook */}
          <SocialMediaButton type="button">
            <AiOutlineFacebook size={35} />
          </SocialMediaButton>

          {/* Botão Whatsapp */}
          <SocialMediaButton type="button">
            <BsWhatsapp size={30} />
          </SocialMediaButton>

          {/* Botão Email */}
          <SocialMediaButton type="button">
            <HiOutlineMail size={35} />
          </SocialMediaButton>
        </SocialMedias>
        <ButtonMobile>
          <ContactUsButton />
        </ButtonMobile>
        <SectionIr>
          <Tittle>Ir para:</Tittle>
          <GoTo>Produtos</GoTo>
          <GoTo>Cursos</GoTo>
          <GoTo>Software</GoTo>
        </SectionIr>
      </FirstDiv>
    </BodyFooter>
  );
}
