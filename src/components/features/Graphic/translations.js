/* eslint-disable import/prefer-default-export */
export function TranslateText({ globalLanguage }) {
  let chart;

  if (globalLanguage === 'PT') {
    chart = 'Gráfico IZT';
  } else if (globalLanguage === 'EN') {
    chart = 'IZT chart';
  } else if (globalLanguage === 'DE') {
    chart = 'IZT-Diagramm';
  }

  return {
    chart,
  };
}
