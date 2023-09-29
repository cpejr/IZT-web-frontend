import PropTypes from 'prop-types';

import { ErrorMessage } from '../../../pages/StabilityAnalysis/Styles';
import { useGlobalLanguage } from '../../../stores/globalLanguage';
import {
  CollapsableData,
  DataColumn,
  Input,
  Label,
  Line,
  SelectInput,
} from './Styles';
import { TranslateText } from './translations';

export default function AnalysisData({ collapse, register, errors }) {
  // Translation
  const { globalLanguage } = useGlobalLanguage();
  const translations = TranslateText({ globalLanguage });

  return (
    <CollapsableData collapse={collapse}>
      <DataColumn>
        <Line>
          <Label>{translations.rectificationProcess}:</Label>
          <SelectInput
            id="rectificationProcess"
            {...register('rectificationProcess')}
            hasError={errors?.rectificationProcess?.message}
          >
            <option value="">{translations.Select}</option>
            <option value="Centerless de Mergulho">
              {translations.PlungeCenterless}
            </option>
            <option value="Centerless de Passagem">
              {translations.TFCenterless}
            </option>
          </SelectInput>
        </Line>
        <ErrorMessage>{errors?.rectificationProcess?.message}</ErrorMessage>

        <Line>
          <Label>{translations.machine}:</Label>
          <Input
            id="machine"
            {...register('machine')}
            hasError={errors?.machine?.message}
          />
        </Line>
        <ErrorMessage>{errors?.machine?.message}</ErrorMessage>

        <Line>
          <Label>{translations.machineNumber}:</Label>
          <Input
            id="machineNumber"
            {...register('machineNumber', { valueAsNumber: true })}
            hasError={errors?.machineNumber?.message}
            type="number"
            step="any"
          />
        </Line>
        <ErrorMessage>{errors?.machineNumber?.message}</ErrorMessage>

        <Line>
          <Label>{translations.operation}:</Label>
          <SelectInput
            id="operation"
            {...register('operation')}
            hasError={errors?.operation?.message}
          >
            <option value="">{translations.Select}</option>
            <option value="Desbaste">{translations.RoughGrinding}</option>
            <option value="Pré Desbaste">{translations.PRoughGrinding}</option>
            <option value="Acabamento">{translations.FinishGrinding}</option>
          </SelectInput>
        </Line>
        <ErrorMessage>{errors?.operation?.message}</ErrorMessage>

        <Line>
          <Label>{translations.department}:</Label>
          <Input
            id="department"
            {...register('department')}
            hasError={errors?.department?.message}
          />
        </Line>
        <ErrorMessage>{errors?.department?.message}</ErrorMessage>

        <Line>
          <Label>{translations.responsiblePerson}:</Label>
          <Input
            id="responsiblePerson"
            {...register('responsiblePerson')}
            hasError={errors?.responsiblePerson?.message}
          />
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
