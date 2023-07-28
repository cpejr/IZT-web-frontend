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
          <SelectInput
          id= 'rectificationProcess'
          {...register("rectificationProcess")}
          >
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
          <Input 
          id= 'machine'
          {...register("machine")}
          />
        </Line>
        <Line>
          <Label>N° da Maquina:</Label>
          <Input 
          id= 'machineNumber'
          {...register("machineNumber")}
          />
        </Line>
        <Line>
          <Label>Operação:</Label>
          <SelectInput
          id= 'operation'
          {...register("operation")}
          >
            <option value="">Selecionar</option>
            <option value="Desbaste">Desbaste</option>
            <option value="Pré Desbaste">Pré Desbaste</option>
            <option value="Acabamento">Acabamento</option>
          </SelectInput>
        </Line>
        <Line>
          <Label>Departamento:</Label>
          <Input 
          id= 'department'
          {...register("department")}
          />
        </Line>
        <Line>
          <Label>Responsável:</Label>
          <Input 
          id= 'responsiblePerson'
          {...register("responsiblePerson")}
          />
        </Line>
      </DataColumn>
    </CollapsableData>
  );
}

AnalysisData.propTypes = {
  collapse: PropTypes.object.isRequired,
};
