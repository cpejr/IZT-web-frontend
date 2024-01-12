// eslint-disable-next-line import/prefer-default-export
export function TranslateText({ globalLanguage }) {
  let registerCreate;
  let registerPersonalInfo;
  let registerCompany;
  let registerName;
  let registerLastName;
  let phLastName;
  let registerRole;
  let registerAdress;
  let registerCoutry;
  let registerState;
  let registerCity;
  let registerStreet;
  let phStreet;
  let registerContactInfo;
  let registerChangeInformation;
  let registerPassword;
  let registerConfirmPassword;
  let loading;
  let registerCreateAccount;
  let registerCredentials;
  let phCompany;
  let phRole;
  let phName;

  if (globalLanguage === 'EN') {
    registerCreate = 'Create your account';
    registerPersonalInfo = 'Personal information';
    registerCompany = 'Company: ';
    phCompany = 'Company name';
    registerName = 'Name: ';
    phName = 'Name';
    registerLastName = 'Last Name: ';
    phLastName = 'Last Name';
    registerRole = 'Job: ';
    phRole = 'Job Title';
    registerAdress = 'Adress: ';
    registerCoutry = 'Country: ';
    registerState = 'State: ';
    registerCity = 'City: ';
    registerStreet = 'Street: ';
    phStreet = 'Street';
    registerContactInfo = 'Contact Information';
    registerChangeInformation = 'Change Information';
    registerPassword = 'Password: ';
    registerConfirmPassword = 'Confirm your password';
    loading = 'Loading';
    registerCreateAccount = 'Create Account';
    registerCredentials = 'Credentials';
  } else if (globalLanguage === 'PT') {
    registerCreate = 'Crie sua conta';
    registerPersonalInfo = 'Informações Pessoais';
    registerCompany = 'Empresa: ';
    phCompany = 'Nome da empresa';
    registerName = 'Nome: ';
    phName = 'Nome';
    registerLastName = 'Sobrenome: ';
    phLastName = 'Sobrenome';
    registerRole = 'Cargo: ';
    phRole = 'Nome do Cargo';
    registerAdress = 'Endereço: ';
    registerCoutry = 'País: ';
    registerState = 'Estado: ';
    registerCity = 'Cidade: ';
    registerStreet = 'Rua: ';
    phStreet = 'Rua';
    registerContactInfo = 'Informações de Contato';
    registerChangeInformation = 'Alterar Infomações';
    registerPassword = 'Senha: ';
    registerConfirmPassword = 'Confirme sua senha: ';
    loading = 'Carregando';
    registerCreateAccount = 'Criar Conta';
    registerCredentials = 'Credenciais';
  } else if (globalLanguage === 'DE') {
    registerCreate = 'Erstellen Sie Ihr Konto';
    registerPersonalInfo = 'Persönliche Informationen';
    registerCompany = 'Unternehmen: ';
    phCompany = 'Firmenname';
    registerName = 'Name: ';
    phName = 'Name';
    registerLastName = 'Nachname: ';
    phLastName = 'Nachname';
    registerRole = 'Position oder Job: ';
    phRole = 'Berufsbezeichnung';
    registerAdress = 'Adresse: ';
    registerCoutry = 'Land: ';
    registerState = 'Bundesland: ';
    registerCity = 'Stadt: ';
    registerStreet = 'Straße: ';
    phStreet = 'Straße';
    registerContactInfo = 'Kontaktinformationen';
    registerChangeInformation = 'Informationen ändern';
    registerPassword = 'Passwort: ';
    registerConfirmPassword = 'Bestätigen Sie Ihr Passwort: ';
    loading = 'Wird geladen';
    registerCreateAccount = 'Konto erstellen';
    registerCredentials = 'Anmeldeinformationen';
  }
  return {
    registerCreate,
    registerPersonalInfo,
    registerCompany,
    phCompany,
    registerName,
    phName,
    registerLastName,
    phLastName,
    registerRole,
    phRole,
    registerAdress,
    registerCoutry,
    registerState,
    registerCity,
    registerStreet,
    phStreet,
    registerContactInfo,
    registerChangeInformation,
    registerPassword,
    registerConfirmPassword,
    loading,
    registerCreateAccount,
    registerCredentials,
  };
}
