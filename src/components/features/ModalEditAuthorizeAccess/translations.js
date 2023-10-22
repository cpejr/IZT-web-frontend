// eslint-disable-next-line import/prefer-default-export
export function TranslateText({ globalLanguage }) {
  let courseAuthorizationEdited;
  let email;
  let accessValidity;
  let loading;
  let save;

  if (globalLanguage === 'EN') {
    courseAuthorizationEdited =
      'Course access authorization successfully changed!';
    email = 'Email:';
    accessValidity = 'Access validity:';
    loading = 'Loading';
    save = 'Save changes';
  } else if (globalLanguage === 'PT') {
    courseAuthorizationEdited =
      'Autorização de acesso ao curso alterada com sucesso!';
    email = 'Email:';
    accessValidity = 'Validade do acesso:';
    loading = 'Carregando';
    save = 'Salvar alterações';
  } else if (globalLanguage === 'DE') {
    courseAuthorizationEdited =
      'Zugangsberechtigung zum Kurs erfolgreich geändert!';
    email = 'E-Mail:';
    accessValidity = 'Zugriffsberechtigung:';
    loading = 'Laden';
    save = 'Änderungen speichern';
  }
  return {
    courseAuthorizationEdited,
    email,
    accessValidity,
    loading,
    save,
  };
}
