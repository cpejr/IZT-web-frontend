// eslint-disable-next-line import/prefer-default-export
export function TranslateText({ globalLanguage }) {
  let title;
  let description;
  let loading;

  if (globalLanguage === 'PT') {
    title = 'Tudo o que você precisa está aqui!';
    description =
      'Bem-vindo ao catálogo da IZT Core! Aqui você encontrará uma ampla seleção de produtos de alta qualidade, projetados para atender a todas as suas necessidades.Navegue em nosso catálogo de produtos e encontre o produto perfeito para sua aplicação.';
    loading = 'Carregando...';
  } else if (globalLanguage === 'EN') {
    title = 'Everything you need is here!';
    description =
      'Welcome to the IZT Core catalog! Here you will find a wide selection of high-quality products designed to meet all your needs. Browse our product catalog and find the perfect product for your application.';
    loading = 'Loading...';
  } else if (globalLanguage === 'DE') {
    title = 'Alles, was Sie brauchen, ist hier!';
    description =
      'Willkommen im IZT Core-Katalog! Hier finden Sie eine breite Auswahl hochwertiger Produkte, die entwickelt wurden, um alle Ihre Anforderungen zu erfüllen. Stöbern Sie in unserem Produktkatalog und finden Sie die perfekte Produkt für Ihre Anwendung.';
    loading = 'Laden...';
  }

  return {
    title,
    description,
    loading,
  };
}
