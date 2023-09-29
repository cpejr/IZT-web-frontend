// eslint-disable-next-line import/prefer-default-export
export function TranslateText({ globalLanguage }) {
  let DataEntry;
  let AnalysisData;
  let MachineData;
  let ProductData;
  let Loading;
  let Calculate;
  let SaveReport;
  let StabilityChart;
  let HeightStabilityChart;
  let ReportName;
  let Success;

  if (globalLanguage === 'EN') {
    DataEntry = 'Data Entry';
    AnalysisData = 'Analysis Data';
    MachineData = 'Machine Data';
    ProductData = 'Product Data';
    Loading = 'Loading';
    Calculate = 'Calculate';
    SaveReport = 'Save Report';
    StabilityChart = 'Process Stability Chart';
    HeightStabilityChart = 'Piece Height Stability Chart';
    ReportName = 'Enter the report name';
    Success = 'Data calculated successfully!';
  } else if (globalLanguage === 'PT') {
    DataEntry = 'Entrada de Dados';
    AnalysisData = 'Dados da Análise';
    MachineData = 'Dados da Máquina';
    ProductData = 'Dados do Produto';
    Loading = 'Carregando';
    Calculate = 'Calcular';
    SaveReport = 'Salvar relatório';
    StabilityChart = 'Diagrama - Estabilidade de processo';
    HeightStabilityChart = 'Diagrama - Estabilidade de altura da peça';
    ReportName = 'Insira o nome do relatório';
    Success = 'Dados calculados com sucesso!';
  } else if (globalLanguage === 'DE') {
    DataEntry = 'Dateneingabe';
    AnalysisData = 'Analyse-Daten';
    MachineData = 'Maschinendaten';
    ProductData = 'Produktinformationen';
    Loading = 'Laden';
    Calculate = 'Berechnen';
    SaveReport = 'Bericht speichern';
    StabilityChart = 'Prozessstabilitätsdiagramm';
    HeightStabilityChart = 'Höhensstabilitätsdiagramm für das Werkstück';
    ReportName = 'Geben Sie den Berichtsnamen ein';
    Success = 'Daten erfolgreich berechnet!';
  }
  return {
    DataEntry,
    AnalysisData,
    MachineData,
    ProductData,
    Loading,
    Calculate,
    SaveReport,
    StabilityChart,
    HeightStabilityChart,
    ReportName,
    Success,
  };
}
