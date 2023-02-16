import React, { useState } from 'react';
import {
  ContactUs,
  Form,
  SectionOne,
  SectionTwo,
  Title,
  Empresa,
  Representante,
  Email,
  Telefone,
  Mensagem,
  BotaoEnviar,
} from './Styles';

function FormsContactUs() {
  return (
    <ContactUs>
      <Title>Entre em Contato Conosco</Title>
      <Form>
        <SectionOne>
          <Empresa>
            Empresa:
            <input />
          </Empresa>

          <Representante>
            Representante:
            <input />
          </Representante>

          <Email>
            E-mail:
            <input />
          </Email>

          <Telefone>
            Telefone:
            <input />
          </Telefone>
        </SectionOne>

        <SectionTwo>
          <Mensagem>
            Mensagem:
            <input />
            <BotaoEnviar>Enviar</BotaoEnviar>
          </Mensagem>
        </SectionTwo>
      </Form>
    </ContactUs>
  );
}

export default FormsContactUs;
