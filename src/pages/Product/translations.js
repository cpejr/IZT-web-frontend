// eslint-disable-next-line import/prefer-default-export
export function TranslateText({ currentLanguage }) {
  let loading;
  let text1;
  let text2;
  let text3;
  let text4;
  let text5;
  let text6;
  let text7;
  let text8;

  if (currentLanguage === 'EN') {
    loading = 'Loading...';
    text1 = 'Product Description';
    text2 = 'Product Advantages';
    text3 = 'More Information';
    text4 = 'How We Process Your Quote';
    text5 = 'We get in touch to plan the product';
    text6 = 'We produce your piece';
    text7 = 'We perform product inspection';
    text8 = 'We ship it to you';
  } else if (currentLanguage === 'PT') {
    loading = 'Carregando...';
    text1 = 'Descrição do produto';
    text2 = 'Vantagens do Produto';
    text3 = 'Mais informações';
    text4 = 'Como processamos seu orçamento?';
    text5 = 'Entramos em contato para planejar o produto';
    text6 = 'Produzimos a sua peça';
    text7 = 'Realizamos a inspeção do produto';
    text8 = 'Enviamos para você';
  } else if (currentLanguage === 'DE') {
    loading = 'Laden...';
    text1 = 'Produktbeschreibung';
    text2 = 'Vorteile des Produkts';
    text3 = 'Weitere Informationen';
    text4 = 'Wie wir Ihre Anfrage verarbeiten';
    text5 = 'Wir setzen uns in Verbindung, um das Produkt zu planen';
    text6 = 'Wir produzieren Ihr Stück';
    text7 = 'Wir führen eine Produktinspektion durch';
    text8 = 'Wir versenden es an Sie';
  }

  return {
    loading,
    text1,
    text2,
    text3,
    text4,
    text5,
    text6,
    text7,
    text8,
  };
}
