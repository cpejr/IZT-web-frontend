// eslint-disable-next-line import/prefer-default-export
export function TranslateText({ globalLanguage }) {
  let softwareAuthorizationDeleted;
  let deleteSoftwareAuthorization;
  let loading;
  let deleteAccess;

  if (globalLanguage === 'EN') {
    softwareAuthorizationDeleted =
      'Software access authorization deleted successfully.';
    deleteSoftwareAuthorization =
      "Are you sure you want to revoke the user's access authorization to the software?";
    loading = 'Loading';
    deleteAccess = 'Delete';
  } else if (globalLanguage === 'PT') {
    softwareAuthorizationDeleted =
      'Autorização de acesso ao software deletada com sucesso.';
    deleteSoftwareAuthorization =
      'Tem certeza que deseja retirar a autorização de acesso ao software do usuário?';
    loading = 'Carregando';
    deleteAccess = 'Excluir';
  } else if (globalLanguage === 'DE') {
    softwareAuthorizationDeleted =
      'Software-Zugriffsberechtigung erfolgreich gelöscht.';
    deleteSoftwareAuthorization =
      'Sind Sie sicher, dass Sie die Zugriffsberechtigung des Benutzers für die Software widerrufen möchten?';
    loading = 'Laden';
    deleteAccess = 'Löschen';
  }
  return {
    softwareAuthorizationDeleted,
    deleteSoftwareAuthorization,
    loading,
    deleteAccess,
  };
}
