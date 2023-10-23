// eslint-disable-next-line import/prefer-default-export
export function TranslateText({ language }) {
  let phEmail;
  let accessExpiration;
  let loading;
  let authorize;

  if (language === 'EN') {
    phEmail = 'Select the email';
    accessExpiration = 'Access validity:';
    loading = 'Loading';
    authorize = '+ Authorize';
  } else if (language === 'DE') {
    phEmail = 'Wählen Sie die E-Mail aus';
    accessExpiration = 'Zugangsdauer:';
    loading = 'Wird geladen';
    authorize = '+ Autorisieren';
  } else {
    phEmail = ' Selecione o email';
    accessExpiration = 'Validade do acesso:';
    loading = 'Carregando';
    authorize = '+ Autorizar';
  }

  return {
    phEmail,
    accessExpiration,
    loading,
    authorize,
  };
}
