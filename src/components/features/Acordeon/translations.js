// eslint-disable-next-line import/prefer-default-export
export function TranslateText({ globalLanguage }) {
  let AnalysisData;
  let rectificationProcess;
  let machine;
  let machineNumber;
  let operation;
  let department;
  let responsiblePerson;
  let ProductData;
  let product;
  let productNumber;
  let diameter;
  let totalLength;
  let electiveLength;
  let MachineData;
  let allowance;
  let rcMaxDiameter;
  let rcMinDiameter;
  let raDiameter;
  let rcLength;
  let raLength;
  let rcEffectiveLength;
  let rcRotation;
  let raRotation;
  let rwInclination;
  let StabilityChart;
  let HeightStabilityChart;
  let Download;
  let Delete;
  let ReportName;
  let Select;
  let PlungeCenterless;
  let TFCenterless;
  let RoughGrinding;
  let PRoughGrinding;
  let FinishGrinding;
  let RAProfileparameter;
  let Loading;
  let Calculate;

  if (globalLanguage === 'EN') {
    AnalysisData = 'Analysis Data';
    MachineData = 'Machine Data';
    rectificationProcess = 'Grinding Process';
    machine = 'Machine';
    machineNumber = 'Machine Number';
    operation = 'Operation';
    department = 'Department';
    responsiblePerson = 'Responsible';
    ProductData = 'Product Data';
    product = 'Product';
    productNumber = 'Product Number';
    diameter = 'Diameter';
    totalLength = 'Total Length';
    electiveLength = 'Optional Length';
    allowance = 'Allowance';
    rcMaxDiameter = 'RC Diameter';
    rcMinDiameter = 'RC Diameter';
    raDiameter = 'RA Diameter';
    rcLength = 'RC Length';
    raLength = 'RA Length';
    rcEffectiveLength = 'Effective RC Length';
    rcRotation = 'RC Rotation';
    raRotation = 'RA Rotation';
    rwInclination = 'Grinding Wheel Inclination';
    StabilityChart = 'Process Stability Chart';
    HeightStabilityChart = 'Piece Height Stability Chart';
    Download = 'Download Report';
    Delete = 'Delete';
    ReportName = 'Enter the report name';
    Select = 'Select';
    PlungeCenterless = 'Plunge Centerless';
    TFCenterless = 'Through-Feed Centerless';
    RoughGrinding = 'Rough Grinding';
    PRoughGrinding = 'Pre-Rough Grinding';
    FinishGrinding = 'Finish Grinding';
    RAProfileparameter = 'RA profile parameter';
    Loading = '';
    Calculate = '';
  } else if (globalLanguage === 'PT') {
    AnalysisData = 'Dados da Análise';
    MachineData = 'Dados da Máquina';
    rectificationProcess = 'Processo de retificação';
    machine = 'Máquina';
    machineNumber = 'Número da máquina';
    operation = 'Operação';
    department = 'Departamento';
    responsiblePerson = 'Responsável';
    ProductData = 'Dados do Produto';
    product = 'Produto';
    productNumber = 'Número do produto';
    diameter = 'Diâmetro';
    totalLength = 'Comprimento total';
    electiveLength = 'Comprimento eletivo';
    allowance = 'Sobremetal';
    rcMaxDiameter = 'Diâmetro do RC';
    rcMinDiameter = 'Diâmetro do RC';
    raDiameter = 'Diâmetro do RA';
    rcLength = ' Comprimento do RC';
    raLength = 'Comprimento do RA';
    rcEffectiveLength = 'Comprimento efetivo do RC';
    rcRotation = 'Rotação do RC';
    raRotation = 'Rotação do RA';
    rwInclination = 'Inclinação da Roda de Retificação';
    StabilityChart = 'Diagrama - Estabilidade de processo';
    HeightStabilityChart = 'Diagrama - Estabilidade de altura da peça';
    Download = 'Baixar Relatório';
    Delete = 'Excluir';
    ReportName = 'Insira o nome do relatório';
    Select = 'Selecionar';
    PlungeCenterless = 'Centerless de Mergulho';
    TFCenterless = 'Centerless de Passagem';
    RoughGrinding = 'Desbaste';
    PRoughGrinding = 'Pré Desbaste';
    FinishGrinding = 'Acabamento';
    RAProfileparameter = ' Parâmetro de perfil RA';
    Loading = '';
    Calculate = '';
  } else if (globalLanguage === 'DE') {
    AnalysisData = 'Analyse-Daten';
    MachineData = 'Maschinendaten';
    rectificationProcess = 'Schleifprozess';
    machine = 'Maschine';
    machineNumber = 'Maschinennummer';
    operation = 'Betrieb';
    department = 'Abteilung';
    responsiblePerson = 'Verantwortlicher';
    ProductData = 'Produktinformationen';
    product = 'Produkt';
    productNumber = 'Produktnummer';
    diameter = 'Durchmesser';
    totalLength = 'Gesamtlänge';
    electiveLength = 'Optionale Länge';
    allowance = 'Übermaß';
    rcMaxDiameter = 'RC-Durchmesser';
    rcMinDiameter = 'RC-Durchmesser';
    raDiameter = 'RA-Durchmesser';
    rcLength = 'RC-Länge';
    raLength = 'RA-Länge ';
    rcEffectiveLength = 'Effektive RC-Länge';
    rcRotation = 'RC-Rotation';
    raRotation = 'RA-Rotation';
    rwInclination = 'Schleifscheibenneigung';
    StabilityChart = 'Prozessstabilitätsdiagramm';
    HeightStabilityChart = 'Höhensstabilitätsdiagramm für das Werkstück';
    Download = 'Bericht herunterladen';
    Delete = 'Löschen';
    ReportName = 'Geben Sie den Berichtsnamen ein';
    Select = 'Auswählen';
    PlungeCenterless = 'Eintauchen Centerless';
    TFCenterless = 'Durchlauf Centerless';
    RoughGrinding = 'Grobschleifen';
    PRoughGrinding = 'Vor-Grobschleifen';
    FinishGrinding = 'Feinschleifen';
    RAProfileparameter = 'RA Profilparameter';
    Loading = '';
    Calculate = '';
  }
  return {
    AnalysisData,
    StabilityChart,
    HeightStabilityChart,
    ReportName,
    rectificationProcess,
    machine,
    machineNumber,
    operation,
    department,
    responsiblePerson,
    ProductData,
    product,
    productNumber,
    diameter,
    totalLength,
    electiveLength,
    MachineData,
    allowance,
    rcMaxDiameter,
    rcMinDiameter,
    raDiameter,
    rcLength,
    raLength,
    rcEffectiveLength,
    rcRotation,
    raRotation,
    rwInclination,
    Download,
    Delete,
    Select,
    PlungeCenterless,
    TFCenterless,
    RoughGrinding,
    PRoughGrinding,
    FinishGrinding,
    RAProfileparameter,
    Loading,
    Calculate,
  };
}
