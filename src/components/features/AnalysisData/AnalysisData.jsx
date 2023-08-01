import PropTypes from 'prop-types';

import { ErrorMessage } from '../../../pages/StabilityAnalysis/Styles';
import {
  CollapsableData,
  DataColumn,
  Input,
  Label,
  Line,
  SelectInput,
} from './Styles';

export default function AnalysisData({ collapse, register, errors }) {
  return (
    <CollapsableData collapse={collapse}>
      <DataColumn>
        <Line>
          <Label>Processo de retificação:</Label>
          <SelectInput
            id="rectificationProcess"
            {...register('rectificationProcess')}
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
        <ErrorMessage>{errors?.rectificationProcess?.message}</ErrorMessage>

        <Line>
          <Label>Maquina:</Label>
          <Input id="machine" {...register('machine')} />
        </Line>
        <ErrorMessage>{errors?.machine?.message}</ErrorMessage>

        <Line>
          <Label>N° da Maquina:</Label>
          <Input
            id="machineNumber"
            {...register('machineNumber')}
            type="number"
            step="any"
          />
        </Line>
        <ErrorMessage>{errors?.machineNumber?.message}</ErrorMessage>

        <Line>
          <Label>Operação:</Label>
          <SelectInput id="operation" {...register('operation')}>
            <option value="">Selecionar</option>
            <option value="Desbaste">Desbaste</option>
            <option value="Pré Desbaste">Pré Desbaste</option>
            <option value="Acabamento">Acabamento</option>
          </SelectInput>
        </Line>
        <ErrorMessage>{errors?.operation?.message}</ErrorMessage>

        <Line>
          <Label>Departamento:</Label>
          <Input id="department" {...register('department')} />
        </Line>
        <ErrorMessage>{errors?.department?.message}</ErrorMessage>

        <Line>
          <Label>Responsável:</Label>
          <Input id="responsiblePerson" {...register('responsiblePerson')} />
        </Line>
        <ErrorMessage>{errors?.responsiblePerson?.message}</ErrorMessage>
      </DataColumn>
    </CollapsableData>
  );
}

AnalysisData.propTypes = {
  collapse: PropTypes.object.isRequired,
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};
