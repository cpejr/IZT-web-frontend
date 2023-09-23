// eslint-disable-next-line import/prefer-default-export
export function TranslateText({ globalLanguage }) {
  let title;
  let emailLabel;
  let validityLabel;
  let loadingText;
  let saveChangesLabel;
  let cancelButtonLabel;

  if (globalLanguage === 'EN') {
    title = 'Edit Access Authorization';
    emailLabel = 'Email:';
    validityLabel = 'Access Validity:';
    loadingText = 'Loading';
    saveChangesLabel = 'Save Changes';
    cancelButtonLabel = 'Cancel';
  } else if (globalLanguage === 'PT') {
    title = 'Editar Autorização de Acesso';
    emailLabel = 'Email:';
    validityLabel = 'Validade do Acesso:';
    loadingText = 'Carregando';
    saveChangesLabel = 'Salvar Alterações';
    cancelButtonLabel = 'Cancelar';
  } else if (globalLanguage === 'DE') {
    title = 'Zugriffsberechtigung bearbeiten';
    emailLabel = 'E-Mail:';
    validityLabel = 'Zugangsdauer:';
    loadingText = 'Wird geladen';
    saveChangesLabel = 'Änderungen speichern';
    cancelButtonLabel = 'Abbrechen';
  }

  return {
    title,
    emailLabel,
    validityLabel,
    loadingText,
    saveChangesLabel,
    cancelButtonLabel,
  };
}
