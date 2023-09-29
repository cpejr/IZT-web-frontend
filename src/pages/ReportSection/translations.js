// eslint-disable-next-line import/prefer-default-export
export function TranslateText({ globalLanguage }) {
  let Reports;
  let Report;
  if (globalLanguage === 'EN') {
    Report = 'Report';
    Reports = 'Reports';
  } else if (globalLanguage === 'PT') {
    Report = 'Relatório';
    Reports = 'Relatórios';
  } else if (globalLanguage === 'DE') {
    Report = 'Bericht';
    Reports = 'Berichte';
  }
  return {
    Reports,
    Report,
  };
}
