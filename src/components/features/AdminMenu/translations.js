// eslint-disable-next-line import/prefer-default-export
export function TranslateText({ globalLanguage }) {
  let menuAdmin;
  let products;
  let addProducts;
  let listProducts;
  let categories;
  let addCategory;
  let listCategories;
  let accessDefinitions;
  let provideCourseAccess;
  let provideSoftwareAccess;

  if (globalLanguage === 'EN') {
    menuAdmin = 'Administrator Menu';
    products = 'Products';
    addProducts = 'Add products';
    listProducts = 'List Products';
    categories = 'Categories';
    addCategory = 'Add category';
    listCategories = 'List categories';
    accessDefinitions = 'Access definitions';
    provideCourseAccess = 'Provide course access';
    provideSoftwareAccess = 'Provide Software access';
  } else if (globalLanguage === 'PT') {
    menuAdmin = 'Menu do Administrador';
    products = 'Produtos';
    addProducts = 'Adicionar produtos';
    listProducts = 'Listar produtos';
    categories = 'Categorias';
    addCategory = 'Adicionar categoria';
    listCategories = 'Listar categoria';
    accessDefinitions = 'Definições de acesso';
    provideCourseAccess = 'Liberação do curso';
    provideSoftwareAccess = 'Liberação do Software';
  } else if (globalLanguage === 'DE') {
    menuAdmin = 'Administrator-Menü';
    products = 'Produkte';
    addProducts = 'Produkte hinzufügen';
    listProducts = 'Produkte auflisten';
    categories = 'Kategorien';
    addCategory = 'Kategorie hinzufügen';
    listCategories = 'Kategorie auflisten';
    accessDefinitions = 'Zugriffsdefinitionen';
    provideCourseAccess = 'Kurszugriff bereitstellen';
    provideSoftwareAccess = 'Softwarezugriff bereitstellen';
  }
  return {
    menuAdmin,
    products,
    addProducts,
    listProducts,
    categories,
    addCategory,
    listCategories,
    accessDefinitions,
    provideCourseAccess,
    provideSoftwareAccess,
  };
}
