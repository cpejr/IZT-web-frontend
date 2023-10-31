// eslint-disable-next-line import/prefer-default-export
export function TranslateText({ globalLanguage }) {
  let categoryName;
  let toastMessage;
  let typeCategoryName;
  let loading;
  let createCategory;

  if (globalLanguage === 'EN') {
    categoryName = 'Category Name:';
    toastMessage = 'Category successfully created!';
    typeCategoryName = 'Enter the category name here';
    loading = 'Loading';
    createCategory = 'Create category';
  } else if (globalLanguage === 'PT') {
    categoryName = 'Nome da categoria:';
    toastMessage = 'Categoria criada com sucesso!';
    typeCategoryName = 'Digite aqui o nome da categoria';
    loading = 'Carregando';
    createCategory = 'Criar categoria';
  } else if (globalLanguage === 'DE') {
    categoryName = 'Kategoriename:';
    toastMessage = 'Kategorie erfolgreich erstellt!';
    typeCategoryName = 'Geben Sie hier den Kategorienamen ein';
    loading = 'Laden';
    createCategory = 'Kategorie erstellen';
  }
  return {
    categoryName,
    toastMessage,
    typeCategoryName,
    loading,
    createCategory,
  };
}
