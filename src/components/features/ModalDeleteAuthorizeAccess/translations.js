// eslint-disable-next-line import/prefer-default-export
export function TranslateText({ globalLanguage }) {
  let courseAuthorizationDeleted;
  let deleteCourseAuthorization;
  let loading;
  let deleteAccess;

  if (globalLanguage === 'EN') {
    courseAuthorizationDeleted =
      'Course access authorization deleted successfully.';
    deleteCourseAuthorization =
      "Are you sure you want to revoke the user's access authorization to the course?";
    loading = 'Loading';
    deleteAccess = 'Delete';
  } else if (globalLanguage === 'PT') {
    courseAuthorizationDeleted = 'Autorização ao curso deletada com sucesso.';
    deleteCourseAuthorization =
      'Tem certeza que deseja retirar a autorização de acesso ao curso do usuário?';
    loading = 'Carregando';
    deleteAccess = 'Excluir';
  } else if (globalLanguage === 'DE') {
    courseAuthorizationDeleted =
      'Zugriffsberechtigung zum Kurs erfolgreich gelöscht.';
    deleteCourseAuthorization =
      'Sind Sie sicher, dass Sie die Zugriffsberechtigung des Benutzers für den Kurs widerrufen möchten?';
    loading = 'Laden';
    deleteAccess = 'Löschen';
  }
  return {
    courseAuthorizationDeleted,
    deleteCourseAuthorization,
    loading,
    deleteAccess,
  };
}
