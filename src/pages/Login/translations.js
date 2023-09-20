// eslint-disable-next-line import/prefer-default-export
export function TranslateText({ currentLanguage }) {
  let loginJoin;
  let loginPassword;
  let loginLog;
  let loginForgotPassword;
  let loginNotAccount;
  let loginHere;
  let loading;

  if (currentLanguage === 'EN') {
    loginJoin = 'Log in to your account';
    loginPassword = 'Password:';
    loginLog = 'Log-In';
    loginForgotPassword = 'Forgot your password? Click here!';
    loginNotAccount = 'Do not have an account yet? ';
    loginHere = 'Sign up here!';
    loading = 'Loading';
  } else if (currentLanguage === 'PT') {
    loginJoin = 'Entre na sua conta';
    loginPassword = 'Senha:';
    loginLog = 'Entrar';
    loginForgotPassword = 'Esqueceu a sua senha? Clique aqui!';
    loginNotAccount = 'Ainda não tem uma conta? ';
    loginHere = 'Cadastre-se aqui!';
    loading = 'Carregando';
  } else if (currentLanguage === 'DE') {
    loginJoin = 'Melden Sie sich an Ihrem Konto an';
    loginPassword = 'Passwort:';
    loginLog = 'anmelden';
    loginForgotPassword = 'Passwort vergessen? Klicken Sie hier!';
    loginNotAccount = 'Haben Sie noch kein Konto? ';
    loginHere = 'Hier registrieren!';
    loading = 'Wird geladen';
  }
  return {
    loginJoin,
    loginPassword,
    loginLog,
    loginForgotPassword,
    loginNotAccount,
    loginHere,
    loading,
  };
}
