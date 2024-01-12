// eslint-disable-next-line import/prefer-default-export
export function TranslateTextChapters({ globalLanguage }) {
  let chapter1;
  let chapter2;
  let chapter3;
  let chapter4;
  let chapter5;
  let chapter6;
  let chapter7;
  let chapter8;
  let chapter9;

  if (globalLanguage === 'EN') {
    chapter1 = 'Introduction to centerless grinding processes';
    chapter2 = 'Circularity deviation generation mechanism';
    chapter3 = 'Adjustment of the Workpiece Position in the Grinding Gap';
    chapter4 = 'Parameters for Monitoring the Centerless Grinding Process';
    chapter5 = 'Strategies for Dressing Cutting and Dragging Wheels';
    chapter6 = 'Dressing the Dragging Wheel';
    chapter7 = 'Lubricoolant Fluids Applied to Centerless Grinding Processes';
    chapter8 = 'Use, Handling, and Performance Calculation of Grinding Wheels';
    chapter9 = 'Troubleshooting in Centerless Grinding Processes';
  } else if (globalLanguage === 'PT') {
    chapter1 = 'Introdução aos processos de retificação centerless';
    chapter2 = 'Mecanismo de geração do desvio de circularidade';
    chapter3 = 'Ajuste da posição da peça no vão de retificação';
    chapter4 =
      'Parâmetros de monitoramento do processo de retificação centerless';
    chapter5 = 'Estratégias para dressagem dos rebolos de corte e arraste';
    chapter6 = 'Dressagem do rebolo de arraste';
    chapter7 =
      'Fluidos lubrirrefrigerantes aplicados aos processos de retificação centerless';
    chapter8 = 'Uso, Manuseio e Cálculo da Performance de Rebolos';
    chapter9 = 'Solução de problemas nos processos de retificação centerless';
  } else if (globalLanguage === 'DE') {
    chapter1 = 'Einführung in die Prozesse der spitzenlosen Schleifbearbeitung';
    chapter2 = 'Mechanismus der Erzeugung der Rundlaufabweichung';
    chapter3 = 'Einstellung der Werkstückposition im Schleifspalt';
    chapter4 = 'Parameterüberwachung des spitzenlosen Schleifprozesses';
    chapter5 = 'Strategien für das Abrichten von Schleif- und Ziehscheiben';
    chapter6 = 'Abrichten der Ziehscheibe';
    chapter7 = 'Auf Schleifprozesse angewandte Schmierkühlmittel';
    chapter8 =
      'Verwendung, Handhabung und Leistungsberechnung von Schleifscheiben';
    chapter9 = 'Fehlerbehebung bei spitzenlosen Schleifprozessen';
  }

  return {
    chapter1,
    chapter2,
    chapter3,
    chapter4,
    chapter5,
    chapter6,
    chapter7,
    chapter8,
    chapter9,
  };
}
