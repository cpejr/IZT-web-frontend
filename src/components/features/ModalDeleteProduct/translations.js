// eslint-disable-next-line import/prefer-default-export
export function TranslateText({ globalLanguage }) {
  let confirmation;
  let awaiting;
  let deleteProd;

  if (globalLanguage === 'EN') {
    confirmation = 'Are you sure you want to delete the product?';
    awaiting = 'Loading';
    deleteProd = 'Delete';
  } else if (globalLanguage === 'PT') {
    confirmation = 'Tem certeza que deseja excluir o produto?';
    awaiting = 'Carregando';
    deleteProd = 'Excluir';
  } else if (globalLanguage === 'DE') {
    confirmation = 'Sind Sie sicher, dass Sie das Produkt löschen möchten?';
    awaiting = 'Wird geladen';
    deleteProd = 'Löschen';
  }
  return {
    confirmation,
    awaiting,
    deleteProd,
  };
}
