// eslint-disable-next-line import/prefer-default-export
export function TranslateText({ globalLanguage }) {
  let chapter1video1;
  let chapter1video2;

  if (globalLanguage === 'EN') {
    chapter1video1 =
      'Definition and historical context of centerless grinding processes.';
    chapter1video2 = 'Characteristics of the centerless grinding process.';
  } else if (globalLanguage === 'PT') {
    chapter1video1 =
      'Definição e contexto histórico dos processos de retificação centerless.';
    chapter1video2 = 'Características dos processos de retificação centerless.';
  } else if (globalLanguage === 'DE') {
    chapter1video1 =
      'Definition und historischer Kontext spitzenloser Schleifprozesse.';
    chapter1video2 = 'Merkmale des spitzenlosen Schleifprozesses.';
  }

  return {
    chapter1video1,
    chapter1video2,
  };
}
