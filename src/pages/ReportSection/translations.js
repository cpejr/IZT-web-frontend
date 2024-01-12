// eslint-disable-next-line import/prefer-default-export
export function TranslateText({ globalLanguage }) {
  let reports;
  let report;
  let search;
  if (globalLanguage === 'EN') {
    report = 'Report';
    reports = 'Reports';
    search = 'Search by name';
  } else if (globalLanguage === 'PT') {
    report = 'Relatório';
    reports = 'Relatórios';
    search = 'Pesquisar por nome';
  } else if (globalLanguage === 'DE') {
    report = 'Bericht';
    reports = 'Berichte';
    search = 'Nach Namen suchen';
  }
  return {
    reports,
    report,
    search,
  };
}
