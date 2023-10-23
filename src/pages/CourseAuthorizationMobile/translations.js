// eslint-disable-next-line import/prefer-default-export
export function TranslateText({ globalLanguage }) {
  let title;
  let emailLabel;
  let validityLabel;
  let placeholderEmail;
  let authorizeButtonLabel;
  let cancelButtonLabel;
  let loadingText;
  let errorLabel;

  if (globalLanguage === 'EN') {
    title = 'Authorize Access';
    emailLabel = 'Email:';
    validityLabel = 'Access Validity:';
    placeholderEmail = 'Select an email';
    authorizeButtonLabel = '+ Authorize';
    cancelButtonLabel = 'Cancel';
    loadingText = 'Loading';
    errorLabel = 'Error';
  } else if (globalLanguage === 'PT') {
    title = 'Autorizar Acesso';
    emailLabel = 'Email:';
    validityLabel = 'Validade do Acesso:';
    placeholderEmail = 'Selecione um email';
    authorizeButtonLabel = '+ Autorizar';
    cancelButtonLabel = 'Cancelar';
    loadingText = 'Carregando';
    errorLabel = 'Erro';
  } else if (globalLanguage === 'DE') {
    title = 'Zugang autorisieren';
    emailLabel = 'E-Mail:';
    validityLabel = 'Zugangsdauer:';
    placeholderEmail = 'Wählen Sie eine E-Mail aus';
    authorizeButtonLabel = '+ Autorisieren';
    cancelButtonLabel = 'Abbrechen';
    loadingText = 'Wird geladen';
    errorLabel = 'Fehler';
  }

  return {
    title,
    emailLabel,
    validityLabel,
    placeholderEmail,
    authorizeButtonLabel,
    cancelButtonLabel,
    loadingText,
    errorLabel,
  };
}
