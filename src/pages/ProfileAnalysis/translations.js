// eslint-disable-next-line import/prefer-default-export
export function TranslateText({ globalLanguage }) {
  let DataEntry;
  let SaveReport;
  let GrindingClearance;
  let OutputData;
  let HeightBetweenCenters;
  let DresserHeight;
  let RAInclination;
  let DresserInclination;
  let RulerAngle;
  let GrindingRotation;
  let PeripheralSpeed;
  let FeedSpeed;
  let PieceQuantity;
  let CycleTime;
  let RevolutionsNumbers;
  let RemovalRate;
  let CuttingThickness;
  let TangentAngle;
  let ReportName;

  if (globalLanguage === 'EN') {
    DataEntry = 'Data Entry';
    SaveReport = 'Save Report';
    GrindingClearance = 'Centerless Through-feed Grinding Clearance';
    OutputData = 'Output Data';
    HeightBetweenCenters = 'Height between centers';
    DresserHeight = 'Dresser Height';
    RAInclination = 'RA Inclination';
    DresserInclination = 'Dresser Inclination';
    RulerAngle = 'Angle of the ruler';
    GrindingRotation = 'Grinding Wheel Spindle Rotation';
    PeripheralSpeed = ' Workpiece Peripheral Speed';
    FeedSpeed = 'Workpiece Feed Speed';
    PieceQuantity = 'Piece Quantity';
    CycleTime = 'Cycle Time';
    RevolutionsNumbers = 'Number of Workpiece Revolutions';
    RemovalRate = 'Removal Rate';
    CuttingThickness = 'Cutting Thickness';
    TangentAngle = 'Tangent Angle';
    ReportName = 'Enter the report name';
  } else if (globalLanguage === 'PT') {
    DataEntry = 'Entrada de Dados';
    SaveReport = 'Salvar relatório';
    GrindingClearance = 'Vão de retificação centerless de passagem';
    OutputData = 'Dados de saída';
    HeightBetweenCenters = 'Altura entre centros';
    DresserHeight = 'Altura do dessador';
    RAInclination = 'Inclinação do RA';
    DresserInclination = 'Inclinação do dressador';
    RulerAngle = 'Ângulo da régua';
    GrindingRotation = 'Rotação do rebolo de arraste';
    PeripheralSpeed = 'Velocidade periférica da peça';
    FeedSpeed = 'Velocidade de passagem da peça';
    PieceQuantity = 'Quantidade de peça';
    CycleTime = 'Tempo de ciclo';
    RevolutionsNumbers = 'Nr. revoluções da peça';
    RemovalRate = 'Taxa de remoção';
    CuttingThickness = 'Espessura de corte';
    TangentAngle = 'Ângulo de tangência';
    ReportName = 'Insira o nome do relatório';
  } else if (globalLanguage === 'DE') {
    DataEntry = 'Dateneingabe';
    SaveReport = 'Bericht speichern';
    GrindingClearance = 'Durchlaufloses Schleifen von Schleifspalt';
    OutputData = 'Ausgabedaten';
    HeightBetweenCenters = 'Höhe zwischen den Zentren';
    DresserHeight = 'Dresser-Höhe';
    RAInclination = 'RA-Neigung';
    DresserInclination = 'Dresser-Neigung';
    RulerAngle = 'Winkel des Lineals';
    GrindingRotation = 'Rotation der Schleifscheibenspindel';
    PeripheralSpeed = 'Umfangsgeschwindigkeit des Werkstücks';
    FeedSpeed = 'Werkstück-Vorschubgeschwindigkeit';
    PieceQuantity = 'Stückmenge';
    CycleTime = 'Zykluszeit';
    RevolutionsNumbers = 'Anzahl der Werkstückumdrehungen';
    RemovalRate = 'Abtragsrate';
    CuttingThickness = 'Schnittdicke';
    TangentAngle = 'Tangentenwinkel';
    ReportName = 'Geben Sie den Berichtsnamen ein';
  }
  return {
    DataEntry,
    SaveReport,
    GrindingClearance,
    OutputData,
    HeightBetweenCenters,
    DresserHeight,
    RAInclination,
    DresserInclination,
    RulerAngle,
    GrindingRotation,
    PeripheralSpeed,
    FeedSpeed,
    PieceQuantity,
    CycleTime,
    RevolutionsNumbers,
    RemovalRate,
    CuttingThickness,
    TangentAngle,
    ReportName,
  };
}
