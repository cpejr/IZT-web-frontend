// eslint-disable-next-line import/prefer-default-export
export function TranslateText({ globalLanguage }) {
  let dataEntry;
  let analysisData;
  let machineData;
  let productData;
  let loading;
  let calculate;
  let saveReport;
  let stabilityChart;
  let heightStabilityChart;
  let reportName;
  let success;
  let reportSuccess;

  if (globalLanguage === 'EN') {
    dataEntry = 'Data Entry';
    analysisData = 'Analysis Data';
    machineData = 'Machine Data';
    productData = 'Product Data';
    loading = 'Loading';
    calculate = 'Calculate';
    saveReport = 'Save Report';
    stabilityChart = 'Process Stability Chart';
    heightStabilityChart = 'Piece Height Stability Chart';
    reportName = 'Enter the report name';
    success = 'Data calculated successfully!';
    reportSuccess = 'Report created successfully';
  } else if (globalLanguage === 'PT') {
    dataEntry = 'Entrada de Dados';
    analysisData = 'Dados da Análise';
    machineData = 'Dados da Máquina';
    productData = 'Dados do Produto';
    loading = 'Carregando';
    calculate = 'Calcular';
    saveReport = 'Salvar relatório';
    stabilityChart = 'Diagrama - Estabilidade de processo';
    heightStabilityChart = 'Diagrama - Estabilidade de altura da peça';
    reportName = 'Insira o nome do relatório';
    success = 'Dados calculados com sucesso!';
    reportSuccess = 'Relatório criado com sucesso!';
  } else if (globalLanguage === 'DE') {
    dataEntry = 'Dateneingabe';
    analysisData = 'Analyse-Daten';
    machineData = 'Maschinendaten';
    productData = 'Produktinformationen';
    loading = 'Laden';
    calculate = 'Berechnen';
    saveReport = 'Bericht speichern';
    stabilityChart = 'Prozessstabilitätsdiagramm';
    heightStabilityChart = 'Höhensstabilitätsdiagramm für das Werkstück';
    reportName = 'Geben Sie den Berichtsnamen ein';
    success = 'Daten erfolgreich berechnet!';
    reportSuccess = 'Bericht erfolgreich erstellt!';
  }
  return {
    dataEntry,
    analysisData,
    machineData,
    productData,
    loading,
    calculate,
    saveReport,
    stabilityChart,
    heightStabilityChart,
    reportName,
    success,
    reportSuccess,
  };
}
