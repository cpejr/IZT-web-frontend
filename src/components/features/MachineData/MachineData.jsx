import PropTypes from 'prop-types';

import {
  Button,
  CollapsableData,
  DataColumn,
  Input,
  Label,
  Line,
} from './Styles';

export default function MachineData({ collapse }) {
  return (
    <CollapsableData collapse={collapse}>
      <DataColumn>
        <Line>
          <Label>Diâmetro do RC (máx):</Label>
          <Input />
          <Label>mm</Label>
        </Line>
        <Line>
          <Label>Diâmetro do RC (min):</Label>
          <Input />
          <Label>mm</Label>
        </Line>
        <Line>
          <Label>Diâmetro do RA:</Label>
          <Input />
          <Label>mm</Label>
        </Line>
        <Line>
          <Label>Comprimento RC:</Label>
          <Input />
          <Label>mm</Label>
        </Line>
        <Line>
          <Label>Comprimento RA:</Label>
          <Input />
          <Label>mm</Label>
        </Line>
        <Line>
          <Label>Comprimento efetivo RC:</Label>
          <Input />
          <Label>mm</Label>
        </Line>
        <Line>
          <Label>Rotação do RC</Label>
          <Input />
          <Label>mm</Label>
        </Line>
        <Line>
          <Label>Rotação do RA:</Label>
          <Input />
          <Label>mm</Label>
        </Line>
        <Line>
          <Label>Inclinação RW:</Label>
          <Input />
          <Label>°</Label>
        </Line>
      </DataColumn>
      <Button>Salvar</Button>
    </CollapsableData>
  );
}

MachineData.propTypes = {
  collapse: PropTypes.bool.isRequired,
};
