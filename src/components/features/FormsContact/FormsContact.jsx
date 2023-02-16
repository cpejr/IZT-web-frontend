import FormInput from '../../common/FormInput/FormIpunt';
import {
  ContactUs,
  Form,
  Section,
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
        <Section>
          <FormInput />

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
        </Section>

        <Section>
          <Mensagem>
            Mensagem:
            <textarea rows={12} />
            <BotaoEnviar>Enviar</BotaoEnviar>
          </Mensagem>
        </Section>
      </Form>
    </ContactUs>
  );
}

export default FormsContactUs;
