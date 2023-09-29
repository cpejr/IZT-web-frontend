// eslint-disable-next-line import/prefer-default-export
export function TranslateText({ globalLanguage }) {
  let profileTitle1;
  let profilePersonalInfo;
  let profileCompany;
  let profileName;
  let profileLastName;
  let profileRole;
  let profileAdress;
  let profileCoutry;
  let profileState;
  let profileCity;
  let profileStreet;
  let profileContactInfo;
  let profileCourse;
  let profileAccess;
  let profileUnlimitedAccess;
  let profileNoAccess;
  let profileChangeInformation;

  if (globalLanguage === 'EN') {
    profileTitle1 = 'User information';
    profilePersonalInfo = 'Personal information';
    profileCompany = 'Company: ';
    profileName = 'Name: ';
    profileLastName = 'Last Name: ';
    profileRole = 'Job: ';
    profileAdress = 'Adress: ';
    profileCoutry = 'Country: ';
    profileState = 'State: ';
    profileCity = 'City: ';
    profileStreet = 'Street: ';
    profileContactInfo = 'Contact Information';
    profileCourse = 'Course ';
    profileAccess = 'Access Validity: ';
    profileUnlimitedAccess = 'Unlimited Access ';
    profileNoAccess = 'No access: ';
    profileChangeInformation = 'Change Information';
  } else if (globalLanguage === 'PT') {
    profileTitle1 = 'Informações do Usuário';
    profilePersonalInfo = 'Informações Pessoais';
    profileCompany = 'Empresa: ';
    profileName = 'Nome: ';
    profileLastName = 'Sobrenome: ';
    profileRole = 'Cargo: ';
    profileAdress = 'Endereço: ';
    profileCoutry = 'País: ';
    profileState = 'Estado: ';
    profileCity = 'Cidade: ';
    profileStreet = 'Rua: ';
    profileContactInfo = 'Informações de Contato';
    profileCourse = 'Curso ';
    profileAccess = 'Validade de Acesso: ';
    profileUnlimitedAccess = 'Acesso Ilimitado ';
    profileNoAccess = 'Sem Acesso: ';
    profileChangeInformation = 'Alterar Infomações';
  } else if (globalLanguage === 'DE') {
    profileTitle1 = 'Benutzerinformationen';
    profilePersonalInfo = 'Persönliche Informationen';
    profileCompany = 'Unternehmen: ';
    profileName = 'Name: ';
    profileLastName = 'Nachname: ';
    profileRole = 'Position oder Job: ';
    profileAdress = 'Adresse: ';
    profileCoutry = 'Land: ';
    profileState = 'Bundesland: ';
    profileCity = 'Stadt: ';
    profileStreet = 'Straße: ';
    profileContactInfo = 'Kontaktinformationen';
    profileCourse = 'Kurs ';
    profileAccess = 'Zugriffsberechtigung: ';
    profileUnlimitedAccess = 'Unbegrenzter Zugriff';
    profileNoAccess = 'Kein Zugriff';
    profileChangeInformation = 'Informationen ändern';
  }
  return {
    profileTitle1,
    profilePersonalInfo,
    profileCompany,
    profileName,
    profileLastName,
    profileRole,
    profileAdress,
    profileCoutry,
    profileState,
    profileCity,
    profileStreet,
    profileContactInfo,
    profileCourse,
    profileAccess,
    profileUnlimitedAccess,
    profileNoAccess,
    profileChangeInformation,
  };
}
