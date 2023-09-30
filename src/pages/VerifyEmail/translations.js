// eslint-disable-next-line import/prefer-default-export
export function TranslateText({ globalLanguage }) {
  let checkEmail;
  let emailSent;

  if (globalLanguage === 'EN') {
    checkEmail = 'Check your email: ';
    emailSent =
      'You will receive a link to confirm your registration and activate your account.';
  } else if (globalLanguage === 'PT') {
    checkEmail = 'Confira seu e-mail: ';
    emailSent =
      'Você receberá um link para confirmar seu cadastro e ativar a sua conta.';
  } else if (globalLanguage === 'DE') {
    checkEmail = 'Überprüfen Sie Ihre E-Mail: ';
    emailSent =
      'Sie erhalten einen Link, um Ihre Registrierung zu bestätigen und Ihr Konto zu aktivieren.';
  }
  return {
    checkEmail,
    emailSent,
  };
}
