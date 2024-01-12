// eslint-disable-next-line import/prefer-default-export
export function TranslateText({ globalLanguage }) {
  let pageTitle;
  let emailLabel;
  let accessValidityLabel;
  let authorizeAccess;
  let searchPlaceholder;

  if (globalLanguage === 'EN') {
    pageTitle = 'Software Access Authorization';
    emailLabel = 'Email';
    accessValidityLabel = 'Access Validity';
    authorizeAccess = 'Authorize Access';
    searchPlaceholder = 'Search Email';
  } else if (globalLanguage === 'PT') {
    pageTitle = 'Autorização de Acesso ao Software';
    emailLabel = 'Email';
    accessValidityLabel = 'Validade do Acesso';
    authorizeAccess = 'Autorizar Acesso';
    searchPlaceholder = 'Pesquisar Email';
  } else if (globalLanguage === 'DE') {
    pageTitle = 'Softwarezugriffsberechtigung';
    emailLabel = 'E-Mail';
    accessValidityLabel = 'Zugangsdauer';
    authorizeAccess = 'Zugang autorisieren';
    searchPlaceholder = 'E-Mail suchen';
  }

  return {
    pageTitle,
    emailLabel,
    accessValidityLabel,
    authorizeAccess,
    searchPlaceholder,
  };
}
