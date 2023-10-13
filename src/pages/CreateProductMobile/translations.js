// eslint-disable-next-line import/prefer-default-export
export function TranslateText({ globalLanguage }) {
  let pageTitle;
  let nameLabel;
  let descriptionLabel;
  let advantagesLabel;
  let imagesTitle;
  let addImageButtonLabel;
  let addImageHint;
  let documentsTitle;
  let newDocumentButtonLabel;
  let categoryLabel;
  let saveButtonLabel;
  let cancelButtonLabel;
  let loadingText1;
  let loadingText2;
  let selectCategoryLabel;

  if (globalLanguage === 'EN') {
    pageTitle = 'Add Product';
    nameLabel = 'Product Name:';
    descriptionLabel = 'Description:';
    advantagesLabel = 'Advantages:';
    imagesTitle = 'Images:';
    addImageButtonLabel = 'Add New Image';
    addImageHint = 'Attach product images';
    documentsTitle = 'Documents:';
    newDocumentButtonLabel = 'Add New Document';
    categoryLabel = 'Category:';
    saveButtonLabel = 'Create Product';
    cancelButtonLabel = 'Cancel';
    loadingText1 = 'Loading...';
    loadingText2 = 'Loading';
    selectCategoryLabel = 'Select the category';
  } else if (globalLanguage === 'PT') {
    pageTitle = 'Adicionar Produto';
    nameLabel = 'Nome do Produto:';
    descriptionLabel = 'Descrição:';
    advantagesLabel = 'Vantagens:';
    imagesTitle = 'Imagens:';
    addImageButtonLabel = 'Adicionar Nova Imagem';
    addImageHint = 'Anexe as imagens do produto';
    documentsTitle = 'Documentos:';
    newDocumentButtonLabel = 'Novo Documento';
    categoryLabel = 'Categoria:';
    saveButtonLabel = 'Criar Produto';
    cancelButtonLabel = 'Cancelar';
    loadingText1 = 'Carregando...';
    loadingText2 = 'Carregando';
    selectCategoryLabel = 'Selecione a categoria';
  } else if (globalLanguage === 'DE') {
    pageTitle = 'Produkt hinzufügen';
    nameLabel = 'Produktname:';
    descriptionLabel = 'Beschreibung:';
    advantagesLabel = 'Vorteile:';
    imagesTitle = 'Bilder:';
    addImageButtonLabel = 'Neues Bild hinzufügen';
    addImageHint = 'Fügen Sie Produktbilder hinzu';
    documentsTitle = 'Dokumente:';
    newDocumentButtonLabel = 'Neues Dokument hinzufügen';
    categoryLabel = 'Kategorie:';
    saveButtonLabel = 'Produkt erstellen';
    cancelButtonLabel = 'Abbrechen';
    loadingText1 = 'Laden...';
    loadingText2 = 'Laden';
    selectCategoryLabel = 'Kategorie auswählen';
  }

  return {
    pageTitle,
    nameLabel,
    descriptionLabel,
    advantagesLabel,
    imagesTitle,
    addImageButtonLabel,
    addImageHint,
    documentsTitle,
    newDocumentButtonLabel,
    categoryLabel,
    saveButtonLabel,
    cancelButtonLabel,
    loadingText1,
    loadingText2,
    selectCategoryLabel,
  };
}
