// eslint-disable-next-line import/prefer-default-export
export function TranslateText({ globalLanguage }) {
  let pageTitle;
  let emailLabel;
  let accessValidityLabel;
  let loadingText;
  let saveChangesButton;
  let cancelButton;

  if (globalLanguage === 'EN') {
    pageTitle = 'Edit Access Authorization';
    emailLabel = 'Email:';
    accessValidityLabel = 'Access Validity:';
    loadingText = 'Loading';
    saveChangesButton = 'Save Changes';
    cancelButton = 'Cancel';
  } else if (globalLanguage === 'PT') {
    pageTitle = 'Editar Autorização de Acesso';
    emailLabel = 'Email:';
    accessValidityLabel = 'Validade do Acesso:';
    loadingText = 'Carregando';
    saveChangesButton = 'Salvar Alterações';
    cancelButton = 'Cancelar';
  } else if (globalLanguage === 'DE') {
    pageTitle = 'Zugangsberechtigung bearbeiten';
    emailLabel = 'E-Mail:';
    accessValidityLabel = 'Zugangsdauer:';
    loadingText = 'Wird geladen';
    saveChangesButton = 'Änderungen speichern';
    cancelButton = 'Abbrechen';
  }

  return {
    pageTitle,
    emailLabel,
    accessValidityLabel,
    loadingText,
    saveChangesButton,
    cancelButton,
  };
}
