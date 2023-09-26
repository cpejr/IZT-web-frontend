// eslint-disable-next-line import/prefer-default-export
export function TranslateTextHeader({ globalLanguage }) {
  let cardTitle1;
  let cardText1;
  let cardTitle2;
  let cardText2;
  let cardTitle3;
  let cardText3;

  if (globalLanguage === 'EN') {
    cardTitle1 = 'Products';
    cardText1 = 'Courses';
    cardTitle2 = 'Software';
    cardTitle3 = 'Log in';
    cardText3 = 'Hello';
  } else if (globalLanguage === 'PT') {
    cardTitle1 = 'Produtos';
    cardText1 = 'Cursos';
    cardTitle2 = 'Software';
    cardText2 = 'Entrar';
    cardTitle3 = 'Deslogar';
    cardText3 = 'Olá';
  } else if (globalLanguage === 'DE') {
    cardTitle1 = 'Produkte';
    cardText1 = 'Kurse';
    cardTitle2 = 'Software';
    cardText2 = 'Einloggen';
    cardTitle3 = 'Abmelden';
    cardText3 = 'Hallo';
  }
  return {
    cardTitle1,
    cardText1,
    cardTitle2,
    cardText2,
    cardTitle3,
    cardText3,
  };
}
