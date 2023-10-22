// eslint-disable-next-line import/prefer-default-export
export function TranslateText({ globalLanguage }) {
  let softwareAuthorizationEdited;
  let email;
  let accessValidity;
  let loading;
  let save;

  if (globalLanguage === 'EN') {
    softwareAuthorizationEdited =
      'Software access authorization successfully changed!';
    email = 'Email:';
    accessValidity = 'Access validity:';
    loading = 'Loading';
    save = 'Save changes';
  } else if (globalLanguage === 'PT') {
    softwareAuthorizationEdited =
      'Autorização de acesso ao software alterada com sucesso!';
    email = 'Email:';
    accessValidity = 'Validade do acesso:';
    loading = 'Carregando';
    save = 'Salvar alterações';
  } else if (globalLanguage === 'DE') {
    softwareAuthorizationEdited =
      'Software-Zugriffsberechtigung erfolgreich geändert!';
    email = 'E-Mail:';
    accessValidity = 'Zugriffsberechtigung:';
    loading = 'Laden';
    save = 'Änderungen speichern';
  }
  return {
    softwareAuthorizationEdited,
    email,
    accessValidity,
    loading,
    save,
  };
}
