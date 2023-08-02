import PropTypes from 'prop-types';

import {
  CollapsableData,
  DataColumn,
  Input,
  Label,
  Line,
  SelectInput,
} from './Styles';

export default function AnalysisData({ collapse }) {
  return (
    <CollapsableData collapse={collapse}>
      <DataColumn>
        <Line>
          <Label>Processo de retificação:</Label>
          <SelectInput>
            <option value="">Selecionar</option>
            <option value="Centerless de Mergulho">
              Centerless de Mergulho
            </option>
            <option value="Centerless de Passagem">
              Centerless de Passagem
            </option>
          </SelectInput>
        </Line>
        <Line>
          <Label>Maquina:</Label>
          <Input />
        </Line>
        <Line>
          <Label>N° da Maquina:</Label>
          <Input />
        </Line>
        <Line>
          <Label>Operação:</Label>
          <SelectInput>
            <option value="">Selecionar</option>
            <option value="Desbaste">Desbaste</option>
            <option value="Pré Desbaste">Pré Desbaste</option>
            <option value="Acabamento">Acabamento</option>
          </SelectInput>
        </Line>
        <Line>
          <Label>Departamento:</Label>
          <Input />
        </Line>
        <Line>
          <Label>Responsável:</Label>
          <Input />
        </Line>
      </DataColumn>
    </CollapsableData>
  );
}

AnalysisData.propTypes = {
  collapse: PropTypes.object.isRequired,
};
