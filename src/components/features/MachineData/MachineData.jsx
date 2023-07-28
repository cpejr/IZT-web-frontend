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
          />
          <Label>mm</Label>
        </Line>
        <Line>
          <Label>Diâmetro do RC (min):</Label>
          <Input 
          id= 'rcMinDiameter'
          {...register("rcMinDiameter")}
          />
          <Label>mm</Label>
        </Line>
        <Line>
          <Label>Diâmetro do RA:</Label>
          <Input 
          id= 'raDiameter'
          {...register("raDiameter")}
          />
          <Label>mm</Label>
        </Line>
        <Line>
          <Label>Comprimento RC:</Label>
          <Input 
          id= 'rcLength'
          {...register("rcLength")}
          />
          <Label>mm</Label>
        </Line>
        <Line>
          <Label>Comprimento RA:</Label>
          <Input 
          id= 'raLength'
          {...register("raLength")}
          />
          <Label>mm</Label>
        </Line>
        <Line>
          <Label>Comprimento efetivo RC:</Label>
          <Input 
          id= 'rcEffectiveLength'
          {...register("rcEffectiveLength")}
          />
          <Label>mm</Label>
        </Line>
        <Line>
          <Label>Rotação do RC</Label>
          <Input 
          id= 'rcRotation'
          {...register("rcRotation")}
          />
          <Label>mm</Label>
        </Line>
        <Line>
          <Label>Rotação do RA:</Label>
          <Input 
          id= 'raRotation'
          {...register("raRotation")}
          />
          <Label>mm</Label>
        </Line>
        <Line>
          <Label>Inclinação RW:</Label>
          <Input 
          id= 'rwInclination'
          {...register("rwInclination")}
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
