import PropTypes from 'prop-types';

import {
  Button,
  CollapsableData,
  DataColumn,
  Input,
  Label,
  Line,
} from './Styles';

export default function MachinProductData({ collapse }) {
  return (
    <CollapsableData collapse={collapse}>
      <DataColumn>
        <Line>
          <Label>Produto:</Label>
          <Input />
        </Line>
        <Line>
          <Label>N° do produto:</Label>
          <Input />
        </Line>
        <Line>
          <Label>Diâmetro:</Label>
          <Input />
          <Label>mm</Label>
        </Line>
        <Line>
          <Label>Comprimento total:</Label>
          <Input />
          <Label>mm</Label>
        </Line>
        <Line>
          <Label>Comprimento eletivo:</Label>
          <Input />
          <Label>mm</Label>
        </Line>
        <Line>
          <Label>Sobremetal:</Label>
          <Input />
          <Label>mm</Label>
        </Line>
      </DataColumn>
      <Button>Salvar</Button>
    </CollapsableData>
  );
}

MachinProductData.propTypes = {
  collapse: PropTypes.object.isRequired,
};
