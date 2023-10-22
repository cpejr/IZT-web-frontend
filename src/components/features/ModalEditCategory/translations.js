// eslint-disable-next-line import/prefer-default-export
export function TranslateText({ globalLanguage }) {
  let categoryName;
  let categoryEdited;
  let typeCategoryName;
  let loading;
  let saveEditions;

  if (globalLanguage === 'EN') {
    categoryName = 'Category Name:';
    categoryEdited = 'Category successfully changed!';
    typeCategoryName = 'Enter the category name here';
    loading = 'Loading';
    saveEditions = 'Save Changes';
  } else if (globalLanguage === 'PT') {
    categoryName = 'Nome da categoria:';
    categoryEdited = 'Categoria alterada com sucesso!';
    typeCategoryName = 'Digite aqui o nome da categoria';
    loading = 'Carregando';
    saveEditions = 'Salvar Alterações';
  } else if (globalLanguage === 'DE') {
    categoryName = 'Kategoriename:';
    categoryEdited = 'Kategorie erfolgreich geändert!';
    typeCategoryName = 'Geben Sie hier den Kategorienamen ein';
    loading = 'Laden';
    saveEditions = 'Änderungen speichern';
  }
  return {
    categoryName,
    categoryEdited,
    typeCategoryName,
    loading,
    saveEditions,
  };
}
