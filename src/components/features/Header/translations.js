// eslint-disable-next-line import/prefer-default-export
export function TranslateTextHeader({ globalLanguage }) {
  let cardTitle1;
  let cardText1;
  let cardTitle2;
  let cardText2;
  let cardTitle3;
  let cardText3;
  let cardTitle4;
  let toastMessage;
  let errorMessage;

  if (globalLanguage === 'EN') {
    cardTitle1 = 'Products';
    cardText1 = 'Courses';
    cardTitle2 = 'Software';
    cardText2 = 'Login';
    cardTitle3 = 'Logout';
    cardText3 = 'Hello';
    cardTitle4 = 'My Profile';
    toastMessage = 'User successfully logged out!';
    errorMessage = 'An error occurred while logging out. Try again later';
  } else if (globalLanguage === 'PT') {
    cardTitle1 = 'Produtos';
    cardText1 = 'Cursos';
    cardTitle2 = 'Software';
    cardText2 = 'Entrar';
    cardTitle3 = 'Deslogar';
    cardText3 = 'Olá';
    cardTitle4 = 'Meu Perfil';
    toastMessage = 'Usuário deslogado com sucesso!';
    errorMessage =
      'Ocorreu um erro ao realizar o logout. Tente novamente mais tarde';
  } else if (globalLanguage === 'DE') {
    cardTitle1 = 'Produkte';
    cardText1 = 'Kurse';
    cardTitle2 = 'Software';
    cardText2 = 'Einloggen';
    cardTitle3 = 'Abmelden';
    cardText3 = 'Hallo';
    cardTitle4 = 'Mein Profil';
    toastMessage = 'Benutzer erfolgreich abgemeldet!';
    errorMessage =
      'Beim Abmelden ist ein Fehler aufgetreten. Versuchen Sie es später erneut';
  }
  return {
    cardTitle1,
    cardText1,
    cardTitle2,
    cardText2,
    cardTitle3,
    cardText3,
    cardTitle4,
    toastMessage,
    errorMessage,
  };
}
