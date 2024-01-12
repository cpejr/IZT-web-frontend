// eslint-disable-next-line import/prefer-default-export
export function TranslateText({ globalLanguage }) {
  let editProduct;
  let productName;
  let typeProductName;
  let description;
  let describeProduct;
  let benefits;
  let describeBenefits;
  let images;
  let attachImages;
  let newImage;
  let documents;
  let newDocument;
  let category;
  let loading;
  let selectCategory;
  let saveEditions;

  if (globalLanguage === 'EN') {
    editProduct = 'Product successfully changed!';
    productName = 'Product Name:';
    typeProductName = 'Enter the product name';
    description = 'Description:';
    describeProduct = 'Describe the product';
    benefits = 'Benefits:';
    describeBenefits = 'Describe the product benefits';
    images = 'Images:';
    attachImages = 'Attach product images';
    newImage = 'New image';
    documents = 'Documents:';
    newDocument = 'New document';
    category = 'Category:';
    loading = 'Loading...';
    selectCategory = 'Select the category';
    saveEditions = 'Save Changes';
  } else if (globalLanguage === 'PT') {
    editProduct = 'Produto alterado com sucesso!';
    productName = 'Nome do produto:';
    typeProductName = 'Digite o nome do produto';
    description = 'Descrição:';
    describeProduct = 'Descreva o produto';
    benefits = 'Vantagens:';
    describeBenefits = 'Descreva as vantagens do produto';
    images = 'Imagens:';
    attachImages = 'Anexe as imagens do produto';
    newImage = 'Nova imagem';
    documents = 'Documentos:';
    newDocument = 'Novo documento';
    category = 'Categoria:';
    loading = 'Carregando...';
    selectCategory = 'Selecione a categoria';
    saveEditions = 'Salvar Alterações';
  } else if (globalLanguage === 'DE') {
    editProduct = 'Produkt erfolgreich geändert!';
    productName = 'Produktname:';
    typeProductName = 'Geben Sie den Produktnamen ein';
    description = 'Beschreibung:';
    describeProduct = 'Beschreiben Sie das Produkt';
    benefits = 'Vorteile:';
    describeBenefits = 'Beschreiben Sie die Produktvorteile';
    images = 'Bilder:';
    attachImages = 'Bilder des Produkts anhängen';
    newImage = 'Neues Bild';
    documents = 'Dokumente:';
    newDocument = 'Neues Dokument';
    category = 'Kategorie:';
    loading = 'Laden...';
    selectCategory = 'Kategorie auswählen';
    saveEditions = 'Änderungen speichern';
  }
  return {
    editProduct,
    productName,
    typeProductName,
    description,
    describeProduct,
    benefits,
    describeBenefits,
    images,
    attachImages,
    newImage,
    documents,
    newDocument,
    category,
    loading,
    selectCategory,
    saveEditions,
  };
}
