// eslint-disable-next-line import/prefer-default-export
export function TranslateText({ currentLanguage }) {
  let loading;
  let label1;
  let placeholder1;
  let label2;
  let placeholder2;
  let label3;
  let placeholder3;
  let label4;
  let label5;
  let label6;
  let label7;
  let label8;
  let label9;
  let label10;

  if (currentLanguage === 'PT') {
    loading = 'Carregando';
    label1 = 'Nome:';
    placeholder1 = 'Nome completo';
    label2 = 'Empresa:';
    placeholder2 = 'Nome da empresa';
    label3 = 'E-mail:';
    placeholder3 = 'email@email.com';
    label4 = 'Telefone:';
    label5 = 'País:';
    label6 = 'Estado:';
    label7 = 'Cidade:';
    label8 = 'CEP:';
    label9 = 'Endereço:';
    label10 = 'Enviar';
  } else if (currentLanguage === 'EN') {
    loading = 'Loading';
    label1 = 'Name:';
    placeholder1 = 'Full name';
    label2 = 'Company:';
    placeholder2 = 'Company name';
    label3 = 'Email:';
    placeholder3 = 'email@email.com';
    label4 = 'Phone:';
    label5 = 'Country:';
    label6 = 'State:';
    label7 = 'City:';
    label8 = 'ZIP Code:';
    label9 = 'Address:';
    label10 = 'Send';
  } else if (currentLanguage === 'DE') {
    loading = 'Laden';
    label1 = 'Name:';
    placeholder1 = 'Vollständiger Name';
    label2 = 'Firma:';
    placeholder2 = 'Firmenname';
    label3 = 'E-Mail:';
    placeholder3 = 'email@email.com';
    label4 = 'Telefon:';
    label5 = 'Land:';
    label6 = 'Bundesland:';
    label7 = 'Stadt:';
    label8 = 'PLZ:';
    label9 = 'Adresse:';
    label10 = 'Senden';
  }

  return {
    loading,
    label1,
    placeholder1,
    label2,
    placeholder2,
    label3,
    placeholder3,
    label4,
    label5,
    label6,
    label7,
    label8,
    label9,
    label10,
  };
}
