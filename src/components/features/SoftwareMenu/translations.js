// eslint-disable-next-line import/prefer-default-export
export function TranslateText({ globalLanguage }) {
  let StabilityAnalysis;
  let Profile;
  let Reports;

  if (globalLanguage === 'EN') {
    StabilityAnalysis = 'Stability Analysis';
    Profile = 'Profile';
    Reports = 'Reports';
  } else if (globalLanguage === 'PT') {
    StabilityAnalysis = 'Análise de Estabilidade';
    Profile = 'Perfil';
    Reports = 'Relatórios';
  } else if (globalLanguage === 'DE') {
    StabilityAnalysis = 'Stabilitätsanalyse';
    Profile = 'Profil';
    Reports = 'Berichte';
  }
  return {
    StabilityAnalysis,
    Profile,
    Reports,
  };
}
