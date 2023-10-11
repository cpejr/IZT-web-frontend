// eslint-disable-next-line import/prefer-default-export
export function TranslateText({ globalLanguage }) {
  let analysisData;
  let rectificationProcess;
  let machine;
  let machineNumber;
  let operation;
  let department;
  let responsiblePerson;
  let select;
  let plungeCenterless;
  let tFCenterless;
  let roughGrinding;
  let pRoughGrinding;
  let finishGrinding;

  if (globalLanguage === 'EN') {
    analysisData = 'Analysis Data';
    rectificationProcess = 'Grinding Process';
    machine = 'Machine';
    machineNumber = 'Machine Number';
    operation = 'Operation';
    department = 'Department';
    responsiblePerson = 'Responsible';
    select = 'Select';
    plungeCenterless = 'Plunge Centerless';
    tFCenterless = 'Through-Feed Centerless';
    roughGrinding = 'Rough Grinding';
    pRoughGrinding = 'Pre-Rough Grinding';
    finishGrinding = 'Finish Grinding';
  } else if (globalLanguage === 'PT') {
    analysisData = 'Dados da Análise';
    rectificationProcess = 'Processo de retificação';
    machine = 'Máquina';
    machineNumber = 'Número da máquina';
    operation = 'Operação';
    department = 'Departamento';
    responsiblePerson = 'Responsável';
    select = 'Selecionar';
    plungeCenterless = 'Centerless de Mergulho';
    tFCenterless = 'Centerless de Passagem';
    roughGrinding = 'Desbaste';
    pRoughGrinding = 'Pré Desbaste';
    finishGrinding = 'Acabamento';
  } else if (globalLanguage === 'DE') {
    analysisData = 'Analyse-Daten';
    rectificationProcess = 'Schleifprozess';
    machine = 'Maschine';
    machineNumber = 'Maschinennummer';
    operation = 'Betrieb';
    department = 'Abteilung';
    responsiblePerson = 'Verantwortlicher';
    select = 'Auswählen';
    plungeCenterless = 'Eintauchen Centerless';
    tFCenterless = 'Durchlauf Centerless';
    roughGrinding = 'Grobschleifen';
    pRoughGrinding = 'Vor-Grobschleifen';
    finishGrinding = 'Feinschleifen';
  }
  return {
    analysisData,
    rectificationProcess,
    machine,
    machineNumber,
    operation,
    department,
    responsiblePerson,
    select,
    plungeCenterless,
    tFCenterless,
    roughGrinding,
    pRoughGrinding,
    finishGrinding,
  };
}
