// eslint-disable-next-line import/prefer-default-export
export function TranslateText({ globalLanguage }) {
  let confirmation;
  let awaiting;
  let deleteProd;
  let toast;

  if (globalLanguage === 'EN') {
    confirmation = 'Are you sure you want to delete the product?';
    awaiting = 'Loading';
    deleteProd = 'Delete';
    toast = 'Product deleted successfully.';
  } else if (globalLanguage === 'PT') {
    confirmation = 'Tem certeza que deseja excluir o produto?';
    awaiting = 'Carregando';
    deleteProd = 'Excluir';
    toast = 'Produto deletado com sucesso.';
  } else if (globalLanguage === 'DE') {
    confirmation = 'Sind Sie sicher, dass Sie das Produkt löschen möchten?';
    awaiting = 'Wird geladen';
    deleteProd = 'Löschen';
    toast = 'Produkt erfolgreich gelöscht.';
  }
  return {
    confirmation,
    awaiting,
    deleteProd,
    toast,
  };
}
