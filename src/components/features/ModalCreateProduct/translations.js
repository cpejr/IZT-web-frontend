// eslint-disable-next-line import/prefer-default-export
export function TranslateText({ globalLanguage }) {
    let productName;
    let typeProductName;
    let description;
    let typeDescription;
    let advantages;
    let typeAdvantages;
  
    if (globalLanguage === 'EN') {
      productName =
        'Product Name: ';
      typeProductName =
      'Enter the product name: ';
      description = 'Description: ';
      typeDescription = 'Describe the Product: ';
      advantages = 'advantages: ';
      typeAdvantages = 'Describe the advantages:';
    } else if (globalLanguage === 'PT') {
      productName =
        'Nome do Produto: ';
      typeProductName =
      "Digite o nome do produto:";
      description = 'Descrição: ';
      typeDescription = 'Descreva o Produto: ';
      advantages = 'Vantagens: ';
      typeAdvantages = 'Descreva as Vantagens:';
    } else if (globalLanguage === 'DE') {
      productName =
        'Name de Produkts: ';
      typeProductName =
        'Ziffer oder Produktname:';
      description = 'Beschreibung:';
      typeDescription = 'Beschreiben Sie das Produkt:';
      advantages = 'Vorteile';
      typeAdvantages = 'Beschreiben Sie die Vorteile: '
    }
    return {
      productName,
      typeProductName,
      description,
      typeDescription,
    };
  }
  