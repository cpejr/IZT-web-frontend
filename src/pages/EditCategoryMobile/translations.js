// eslint-disable-next-line import/prefer-default-export
export function TranslateText({ globalLanguage }) {
  let title;
  let nameLabel;
  let saveButtonLabel;
  let cancelButtonLabel;
  let loadingText;

  if (globalLanguage === 'EN') {
    title = 'Edit Category';
    nameLabel = 'Category Name:';
    saveButtonLabel = 'Edit Category';
    cancelButtonLabel = 'Cancel';
    loadingText = 'Loading';
  } else if (globalLanguage === 'PT') {
    title = 'Editar Categoria';
    nameLabel = 'Nome da categoria:';
    saveButtonLabel = 'Editar Categoria';
    cancelButtonLabel = 'Cancelar';
    loadingText = 'Carregando';
  } else if (globalLanguage === 'DE') {
    title = 'Kategorie bearbeiten';
    nameLabel = 'Kategoriename:';
    saveButtonLabel = 'Kategorie bearbeiten';
    cancelButtonLabel = 'Abbrechen';
    loadingText = 'Wird geladen';
  }

  return {
    title,
    nameLabel,
    saveButtonLabel,
    cancelButtonLabel,
    loadingText,
  };
}
