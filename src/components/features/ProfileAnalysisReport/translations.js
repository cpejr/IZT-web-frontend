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
  let rwInclination;
  let stabilityChart;
  let heightStabilityChart;
  let download;
  let destroy;
  let reportName;
  let rAprofileparameter;
  let raInclination;
  let dresserHeight;
  let dresserPosition;
  let tfCenterlessGrindingGap;
  let outputData;
  let radragRotationnr;
  let peripheralSpeed;
  let passingSpeed;
  let partQuantity;
  let cycleTime;
  let revolution;
  let removeRate;
  let cutThickness;

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
    rwInclination = 'Grinding Wheel Inclination';
    stabilityChart = 'Process Stability Chart';
    heightStabilityChart = 'Piece Height Stability Chart';
    download = 'Download Report';
    destroy = 'Delete';
    reportName = 'Enter the report name';
    rAprofileparameter = 'RA profile parameter';
    raInclination = 'RA Inclination';
    dresserHeight = 'Dresser Height';
    dresserPosition = 'Dresser Position';
    tfCenterlessGrindingGap = 'Through-Feed Centerless Grinding Gap';
    outputData = 'Output Data';
    radragRotationnr = 'Grinding wheel rotation';
    peripheralSpeed = 'Peripheral speed of the workpiece';
    passingSpeed = 'Workpiece feed speed';
    partQuantity = 'Quantity of pieces';
    cycleTime = 'Cycle time';
    revolution = 'Workpiece revolutions';
    removeRate = 'Removal rate';
    cutThickness = 'Cutting thickness';
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
    rwInclination = 'Inclinação da Roda de Retificação';
    stabilityChart = 'Diagrama - Estabilidade de processo';
    heightStabilityChart = 'Diagrama - Estabilidade de altura da peça';
    download = 'Baixar Relatório';
    destroy = 'Excluir';
    reportName = 'Insira o nome do relatório';
    rAprofileparameter = 'Parâmetro de perfil RA';
    raInclination = 'Inclinação do RA';
    dresserHeight = 'Altura do dressador';
    dresserPosition = 'Posição do dressador';
    tfCenterlessGrindingGap = 'Vão de retificação centerless de passagem';
    outputData = 'Dados de saída';
    radragRotationnr = 'Rotação do rebolo de arraste';
    peripheralSpeed = 'Velocidade periférica da peça';
    passingSpeed = 'Velocidade de passagem da peça';
    partQuantity = 'Quantidade de peças';
    cycleTime = 'Tempo de ciclo';
    revolution = 'Nr. revoluções da peça';
    removeRate = 'Taxa de remoção';
    cutThickness = 'Espessura de corte';
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
    rwInclination = 'Schleifscheibenneigung';
    stabilityChart = 'Prozessstabilitätsdiagramm';
    heightStabilityChart = 'Höhensstabilitätsdiagramm für das Werkstück';
    download = 'Bericht herunterladen';
    destroy = 'Löschen';
    reportName = 'Geben Sie den Berichtsnamen ein';
    rAprofileparameter = 'RA Profilparameter';
    raInclination = 'RA Neigung';
    dresserHeight = 'Dresser-Höhe';
    dresserPosition = 'Dresser-Position';
    tfCenterlessGrindingGap = 'Durchlauf-Centerless-Schleifspalt';
    outputData = 'Ausgabedaten';
    radragRotationnr = 'Schleifscheibendrehung';
    peripheralSpeed = 'Umfangsgeschwindigkeit des Werkstücks';
    passingSpeed = 'Werkstückvorschubgeschwindigkeit';
    partQuantity = 'Werkstückmenge';
    cycleTime = 'Zykluszeit';
    revolution = 'Werkstückumdrehungen';
    removeRate = 'Abtragsrate';
    cutThickness = 'Schnittdicke';
  }
  return {
    analysisData,
    stabilityChart,
    heightStabilityChart,
    reportName,
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
    rwInclination,
    download,
    destroy,
    rAprofileparameter,
    raInclination,
    dresserHeight,
    dresserPosition,
    tfCenterlessGrindingGap,
    outputData,
    radragRotationnr,
    peripheralSpeed,
    passingSpeed,
    partQuantity,
    cycleTime,
    revolution,
    removeRate,
    cutThickness,
  };
}
