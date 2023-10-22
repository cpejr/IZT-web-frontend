// eslint-disable-next-line import/prefer-default-export
export function TranslateText({ globalLanguage }) {
  let categoryDeleted;
  let deleteCategory;
  let loading;
  let exclude;

  if (globalLanguage === 'EN') {
    categoryDeleted = 'Category deleted successfully.';
    deleteCategory = 'Are you sure you want to delete the category?';
    loading = 'Loading';
    exclude = 'Delete';
  } else if (globalLanguage === 'PT') {
    categoryDeleted = 'Categoria deletada com sucesso.';
    deleteCategory = 'Tem certeza que deseja excluir a categoria?';
    loading = 'Carregando';
    exclude = 'Excluir';
  } else if (globalLanguage === 'DE') {
    categoryDeleted = 'Kategorie erfolgreich gelöscht.';
    deleteCategory = 'Sind Sie sicher, dass Sie die Kategorie löschen möchten?';
    loading = 'Laden';
    exclude = 'Löschen';
  }
  return {
    categoryDeleted,
    deleteCategory,
    loading,
    exclude,
  };
}
