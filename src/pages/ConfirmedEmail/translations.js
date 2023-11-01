// eslint-disable-next-line import/prefer-default-export
export function TranslateText({ globalLanguage }) {
  let congratsMessage;
  let succesMessage;
  let errorMessage;

  if (globalLanguage === 'EN') {
    congratsMessage = 'Congratulations,';
    succesMessage = '! Your email has been successfully validated!';
    errorMessage = 'Unable to validate your email';
  } else if (globalLanguage === 'PT') {
    congratsMessage = 'Parabéns,';
    succesMessage = '! Seu e-mail foi validado com sucesso!';
    errorMessage = 'Não foi possível validar o seu e-mail';
  } else if (globalLanguage === 'DE') {
    congratsMessage = 'Glückwunsch,';
    succesMessage = '! Ihre E-Mail wurde erfolgreich validiert!';
    errorMessage = 'Ihre E-Mail-Adresse konnte nicht bestätigt werden';
  }
  return {
    congratsMessage,
    succesMessage,
    errorMessage,
  };
}
