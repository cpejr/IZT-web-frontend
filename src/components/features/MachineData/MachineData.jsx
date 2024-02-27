import PropTypes from 'prop-types';

import { ErrorMessage } from '../../../pages/StabilityAnalysis/Styles';
import { useGlobalLanguage } from '../../../stores/globalLanguage';
import {
  CollapsableData,
  Column,
  DataColumn,
  Input,
  Label,
  Line,
} from './Styles';
import { TranslateText } from './translations';

export default function MachineData({
  collapse,
  register,
  errors,
  isProfileAnalysis,
}) {
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
        {isProfileAnalysis ? (
          <Column>
            <Line>
              <Label>{translations.quantityPieces}:</Label>
              <Input
                id="quantityPieces"
                {...register('quantityPieces', { valueAsNumber: true })}
                hasError={errors?.quantityPieces?.message}
                type="number"
                step="any"
              />
              <Label>pc/min</Label>
            </Line>
            <ErrorMessage>{errors?.quantityPieces?.message}</ErrorMessage>
            <Line>
              <Label>{translations.speedPassage}:</Label>
              <Input
                id="speedPassage"
                {...register('speedPassage', { valueAsNumber: true })}
                hasError={errors?.speedPassage?.message}
                type="number"
                step="any"
              />
              <Label>m/min</Label>
            </Line>
            <ErrorMessage>{errors?.speedPassage?.message}</ErrorMessage>
            <Line>
              <Label style={{ flexWrap: 'wrap', whiteSpace: 'normal' }}>
                {translations.speedPeripheral}:
              </Label>
              <Input
                id="speedPeripheral"
                {...register('speedPeripheral', { valueAsNumber: true })}
                hasError={errors?.speedPeripheral?.message}
                type="number"
                step="any"
              />
              <Label>mm/s</Label>
            </Line>
            <ErrorMessage>{errors?.speedPeripheral?.message}</ErrorMessage>
          </Column>
        ) : null}
      </DataColumn>
    </CollapsableData>
  );
}

MachineData.propTypes = {
  collapse: PropTypes.object.isRequired,
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  isProfileAnalysis: PropTypes.bool.isRequired,
};
