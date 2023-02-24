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
} from './Styles';
import ImagemLogoIZT from '../../../assets/ImagemLogoIZT.png';
import footerImages from './footerImages';

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
      </SecondDiv>

      <FirstDiv>
        <TituloFooter>Nossas Redes:</TituloFooter>
        <RedesSociais>
          <BotaoRedeSocial type="button">
            <img
              src="https://cdn-icons-png.flaticon.com/512/32/32213.png"
              alt="buttonpng"
              border="0"
              height={20}
            />
          </BotaoRedeSocial>

          <BotaoRedeSocial type="button">
            <img
              src="https://cdn-icons-png.flaticon.com/512/32/32213.png"
              alt="buttonpng"
              border="0"
              height={20}
            />
          </BotaoRedeSocial>

          <BotaoRedeSocial type="button">
            <img
              src="https://cdn-icons-png.flaticon.com/512/32/32213.png"
              alt="buttonpng"
              border="0"
              height={20}
            />
          </BotaoRedeSocial>

          <BotaoRedeSocial type="button">
            <img
              src="https://cdn-icons-png.flaticon.com/512/32/32213.png"
              alt="buttonpng"
              border="0"
              height={20}
            />
          </BotaoRedeSocial>

          <BotaoRedeSocial type="button">
            <img
              src="https://cdn-icons-png.flaticon.com/512/32/32213.png"
              alt="buttonpng"
              border="0"
              height={20}
            />
          </BotaoRedeSocial>
        </RedesSociais>
        <TituloFooter>Ir para:</TituloFooter>
        <IrPara>Produtos</IrPara>
        <IrPara>Cursos</IrPara>
        <IrPara>Software</IrPara>
      </FirstDiv>
    </BodyFooter>
  );
}
