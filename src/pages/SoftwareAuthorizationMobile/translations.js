// eslint-disable-next-line import/prefer-default-export
export function TranslateText({ globalLanguage }) {
  let pageTitle;
  let emailLabel;
  let accessValidityLabel;
  let searchPlaceholder;
  let loadingText;
  let authorizeButton;
  let cancelButton;

  if (globalLanguage === 'EN') {
    pageTitle = 'Authorize Access';
    emailLabel = 'Email:';
    accessValidityLabel = 'Access Validity:';
    searchPlaceholder = 'Select an email';
    loadingText = 'Loading';
    authorizeButton = '+ Authorize';
    cancelButton = 'Cancel';
  } else if (globalLanguage === 'PT') {
    pageTitle = 'Autorizar Acesso';
    emailLabel = 'Email:';
    accessValidityLabel = 'Validade do Acesso:';
    searchPlaceholder = 'Selecione o email';
    loadingText = 'Carregando';
    authorizeButton = '+ Autorizar';
    cancelButton = 'Cancelar';
  } else if (globalLanguage === 'DE') {
    pageTitle = 'Zugriff autorisieren';
    emailLabel = 'E-Mail:';
    accessValidityLabel = 'Zugangsdauer:';
    searchPlaceholder = 'Wählen Sie eine E-Mail aus';
    loadingText = 'Wird geladen';
    authorizeButton = '+ Autorisieren';
    cancelButton = 'Abbrechen';
  }

  return {
    pageTitle,
    emailLabel,
    accessValidityLabel,
    searchPlaceholder,
    loadingText,
    authorizeButton,
    cancelButton,
  };
}
