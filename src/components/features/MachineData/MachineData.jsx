import PropTypes from 'prop-types';

import { CollapsableData, DataColumn, Input, Label, Line } from './Styles';

export default function MachineData({ collapse }) {
  return (
    <CollapsableData collapse={collapse}>
      <DataColumn>
        <Line>
          <Label>Diâmetro do RC (máx):</Label>
          <Input 
          id= 'rcMaxDiameter'
          {...register("rcMaxDiameter")}
          type='number'
          step="any"
          />
          <Label>mm</Label>
        </Line>
        <Line>
          <Label>Diâmetro do RC (min):</Label>
          <Input 
          id= 'rcMinDiameter'
          {...register("rcMinDiameter")}
          type='number'
          step="any"
          />
          <Label>mm</Label>
        </Line>
        <Line>
          <Label>Diâmetro do RA:</Label>
          <Input 
          id= 'raDiameter'
          {...register("raDiameter")}
          type='number'
          step="any"
          />
          <Label>mm</Label>
        </Line>
        <Line>
          <Label>Comprimento RC:</Label>
          <Input 
          id= 'rcLength'
          {...register("rcLength")}
          type='number'
          step="any"
          />
          <Label>mm</Label>
        </Line>
        <Line>
          <Label>Comprimento RA:</Label>
          <Input 
          id= 'raLength'
          {...register("raLength")}
          type='number'
          step="any"
          />
          <Label>mm</Label>
        </Line>
        <Line>
          <Label>Comprimento efetivo RC:</Label>
          <Input 
          id= 'rcEffectiveLength'
          {...register("rcEffectiveLength")}
          type='number'
          step="any"
          />
          <Label>mm</Label>
        </Line>
        <Line>
          <Label>Rotação do RC</Label>
          <Input 
          id= 'rcRotation'
          {...register("rcRotation")}
          type='number'
          step="any"
          />
          <Label>mm</Label>
        </Line>
        <Line>
          <Label>Rotação do RA:</Label>
          <Input 
          id= 'raRotation'
          {...register("raRotation")}
          type='number'
          step="any"
          />
          <Label>mm</Label>
        </Line>
        <Line>
          <Label>Inclinação RW:</Label>
          <Input 
          id= 'rwInclination'
          {...register("rwInclination")}
          type='number'
          step="any"
          />
          <Label>°</Label>
        </Line>
      </DataColumn>
    </CollapsableData>
  );
}

MachineData.propTypes = {
  collapse: PropTypes.object.isRequired,
};
