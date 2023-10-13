// eslint-disable-next-line import/prefer-default-export
export function TranslateText({ globalLanguage }) {
  let pageTitle;
  let authorizeAccessLabel;
  let emailHeader;
  let accessValidityHeader;
  let searchPlaceholder;

  if (globalLanguage === 'EN') {
    pageTitle = 'Course Authorization';
    authorizeAccessLabel = 'Authorize Access';
    emailHeader = 'Email';
    accessValidityHeader = 'Access Validity';
    searchPlaceholder = 'Search Email';
  } else if (globalLanguage === 'PT') {
    pageTitle = 'Autorização do Curso';
    authorizeAccessLabel = 'Autorizar Acesso';
    emailHeader = 'Email';
    accessValidityHeader = 'Validade do Acesso';
    searchPlaceholder = 'Pesquisar Email';
  } else if (globalLanguage === 'DE') {
    pageTitle = 'Kursberechtigung';
    authorizeAccessLabel = 'Zugriff autorisieren';
    emailHeader = 'E-Mail';
    accessValidityHeader = 'Zugangsdauer';
    searchPlaceholder = 'E-Mail suchen';
  }

  return {
    pageTitle,
    authorizeAccessLabel,
    emailHeader,
    accessValidityHeader,
    searchPlaceholder,
  };
}
