// eslint-disable-next-line import/prefer-default-export
export function TranslateText({ globalLanguage }) {
  let categoryName;
  let categoryNamePlaceholder;
  let errorMessageText;
  let creatingCategoryText;
  let loadingText;

  if (globalLanguage === 'EN') {
    categoryName = 'Category Name:';
    categoryNamePlaceholder = 'Enter the category name';
    errorMessageText = 'An error occurred. Please try again.';
    creatingCategoryText = 'Create Category';
    loadingText = 'Loading...';
  } else if (globalLanguage === 'PT') {
    categoryName = 'Nome da Categoria:';
    categoryNamePlaceholder = 'Digite o nome da categoria';
    errorMessageText = 'Ocorreu um erro. Por favor, tente novamente.';
    creatingCategoryText = 'Criar Categoria';
    loadingText = 'Carregando...';
  } else if (globalLanguage === 'DE') {
    categoryName = 'Kategorienname:';
    categoryNamePlaceholder = 'Geben Sie den Kategorienamen ein';
    errorMessageText =
      'Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.';
    creatingCategoryText = 'Kategorie erstellen';
    loadingText = 'Laden...';
  }

  return {
    categoryName,
    categoryNamePlaceholder,
    errorMessageText,
    creatingCategoryText,
    loadingText,
  };
}
