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
  TextoIZT,
  TituloFooter,
  RedesSociais,
  BotaoRedeSocial,
  IrPara,
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
        <TextoIZT>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          aliquam blandit convallis. Proin luctus turpis vitae urna feugiat
          eleifend. Orci varius natoque penatibus et magnis dis parturient
          montes, nascetur ridiculus.
        </TextoIZT>
      </FirstDiv>

      <SecondDiv>
        <TituloFooter>Contato:</TituloFooter>
        <TextoIZT>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in
          risus ullamcorper, venenatis sem vulputate, dapibus lacus. Integer
          risus turpis.
        </TextoIZT>
        <ContactUsButton />
      </SecondDiv>

      <FirstDiv>
        <TituloFooter>Nossas Redes:</TituloFooter>
        <RedesSociais>
          {/* Botão Instagram */}
          <BotaoRedeSocial type="button">
            <BsInstagram size={30} />
          </BotaoRedeSocial>

          {/* Botão LinkedIn */}
          <BotaoRedeSocial type="button">
            <AiOutlineLinkedin size={35} />
          </BotaoRedeSocial>

          {/* Botão Facebook */}
          <BotaoRedeSocial type="button">
            <AiOutlineFacebook size={35} />
          </BotaoRedeSocial>

          {/* Botão Whatsapp */}
          <BotaoRedeSocial type="button">
            <BsWhatsapp size={30} />
          </BotaoRedeSocial>

          {/* Botão Email */}
          <BotaoRedeSocial type="button">
            <HiOutlineMail size={35} />
          </BotaoRedeSocial>
        </RedesSociais>
        <ButtonMobile>
          <ContactUsButton />
        </ButtonMobile>
        <SectionIr>
          <TituloFooter>Ir para:</TituloFooter>
          <IrPara>Produtos</IrPara>
          <IrPara>Cursos</IrPara>
          <IrPara>Software</IrPara>
        </SectionIr>
      </FirstDiv>
    </BodyFooter>
  );
}
