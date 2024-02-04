// eslint-disable-next-line import/prefer-default-export
export function TranslateText({ globalLanguage }) {
  let messageDelete;
  let destroy;
  let loading;
  let toast;

  if (globalLanguage === 'PT') {
    messageDelete = 'Tem certeza que deseja apagar o relatório?';
    destroy = 'Excluir';
    loading = 'Carregando';
    toast = 'Relatório deletado com sucesso.';
  } else if (globalLanguage === 'EN') {
    messageDelete = 'Are you sure you want to delete the report';
    destroy = 'Delete';
    loading = 'Loading';
    toast = 'Report successfully deleted.';
  } else if (globalLanguage === 'DE') {
    messageDelete = 'Sind Sie sicher, dass Sie den Bericht löschen möchten?';
    destroy = 'Löschen';
    loading = 'Wird geladen';
    toast = 'Bericht erfolgreich gelöscht.';
  }

  return {
    messageDelete,
    destroy,
    loading,
    toast,
  };
}
