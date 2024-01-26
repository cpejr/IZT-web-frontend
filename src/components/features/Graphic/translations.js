import { TitleRow } from '../../../pages/StabilityAnalysis/Styles';

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
