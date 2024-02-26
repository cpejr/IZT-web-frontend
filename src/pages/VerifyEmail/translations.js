// eslint-disable-next-line import/prefer-default-export
export function TranslateText({ globalLanguage }) {
  let checkEmail;
  let emailSent;
  let checkSpam;

  if (globalLanguage === 'EN') {
    checkEmail = 'Check your email: ';
    emailSent =
      'You will receive a link to confirm your registration and activate your account.';
    checkSpam = 'Check your spam folder.';
  } else if (globalLanguage === 'PT') {
    checkEmail = 'Confira seu e-mail: ';
    emailSent =
      'Você receberá um link para confirmar seu cadastro e ativar a sua conta.';
    checkSpam = 'Verifique sua caixa de spam.';
  } else if (globalLanguage === 'DE') {
    checkEmail = 'Überprüfen Sie Ihre E-Mail: ';
    emailSent =
      'Sie erhalten einen Link, um Ihre Registrierung zu bestätigen und Ihr Konto zu aktivieren.';
    checkSpam = 'Kontrolliere deinen Spam ordner.';
  }
  return {
    checkEmail,
    emailSent,
    checkSpam,
  };
}
