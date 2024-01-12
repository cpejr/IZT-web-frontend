// eslint-disable-next-line import/prefer-default-export
export function TranslateText({ globalLanguage }) {
  let stabilityAnalysis;
  let profile;
  let reports;

  if (globalLanguage === 'EN') {
    stabilityAnalysis = 'Stability Analysis';
    profile = 'Profile';
    reports = 'Reports';
  } else if (globalLanguage === 'PT') {
    stabilityAnalysis = 'Análise de Estabilidade';
    profile = 'Perfil';
    reports = 'Relatórios';
  } else if (globalLanguage === 'DE') {
    stabilityAnalysis = 'Stabilitätsanalyse';
    profile = 'Profil';
    reports = 'Berichte';
  }
  return {
    stabilityAnalysis,
    profile,
    reports,
  };
}
