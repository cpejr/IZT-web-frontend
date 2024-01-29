export function TranslateTextSoftwareLayouts({ globalLanguage }) {
  let textMobile1;
  let textMobile2;

  if (globalLanguage === 'EN') {
    textMobile1 =
      'We are working to deliver the best experience on mobile devices. In the meantime, you can access the new desktop version.';
    textMobile2 = 'Thank you for understanding!';
  } else if (globalLanguage === `PT`) {
    textMobile1 =
      'Estamos trabalhando para entregar a melhor experiência em dispositivos móveis. Enquanto isso, você pode acessar a nova versão de desktop.';
    textMobile2 = 'Agradecemos a compreensão!';
  } else if (globalLanguage === `DE`) {
    textMobile1 =
      'Wir arbeiten daran, das beste Erlebnis auf Mobilgeräten zu bieten. In der Zwischenzeit können Sie auf die neue Desktop-Version zugreifen.';
    textMobile2 = 'Danke für dein Verständnis!';
  }

  return {
    textMobile1,
    textMobile2,
  };
}
