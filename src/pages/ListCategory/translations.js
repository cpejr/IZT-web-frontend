// eslint-disable-next-line import/prefer-default-export
export function TranslateText({ globalLanguage }) {
  let title;
  let searchPlaceholder;

  if (globalLanguage === 'EN') {
    title = 'Category List';
    searchPlaceholder = 'Search category';
  } else if (globalLanguage === 'PT') {
    title = 'Lista de categorias';
    searchPlaceholder = 'Pesquisar categoria';
  } else if (globalLanguage === 'DE') {
    title = 'Kategorie Liste';
    searchPlaceholder = 'Kategorie suchen';
  }

  return {
    title,
    searchPlaceholder,
  };
}
