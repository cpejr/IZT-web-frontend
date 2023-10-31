// eslint-disable-next-line import/prefer-default-export
export function TranslateText({ globalLanguage }) {
  let productName;
  let typeProductName;
  let description;
  let typeDescription;
  let advantages;
  let typeAdvantages;
  let images;
  let addImages;
  let documents;
  let category;
  let loading;
  let selectCategory;
  let createProduct;

  if (globalLanguage === 'EN') {
    productName = 'Product Name: ';
    typeProductName = 'Enter the product name: ';
    description = 'Description: ';
    typeDescription = 'Describe the Product: ';
    advantages = 'advantages: ';
    typeAdvantages = 'Describe the advantages:';
    images = 'Images:';
    addImages = 'Attach product images';
    documents = 'Documents: ';
    category = 'Category: ';
    loading = 'Loading...';
    selectCategory = 'Select the category';
    createProduct = 'Create Product';
  } else if (globalLanguage === 'PT') {
    productName = 'Nome do Produto: ';
    typeProductName = 'Digite o nome do produto:';
    description = 'Descrição: ';
    typeDescription = 'Descreva o Produto: ';
    advantages = 'Vantagens: ';
    typeAdvantages = 'Descreva as Vantagens:';
    images = 'Imagens:';
    addImages = 'Anexe as imagens do produto';
    documents = 'Documentos: ';
    category = 'Categoria: ';
    loading = 'Carregando...';
    selectCategory = 'Selecione a categoria';
    createProduct = 'Criar Produto';
  } else if (globalLanguage === 'DE') {
    productName = 'Name de Produkts: ';
    typeProductName = 'Ziffer oder Produktname:';
    description = 'Beschreibung:';
    typeDescription = 'Beschreiben Sie das Produkt:';
    advantages = 'Vorteile';
    typeAdvantages = 'Beschreiben Sie die Vorteile: ';
    images = 'Bilder: ';
    addImages = 'Fügen Sie Produktbilder hinzu';
    documents = 'Unterlagen:';
    category = 'Kategorie: ';
    loading = 'Laden...';
    selectCategory = 'Wählen Sie die Kategorie aus';
    createProduct = 'Produkt erstellen';
  }
  return {
    productName,
    typeProductName,
    description,
    typeDescription,
    advantages,
    typeAdvantages,
    images,
    addImages,
    documents,
    category,
    loading,
    selectCategory,
    createProduct,
  };
}
