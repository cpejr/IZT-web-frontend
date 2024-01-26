// eslint-disable-next-line import/prefer-default-export
export function TranslateText({ globalLanguage }) {
  let title;
  let newPassword;
  let confirmNewPassword;
  let save;
  let toast;

  if (globalLanguage === 'PT') {
    title = 'Redefinir Senha';
    newPassword = 'Insira a nova senha';
    confirmNewPassword = 'Confirme a nova senha';
    save = 'Salvar';
    toast = 'Senha alterada com sucesso';
  } else if (globalLanguage === 'EN') {
    title = 'Redefine password';
    newPassword = 'Enter the new password';
    confirmNewPassword = 'Confirm new password';
    save = 'Save';
    toast = 'Password changed successfully';
  } else if (globalLanguage === 'DE') {
    title = 'Passwort neu definieren';
    newPassword = 'Geben Sie das neue Passwort ein';
    confirmNewPassword = 'Bestätige neues Passwort';
    save = 'Speichern';
    toast = 'das Passwort wurde erfolgreich geändert';
  }

  return {
    title,
    newPassword,
    confirmNewPassword,
    save,
    toast,
  };
}
