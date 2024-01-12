// eslint-disable-next-line import/prefer-default-export
export function TranslateText({ globalLanguage }) {
  let analysisData;
  let rectificationProcess;
  let machine;
  let machineNumber;
  let operation;
  let department;
  let responsiblePerson;
  let productData;
  let product;
  let productNumber;
  let diameter;
  let totalLength;
  let electiveLength;
  let machineData;
  let allowance;
  let rcMaxDiameter;
  let rcMinDiameter;
  let raDiameter;
  let rcLength;
  let raLength;
  let rcEffectiveLength;
  let rcRotation;
  let raRotation;
  let raRotationnr;
  let rwInclination;
  let stabilityChart;
  let heightStabilityChart;
  let download;
  let destroy;
  let ReportName;
  let hwCenterHeight;
  let raInclination;
  let raDresserInclination;
  let dresserHeight;
  let dresserPosition;
  let angleTangency;
  let angleRuler;
  let heightCenters;

  if (globalLanguage === 'EN') {
    analysisData = 'Analysis Data';
    machineData = 'Machine Data';
    rectificationProcess = 'Grinding Process';
    machine = 'Machine';
    machineNumber = 'Machine Number';
    operation = 'Operation';
    department = 'Department';
    responsiblePerson = 'Responsible';
    productData = 'Product Data';
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
    raRotationnr = 'RA Rotation(nr)';
    rwInclination = 'Grinding Wheel Inclination';
    stabilityChart = 'Process Stability Chart';
    heightStabilityChart = 'Piece Height Stability Chart';
    download = 'Download Report';
    destroy = 'Delete';
    ReportName = 'Enter the report name';
    hwCenterHeight = 'Height between centers hw';
    raInclination = 'RA inclination';
    raDresserInclination = 'RA dresser inclination';
    dresserHeight = 'Dresser height';
    dresserPosition = 'Dresser position';
    angleTangency = 'Tangent angle (γ)';
    angleRuler = 'Angle of the ruler (β)';
    heightCenters = 'Height between centers (hw)';
  } else if (globalLanguage === 'PT') {
    analysisData = 'Dados da Análise';
    machineData = 'Dados da Máquina';
    rectificationProcess = 'Processo de retificação';
    machine = 'Máquina';
    machineNumber = 'Número da máquina';
    operation = 'Operação';
    department = 'Departamento';
    responsiblePerson = 'Responsável';
    productData = 'Dados do Produto';
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
    raRotationnr = 'Rotação do RA(nr)';
    rwInclination = 'Inclinação da Roda de Retificação';
    stabilityChart = 'Diagrama - Estabilidade de processo';
    heightStabilityChart = 'Diagrama - Estabilidade de altura da peça';
    download = 'Baixar Relatório';
    destroy = 'Excluir';
    ReportName = 'Insira o nome do relatório';
    hwCenterHeight = 'Altura entre centros hw';
    raInclination = 'Inclinação do RA';
    raDresserInclination = 'Inclinação do dressador RA';
    dresserHeight = 'Altura do dressador';
    dresserPosition = 'Posição do dressador';
    angleTangency = 'Ângulo de tangêcia (γ) ';
    angleRuler = 'Ângulo da régua (β)';
    heightCenters = 'Altura entre centros (hw)';
  } else if (globalLanguage === 'DE') {
    analysisData = 'Analyse-Daten';
    machineData = 'Maschinendaten';
    rectificationProcess = 'Schleifprozess';
    machine = 'Maschine';
    machineNumber = 'Maschinennummer';
    operation = 'Betrieb';
    department = 'Abteilung';
    responsiblePerson = 'Verantwortlicher';
    productData = 'Produktinformationen';
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
    raRotationnr = 'RA-Rotation(nr)';
    rwInclination = 'Schleifscheibenneigung';
    stabilityChart = 'Prozessstabilitätsdiagramm';
    heightStabilityChart = 'Höhensstabilitätsdiagramm für das Werkstück';
    download = 'Bericht herunterladen';
    destroy = 'Löschen';
    ReportName = 'Geben Sie den Berichtsnamen ein';
    hwCenterHeight = 'Höhe zwischen den Zentren hw';
    raInclination = 'RA-Neigung';
    raDresserInclination = 'RA-Dresser-Neigung';
    dresserHeight = 'Dresser-Höhe';
    dresserPosition = 'Dresser-Position';
    angleTangency = 'Tangentwinkel (γ)';
    angleRuler = 'Winkel des Lineals (β)';
    heightCenters = ' Abstand zwischen den Zentren ';
  }
  return {
    analysisData,
    stabilityChart,
    heightStabilityChart,
    ReportName,
    rectificationProcess,
    machine,
    machineNumber,
    operation,
    department,
    responsiblePerson,
    productData,
    product,
    productNumber,
    diameter,
    totalLength,
    electiveLength,
    machineData,
    allowance,
    rcMaxDiameter,
    rcMinDiameter,
    raDiameter,
    rcLength,
    raLength,
    rcEffectiveLength,
    rcRotation,
    raRotation,
    raRotationnr,
    rwInclination,
    download,
    destroy,
    hwCenterHeight,
    raInclination,
    raDresserInclination,
    dresserHeight,
    dresserPosition,
    angleTangency,
    angleRuler,
    heightCenters,
  };
}
