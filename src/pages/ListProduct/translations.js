// eslint-disable-next-line import/prefer-default-export
export function TranslateText({ globalLanguage }) {
  let productTitle;
  let categoryFilterText;
  let searchProductPlaceholder;
  let productListTitle;

  if (globalLanguage === 'EN') {
    productTitle = 'Product List';
    categoryFilterText = 'Filter by category:';
    searchProductPlaceholder = 'Search Product';
    productListTitle = 'Product List';
  } else if (globalLanguage === 'PT') {
    productTitle = 'Lista de produtos';
    categoryFilterText = 'Filtrar por categoria:';
    searchProductPlaceholder = 'Pesquisar Produto';
    productListTitle = 'Lista de produtos';
  } else if (globalLanguage === 'DE') {
    productTitle = 'Produktliste';
    categoryFilterText = 'Nach Kategorie filtern:';
    searchProductPlaceholder = 'Produkt suchen';
    productListTitle = 'Produktliste';
  }

  return {
    productTitle,
    categoryFilterText,
    searchProductPlaceholder,
    productListTitle,
  };
}
