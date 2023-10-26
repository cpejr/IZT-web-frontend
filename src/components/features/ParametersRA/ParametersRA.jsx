import PropTypes from 'prop-types';

import { ErrorMessage } from '../../../pages/StabilityAnalysis/Styles';
import { useGlobalLanguage } from '../../../stores/globalLanguage';
import { CollapsableData, DataColumn, Input, Label, Line } from './Styles';
import { TranslateText } from './translations';

export default function ParametersRA({ collapse, register, errors }) {
  // Translation
  const { globalLanguage } = useGlobalLanguage();
  const translations = TranslateText({ globalLanguage });
  return (
    <CollapsableData collapse={collapse}>
      <DataColumn>
        <Line>
          <Label>{translations.hwCenterHeight}:</Label>
          <Input
            id="hwCenterHeight"
            {...register('hwCenterHeight', { valueAsNumber: true })}
            hasError={errors?.hwCenterHeight?.message}
            type="number"
            step="any"
          />
          <Label>mm</Label>
        </Line>
        <ErrorMessage>{errors?.hwCenterHeight?.message}</ErrorMessage>

        <Line>
          <Label>{translations.raInclination} :</Label>
          <Input
            id="raInclination"
            {...register('raInclination', { valueAsNumber: true })}
            hasError={errors?.raInclination?.message}
            type="number"
            step="any"
          />
          <Label>mm</Label>
        </Line>
        <ErrorMessage>{errors?.raInclination?.message}</ErrorMessage>

        <Line>
          <Label>{translations.raDresserInclination}:</Label>
          <Input
            id="raDresserInclination"
            {...register('raDresserInclination', { valueAsNumber: true })}
            hasError={errors?.raDresserInclination?.message}
            type="number"
            step="any"
          />
          <Label>°</Label>
        </Line>
        <ErrorMessage>{errors?.raDresserInclination?.message}</ErrorMessage>

        <Line>
          <Label>{translations.dresserHeight}:</Label>
          <Input
            id="dresserHeight"
            {...register('dresserHeight', { valueAsNumber: true })}
            hasError={errors?.dresserHeight?.message}
            type="number"
            step="any"
          />
          <Label>mm</Label>
        </Line>
        <ErrorMessage>{errors?.dresserHeight?.message}</ErrorMessage>

        <Line>
          <Label>{translations.dresserPosition}:</Label>
          <Input
            id="dresserPosition"
            {...register('dresserPosition')}
            hasError={errors?.dresserPosition?.message}
          />
        </Line>
        <ErrorMessage>{errors?.dresserPosition?.message}</ErrorMessage>
        <Line>
          <Label>{translations.raRotationnr}:</Label>
          <Input
            id="raRotationnr"
            {...register('raRotationnr', { valueAsNumber: true })}
            hasError={errors?.raRotationnr?.message}
            type="number"
            // step="any"
          />
          <Label>rpm</Label>
        </Line>
        <ErrorMessage>{errors?.raRotationnr?.message}</ErrorMessage>
        <Line>
          <Label>{translations.angleTangency}:</Label>
          <Input
            id="angleTangency"
            {...register('angleTangency', { valueAsNumber: true })}
            hasError={errors?.angleTangency?.message}
            type="number"
            step="any"
          />
          <Label>°</Label>
        </Line>
        <ErrorMessage>{errors?.angleTangency?.message}</ErrorMessage>
        <Line>
          <Label>{translations.angleRuler}:</Label>
          <Input
            id="angleRuler"
            {...register('angleRuler', { valueAsNumber: true })}
            hasError={errors?.angleRuler?.message}
            type="number"
            step="any"
          />
          <Label>°</Label>
        </Line>
        <ErrorMessage>{errors?.angleRuler?.message}</ErrorMessage>
        <Line>
          <Label>{translations.heightCenters}:</Label>
          <Input
            id="heightCenters"
            {...register('heightCenters', { valueAsNumber: true })}
            hasError={errors?.heightCenters?.message}
            type="number"
            step="any"
          />
          <Label>mm</Label>
        </Line>
        <ErrorMessage>{errors?.heightCenters?.message}</ErrorMessage>
      </DataColumn>
    </CollapsableData>
  );
}

ParametersRA.propTypes = {
  collapse: PropTypes.object.isRequired,
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};
