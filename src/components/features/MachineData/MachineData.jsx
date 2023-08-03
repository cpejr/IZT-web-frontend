import PropTypes from 'prop-types';

import { ErrorMessage } from '../../../pages/StabilityAnalysis/Styles';
import { CollapsableData, DataColumn, Input, Label, Line } from './Styles';

export default function MachineData({ collapse, register, errors }) {
  return (
    <CollapsableData collapse={collapse}>
      <DataColumn>
        <Line>
          <Label>Diâmetro do RC (máx):</Label>
          <Input
            id="rcMaxDiameter"
            {...register('rcMaxDiameter', { valueAsNumber: true })} 
            type="number"
            step="any"
          />
          <Label>mm</Label>
        </Line>
        <ErrorMessage>{errors?.rcMaxDiameter?.message}</ErrorMessage>

        <Line>
          <Label>Diâmetro do RC (min):</Label>
          <Input
            id="rcMinDiameter"
            {...register('rcMinDiameter', { valueAsNumber: true })} 
            type="number"
            step="any"
          />
          <Label>mm</Label>
        </Line>
        <ErrorMessage>{errors?.rcMinDiameter?.message}</ErrorMessage>

        <Line>
          <Label>Diâmetro do RA:</Label>
          <Input
            id="raDiameter"
            {...register('raDiameter', { valueAsNumber: true })} 
            type="number"
            step="any"
          />
          <Label>mm</Label>
        </Line>
        <ErrorMessage>{errors?.raDiameter?.message}</ErrorMessage>

        <Line>
          <Label>Comprimento RC:</Label>
          <Input
            id="rcLength"
            {...register('rcLength', { valueAsNumber: true })} 
            type="number"
            step="any"
          />
          <Label>mm</Label>
        </Line>
        <ErrorMessage>{errors?.rcLength?.message}</ErrorMessage>

        <Line>
          <Label>Comprimento RA:</Label>
          <Input
            id="raLength"
            {...register('raLength', { valueAsNumber: true })} 
            type="number"
            step="any"
          />
          <Label>mm</Label>
        </Line>
        <ErrorMessage>{errors?.raLength?.message}</ErrorMessage>

        <Line>
          <Label>Comprimento efetivo RC:</Label>
          <Input
            id="rcEffectiveLength"
            {...register('rcEffectiveLength', { valueAsNumber: true })} 
            type="number"
            step="any"
          />
          <Label>mm</Label>
        </Line>
        <ErrorMessage>{errors?.rcEffectiveLength?.message}</ErrorMessage>

        <Line>
          <Label>Rotação do RC</Label>
          <Input
            id="rcRotation"
            {...register('rcRotation', { valueAsNumber: true })} 
            type="number"
            step="any"
          />
          <Label>mm</Label>
        </Line>
        <ErrorMessage>{errors?.rcRotation?.message}</ErrorMessage>

        <Line>
          <Label>Rotação do RA:</Label>
          <Input
            id="raRotation"
            {...register('raRotation', { valueAsNumber: true })} 
            type="number"
            step="any"
          />
          <Label>mm</Label>
        </Line>
        <ErrorMessage>{errors?.raRotation?.message}</ErrorMessage>

        <Line>
          <Label>Inclinação RW:</Label>
          <Input
            id="rwInclination"
            {...register('rwInclination', { valueAsNumber: true })} 
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
