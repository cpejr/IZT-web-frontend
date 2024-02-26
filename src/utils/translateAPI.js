export default async function translateText(text, language) {
  try {
    const response = await fetch(
      `https://translate.googleapis.com/translate_a/single?client=gtx&sl=pt&tl=${language}&dt=t&q=${encodeURIComponent(
        text
      )}`
    );
    const data = await response.json();
    const translation = data[0][0][0];

    return translation;
  } catch (error) {
    return null;
  }
}
