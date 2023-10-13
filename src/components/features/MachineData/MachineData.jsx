import PropTypes from 'prop-types';

import { ErrorMessage } from '../../../pages/StabilityAnalysis/Styles';
import { useGlobalLanguage } from '../../../stores/globalLanguage';
import { CollapsableData, DataColumn, Input, Label, Line } from './Styles';
import { TranslateText } from './translations';

export default function MachineData({ collapse, register, errors }) {
  // Translation
  const { globalLanguage } = useGlobalLanguage();
  const translations = TranslateText({ globalLanguage });
  return (
    <CollapsableData collapse={collapse}>
      <DataColumn>
        <Line>
          <Label>{translations.rcMaxDiameter} (máx):</Label>
          <Input
            id="rcMaxDiameter"
            {...register('rcMaxDiameter', { valueAsNumber: true })}
            hasError={errors?.rcMaxDiameter?.message}
            type="number"
            step="any"
          />
          <Label>mm</Label>
        </Line>
        <ErrorMessage>{errors?.rcMaxDiameter?.message}</ErrorMessage>

        <Line>
          <Label>{translations.rcMinDiameter} (min):</Label>
          <Input
            id="rcMinDiameter"
            {...register('rcMinDiameter', { valueAsNumber: true })}
            hasError={errors?.rcMinDiameter?.message}
            type="number"
            step="any"
          />
          <Label>mm</Label>
        </Line>
        <ErrorMessage>{errors?.rcMinDiameter?.message}</ErrorMessage>

        <Line>
          <Label>{translations.raDiameter}:</Label>
          <Input
            id="raDiameter"
            {...register('raDiameter', { valueAsNumber: true })}
            hasError={errors?.raDiameter?.message}
            type="number"
            step="any"
          />
          <Label>mm</Label>
        </Line>
        <ErrorMessage>{errors?.raDiameter?.message}</ErrorMessage>

        <Line>
          <Label>{translations.rcLength}:</Label>
          <Input
            id="rcLength"
            {...register('rcLength', { valueAsNumber: true })}
            hasError={errors?.rcLength?.message}
            type="number"
            step="any"
          />
          <Label>mm</Label>
        </Line>
        <ErrorMessage>{errors?.rcLength?.message}</ErrorMessage>

        <Line>
          <Label>{translations.raLength}:</Label>
          <Input
            id="raLength"
            {...register('raLength', { valueAsNumber: true })}
            hasError={errors?.raLength?.message}
            type="number"
            step="any"
          />
          <Label>mm</Label>
        </Line>
        <ErrorMessage>{errors?.raLength?.message}</ErrorMessage>

        <Line>
          <Label>{translations.rcEffectiveLength}:</Label>
          <Input
            id="rcEffectiveLength"
            {...register('rcEffectiveLength', { valueAsNumber: true })}
            hasError={errors?.rcEffectiveLength?.message}
            type="number"
            step="any"
          />
          <Label>mm</Label>
        </Line>
        <ErrorMessage>{errors?.rcEffectiveLength?.message}</ErrorMessage>

        <Line>
          <Label>{translations.rcRotation}</Label>
          <Input
            id="rcRotation"
            {...register('rcRotation', { valueAsNumber: true })}
            hasError={errors?.rcRotation?.message}
            type="number"
            step="any"
          />
          <Label>mm</Label>
        </Line>
        <ErrorMessage>{errors?.rcRotation?.message}</ErrorMessage>

        <Line>
          <Label>{translations.raRotation}:</Label>
          <Input
            id="raRotation"
            {...register('raRotation', { valueAsNumber: true })}
            hasError={errors?.raRotation?.message}
            type="number"
            step="any"
          />
          <Label>mm</Label>
        </Line>
        <ErrorMessage>{errors?.raRotation?.message}</ErrorMessage>

        <Line>
          <Label>{translations.rwInclination}:</Label>
          <Input
            id="rwInclination"
            {...register('rwInclination', { valueAsNumber: true })}
            hasError={errors?.rwInclination?.message}
            type="number"
            step="any"
          />
          <Label>°</Label>
        </Line>
        <ErrorMessage>{errors?.rwInclination?.message}</ErrorMessage>
      </DataColumn>
    </CollapsableData>
  );
}

MachineData.propTypes = {
  collapse: PropTypes.object.isRequired,
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};
