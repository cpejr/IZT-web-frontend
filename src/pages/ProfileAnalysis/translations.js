// eslint-disable-next-line import/prefer-default-export
export function TranslateText({ globalLanguage }) {
  let dataEntry;
  let saveReport;
  let grindingClearance;
  let outputData;
  let heightBetweenCenters;
  let dresserHeight;
  let raInclination;
  let dresserInclination;
  let rulerAngle;
  let grindingRotation;
  let peripheralSpeed;
  let feedSpeed;
  let pieceQuantity;
  let cycleTime;
  let revolutionsNumbers;
  let removalRate;
  let cuttingThickness;
  let tangentAngle;
  let reportName;

  if (globalLanguage === 'EN') {
    dataEntry = 'Data Entry';
    saveReport = 'Save Report';
    grindingClearance = 'Centerless Through-feed Grinding Clearance';
    outputData = 'Output Data';
    heightBetweenCenters = 'Height between centers';
    dresserHeight = 'Dresser Height';
    raInclination = 'RA Inclination';
    dresserInclination = 'Dresser Inclination';
    rulerAngle = 'Angle of the ruler';
    grindingRotation = 'Grinding Wheel Spindle Rotation';
    peripheralSpeed = ' Workpiece Peripheral Speed';
    feedSpeed = 'Workpiece Feed Speed';
    pieceQuantity = 'Piece Quantity';
    cycleTime = 'Cycle Time';
    revolutionsNumbers = 'Number of Workpiece Revolutions';
    removalRate = 'Removal Rate';
    cuttingThickness = 'Cutting Thickness';
    tangentAngle = 'Tangent Angle';
    reportName = 'Enter the report name';
  } else if (globalLanguage === 'PT') {
    dataEntry = 'Entrada de Dados';
    saveReport = 'Salvar relatório';
    grindingClearance = 'Vão de retificação centerless de passagem';
    outputData = 'Dados de saída';
    heightBetweenCenters = 'Altura entre centros';
    dresserHeight = 'Altura do dessador';
    raInclination = 'Inclinação do RA';
    dresserInclination = 'Inclinação do dressador';
    rulerAngle = 'Ângulo da régua';
    grindingRotation = 'Rotação do rebolo de arraste';
    peripheralSpeed = 'Velocidade periférica da peça';
    feedSpeed = 'Velocidade de passagem da peça';
    pieceQuantity = 'Quantidade de peça';
    cycleTime = 'Tempo de ciclo';
    revolutionsNumbers = 'Nr. revoluções da peça';
    removalRate = 'Taxa de remoção';
    cuttingThickness = 'Espessura de corte';
    tangentAngle = 'Ângulo de tangência';
    reportName = 'Insira o nome do relatório';
  } else if (globalLanguage === 'DE') {
    dataEntry = 'Dateneingabe';
    saveReport = 'Bericht speichern';
    grindingClearance = 'Durchlaufloses Schleifen von Schleifspalt';
    outputData = 'Ausgabedaten';
    heightBetweenCenters = 'Höhe zwischen den Zentren';
    dresserHeight = 'Dresser-Höhe';
    raInclination = 'RA-Neigung';
    dresserInclination = 'Dresser-Neigung';
    rulerAngle = 'Winkel des Lineals';
    grindingRotation = 'Rotation der Schleifscheibenspindel';
    peripheralSpeed = 'Umfangsgeschwindigkeit des Werkstücks';
    feedSpeed = 'Werkstück-Vorschubgeschwindigkeit';
    pieceQuantity = 'Stückmenge';
    cycleTime = 'Zykluszeit';
    revolutionsNumbers = 'Anzahl der Werkstückumdrehungen';
    removalRate = 'Abtragsrate';
    cuttingThickness = 'Schnittdicke';
    tangentAngle = 'Tangentenwinkel';
    reportName = 'Geben Sie den Berichtsnamen ein';
  }
  return {
    dataEntry,
    saveReport,
    grindingClearance,
    outputData,
    heightBetweenCenters,
    dresserHeight,
    raInclination,
    dresserInclination,
    rulerAngle,
    grindingRotation,
    peripheralSpeed,
    feedSpeed,
    pieceQuantity,
    cycleTime,
    revolutionsNumbers,
    removalRate,
    cuttingThickness,
    tangentAngle,
    reportName,
  };
}
