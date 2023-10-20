// eslint-disable-next-line import/prefer-default-export
export function TranslateText({ globalLanguage }) {
  let title;
  let subtitleName;
  let subtitleDescription;
  let subtitleAdvantages;
  let imagesTitle;
  let imagesMiniText;
  let documentsTitle;
  let categoryTitle;
  let saveButtonLabel;
  let cancelButtonLabel;
  let newImageLabel;
  let newDocumentLabel;
  let loadingLabel1;
  let loadingLabel2;
  let selectCategoryLabel;
  let placeholderName;
  let placeholderDescription;
  let placeholderAdvantages;

  if (globalLanguage === 'EN') {
    title = 'Edit Product';
    subtitleName = 'Product Name:';
    subtitleDescription = 'Description:';
    subtitleAdvantages = 'Advantages:';
    imagesTitle = 'Images:';
    imagesMiniText = 'Attach product images';
    documentsTitle = 'Documents:';
    categoryTitle = 'Category:';
    saveButtonLabel = 'Edit Product';
    cancelButtonLabel = 'Cancel';
    newImageLabel = 'New Image:';
    newDocumentLabel = 'New Document:';
    loadingLabel1 = 'Loading...';
    loadingLabel2 = 'Loading';
    selectCategoryLabel = 'Select a category';

    placeholderName = 'Enter product name';
    placeholderDescription = 'Describe the product';
    placeholderAdvantages = 'Describe the product advantages';
  } else if (globalLanguage === 'PT') {
    title = 'Editar Produto';
    subtitleName = 'Nome do Produto:';
    subtitleDescription = 'Descrição:';
    subtitleAdvantages = 'Vantagens:';
    imagesTitle = 'Imagens:';
    imagesMiniText = 'Anexe as imagens do produto';
    documentsTitle = 'Documentos:';
    categoryTitle = 'Categoria:';
    saveButtonLabel = 'Editar Produto';
    cancelButtonLabel = 'Cancelar';
    newImageLabel = 'Nova Imagem:';
    newDocumentLabel = 'Novo Documento:';
    loadingLabel1 = 'Carregando...';
    loadingLabel2 = 'Carregando';
    selectCategoryLabel = 'Selecione a categoria';

    placeholderName = 'Digite o nome do produto';
    placeholderDescription = 'Descreva o produto';
    placeholderAdvantages = 'Descreva as vantagens do produto';
  } else if (globalLanguage === 'DE') {
    title = 'Produkt bearbeiten';
    subtitleName = 'Produktname:';
    subtitleDescription = 'Beschreibung:';
    subtitleAdvantages = 'Vorteile:';
    imagesTitle = 'Bilder:';
    imagesMiniText = 'Produktbilder anhängen';
    documentsTitle = 'Dokumente:';
    categoryTitle = 'Kategorie:';
    saveButtonLabel = 'Produkt bearbeiten';
    cancelButtonLabel = 'Abbrechen';
    newImageLabel = 'Neues Bild:';
    newDocumentLabel = 'Neues Dokument:';
    loadingLabel1 = 'Laden...';
    loadingLabel2 = 'Laden';
    selectCategoryLabel = 'Kategorie auswählen';

    placeholderName = 'Produktname eingeben';
    placeholderDescription = 'Produktbeschreibung';
    placeholderAdvantages = 'Beschreiben Sie die Vorteile des Produkts';
  }

  return {
    title,
    subtitleName,
    subtitleDescription,
    subtitleAdvantages,
    imagesTitle,
    imagesMiniText,
    documentsTitle,
    categoryTitle,
    saveButtonLabel,
    cancelButtonLabel,
    newImageLabel,
    newDocumentLabel,
    loadingLabel1,
    loadingLabel2,
    selectCategoryLabel,
    placeholderName,
    placeholderDescription,
    placeholderAdvantages,
  };
}
