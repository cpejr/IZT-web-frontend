// eslint-disable-next-line import/prefer-default-export
export function TranslateText({ globalLanguage }) {
  let IZTDescription;
  let contact;
  let contactDescription;
  let button;
  let socialMedia;
  let goTo;
  let products;
  let courses;

  if (globalLanguage === 'EN') {
    IZTDescription =
      'Innovation, technology, precision, quality and sustainability.';
    contact = 'Contact';
    contactDescription =
      'Get in touch now to answer any questions about our products, our software or our courses.';
    button = 'Contact us';
    socialMedia = 'Our social networks';
    goTo = 'Go to';
    products = 'Products';
    courses = 'Courses';
  } else if (globalLanguage === 'PT') {
    IZTDescription =
      'Inovação, tecnologia, precisão, qualidade e sustentabilidade.';
    contact = 'Contato';
    contactDescription =
      'Entre em contato agora para sanar todas dúvidas sobre nossos produtos, nossos softwares ou nossos cursos.';
    button = 'Fale Conosco';
    socialMedia = 'Nossas Redes';
    goTo = 'Ir para';
    products = 'Produtos';
    courses = 'Cursos';
  } else if (globalLanguage === 'DE') {
    IZTDescription =
      'Innovation, Technologie, Präzision, Qualität und Nachhaltigkeit.';
    contact = 'Kontakt';
    contactDescription =
      'Nehmen Sie jetzt Kontakt auf, um Fragen zu unseren Produkten, unserer Software oder unseren Kursen zu beantworten.';
    button = 'Kontaktiere uns';
    socialMedia = 'Unsere sozialen Netzwerke';
    goTo = 'Gehe zu';
    products = 'Produkte';
    courses = 'Kurse';
  }
  return {
    IZTDescription,
    contact,
    contactDescription,
    button,
    socialMedia,
    goTo,
    products,
    courses,
  };
}
