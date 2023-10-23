// eslint-disable-next-line import/prefer-default-export
export function TranslateText({ globalLanguage }) {
  let title;
  let nameLabel;
  let saveButtonLabel;
  let cancelButtonLabel;
  let loadingText;

  if (globalLanguage === 'EN') {
    title = 'Add Category';
    nameLabel = 'Category Name:';
    saveButtonLabel = 'Add Category';
    cancelButtonLabel = 'Cancel';
    loadingText = 'Loading';
  } else if (globalLanguage === 'PT') {
    title = 'Adicionar Categoria';
    nameLabel = 'Nome da categoria:';
    saveButtonLabel = 'Adicionar Categoria';
    cancelButtonLabel = 'Cancelar';
    loadingText = 'Carregando';
  } else if (globalLanguage === 'DE') {
    title = 'Kategorie hinzufügen';
    nameLabel = 'Kategoriename:';
    saveButtonLabel = 'Kategorie hinzufügen';
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
