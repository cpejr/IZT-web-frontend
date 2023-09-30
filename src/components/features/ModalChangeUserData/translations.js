/* eslint-disable import/prefer-default-export */
export function TranslateText({ language }) {
  let profilePersonalInfo;
  let profileCompany;
  let phCompany;
  let profileName;
  let namePlaceholder;
  let profileLastName;
  let lastNamePlaceholder;
  let profileRole;
  let phRole;
  let profileAdress;
  let profileCoutry;
  let phCountry;
  let profileState;
  let phState;
  let profileCity;
  let phCity;
  let profileStreet;
  let profileChangeInformation;
  let profileLoading;

  if (language === 'EN') {
    profilePersonalInfo = 'Personal information';
    profileCompany = 'Company: ';
    phCompany = 'Company name';
    profileName = 'Name: ';
    namePlaceholder = 'Name';
    profileLastName = 'Last Name: ';
    lastNamePlaceholder = 'Last Name';
    profileRole = 'Job: ';
    phRole = 'Job Title';
    profileAdress = 'Adress: ';
    profileCoutry = 'Country: ';
    phCountry = 'Country name';
    profileState = 'State: ';
    phState = 'State name';
    profileCity = 'City: ';
    phCity = 'City name';
    profileStreet = 'Street: ';
    profileChangeInformation = 'Save Information';
    profileLoading = 'Loading';
  } else if (language === 'PT') {
    profilePersonalInfo = 'Informações Pessoais';
    profileCompany = 'Empresa: ';
    phCompany = 'Nome da empresa';
    profileName = 'Nome: ';
    namePlaceholder = 'Nome';
    profileLastName = 'Sobrenome: ';
    lastNamePlaceholder = 'Sobrenome';
    profileRole = 'Cargo: ';
    phRole = 'Nome do Cargo';
    profileAdress = 'Endereço: ';
    profileCoutry = 'País: ';
    phCountry = 'Nome do País';
    profileState = 'Estado: ';
    phState = 'Nome do Estado';
    profileCity = 'Cidade: ';
    phCity = 'Nome da Cidade';
    profileStreet = 'Rua: ';
    profileChangeInformation = 'Salvar Infomações';
    profileLoading = 'Carregando';
  } else if (language === 'DE') {
    profilePersonalInfo = 'Persönliche Informationen';
    profileCompany = 'Unternehmen: ';
    phCompany = 'Firmenname';
    profileName = 'Name: ';
    namePlaceholder = 'Name';
    profileLastName = 'Nachname: ';
    lastNamePlaceholder = 'Nachname';
    profileRole = 'Position oder Job: ';
    phRole = 'Berufsbezeichnung';
    profileAdress = 'Adresse: ';
    profileCoutry = 'Land: ';
    phCountry = 'Landesname';
    profileState = 'Bundesland: ';
    phState = 'Bundeslandname';
    profileCity = 'Stadt: ';
    phCity = 'Stadtname';
    profileStreet = 'Straße: ';
    profileChangeInformation = 'Informationen speichern';
    profileLoading = 'Laden';
  }
  return {
    profilePersonalInfo,
    profileCompany,
    phCompany,
    profileName,
    namePlaceholder,
    profileLastName,
    lastNamePlaceholder,
    profileRole,
    phRole,
    profileAdress,
    profileCoutry,
    phCountry,
    profileState,
    phState,
    profileCity,
    phCity,
    profileStreet,
    profileChangeInformation,
    profileLoading,
  };
}
