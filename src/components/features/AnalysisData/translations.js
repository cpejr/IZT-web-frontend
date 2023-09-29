// eslint-disable-next-line import/prefer-default-export
export function TranslateText({ globalLanguage }) {
  let AnalysisData;
  let rectificationProcess;
  let machine;
  let machineNumber;
  let operation;
  let department;
  let responsiblePerson;
  let Select;
  let PlungeCenterless;
  let TFCenterless;
  let RoughGrinding;
  let PRoughGrinding;
  let FinishGrinding;

  if (globalLanguage === 'EN') {
    AnalysisData = 'Analysis Data';
    rectificationProcess = 'Grinding Process';
    machine = 'Machine';
    machineNumber = 'Machine Number';
    operation = 'Operation';
    department = 'Department';
    responsiblePerson = 'Responsible';
    Select = 'Select';
    PlungeCenterless = 'Plunge Centerless';
    TFCenterless = 'Through-Feed Centerless';
    RoughGrinding = 'Rough Grinding';
    PRoughGrinding = 'Pre-Rough Grinding';
    FinishGrinding = 'Finish Grinding';
  } else if (globalLanguage === 'PT') {
    AnalysisData = 'Dados da Análise';
    rectificationProcess = 'Processo de retificação';
    machine = 'Máquina';
    machineNumber = 'Número da máquina';
    operation = 'Operação';
    department = 'Departamento';
    responsiblePerson = 'Responsável';
    Select = 'Selecionar';
    PlungeCenterless = 'Centerless de Mergulho';
    TFCenterless = 'Centerless de Passagem';
    RoughGrinding = 'Desbaste';
    PRoughGrinding = 'Pré Desbaste';
    FinishGrinding = 'Acabamento';
  } else if (globalLanguage === 'DE') {
    AnalysisData = 'Analyse-Daten';
    rectificationProcess = 'Schleifprozess';
    machine = 'Maschine';
    machineNumber = 'Maschinennummer';
    operation = 'Betrieb';
    department = 'Abteilung';
    responsiblePerson = 'Verantwortlicher';
    Select = 'Auswählen';
    PlungeCenterless = 'Eintauchen Centerless';
    TFCenterless = 'Durchlauf Centerless';
    RoughGrinding = 'Grobschleifen';
    PRoughGrinding = 'Vor-Grobschleifen';
    FinishGrinding = 'Feinschleifen';
  }
  return {
    AnalysisData,
    rectificationProcess,
    machine,
    machineNumber,
    operation,
    department,
    responsiblePerson,
    Select,
    PlungeCenterless,
    TFCenterless,
    RoughGrinding,
    PRoughGrinding,
    FinishGrinding,
  };
}
