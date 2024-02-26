// eslint-disable-next-line import/prefer-default-export
export function TranslateText({ globalLanguage }) {
  let title;
  let smallTitle;
  let label1;
  let placeholder1;
  let label2;
  let placeholder2;
  let label3;
  let placeholder3;
  let label4;
  let placeholder4;
  let label5;
  let placeholder5;
  let buttonLabel;
  let loading;
  let successToast;

  if (globalLanguage === 'EN') {
    title = 'Contact Us';
    smallTitle = 'Get in Touch';

    label1 = 'Company:';
    placeholder1 = 'Company Name';

    label2 = 'Representative:';
    placeholder2 = 'Representative Name';

    label3 = 'Email:';
    placeholder3 = 'email@example.com';

    label4 = 'Phone:';
    placeholder4 = '+9 (999) 999-9999';

    label5 = 'Message:';
    placeholder5 = 'Write your message here';

    buttonLabel = 'Send';
    loading = 'Loading';

    successToast = 'Contact form sent successfully!';
  } else if (globalLanguage === 'PT') {
    title = 'Entre em Contato Conosco';
    smallTitle = 'Entre em Contato';

    label1 = 'Empresa:';
    placeholder1 = 'Nome da Empresa';

    label2 = 'Representante:';
    placeholder2 = 'Nome do Representante';

    label3 = 'E-mail:';
    placeholder3 = 'email@example.com';

    label4 = 'Telefone:';
    placeholder4 = '(99) 99999-9999';

    label5 = 'Mensagem:';
    placeholder5 = 'Escreva sua mensagem aqui';

    buttonLabel = 'Enviar';
    loading = 'Carregando';

    successToast = 'Formulário de contato enviado com sucesso!';
  } else if (globalLanguage === 'DE') {
    title = 'Kontaktieren Sie uns';
    smallTitle = 'Kommunikation';

    label1 = 'Firma:';
    placeholder1 = 'Firmenname';

    label2 = 'Vertreter:';
    placeholder2 = 'Vertretername';

    label3 = 'E-Mail:';
    placeholder3 = 'email@example.com';

    label4 = 'Telefon:';
    placeholder4 = '(99) 999 999999';

    label5 = 'Nachricht:';
    placeholder5 = 'Schreiben Sie hier Ihre Nachricht';

    buttonLabel = 'Senden';
    loading = 'Wird geladen';

    successToast = 'Erfolgreiches Kontaktformular gesendet!';
  }

  return {
    title,
    smallTitle,
    label1,
    placeholder1,
    label2,
    placeholder2,
    label3,
    placeholder3,
    label4,
    placeholder4,
    label5,
    placeholder5,
    buttonLabel,
    loading,
    successToast,
  };
}
