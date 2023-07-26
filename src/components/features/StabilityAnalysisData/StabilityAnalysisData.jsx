import PropTypes from 'prop-types';

import { CollapsableData, DataColumn, Input, Label, Line } from './Styles';

export default function MachinStabilityAnalysisData({ collapse }) {
  return (
    <CollapsableData collapse={collapse}>
      <DataColumn>
        <Line>
          <Label>Produto:</Label>
          <Input string /> 
        </Line>
        <Line>
          <Label>N° do produto:</Label>
          <Input type="number" />
        </Line>
        <Line>
          <Label>Diâmetro:</Label>
          <Input width="4rem" type="number"/>
          <Label>mm</Label>
        </Line>
        <Line>
          <Label>Comprimento total:</Label>
          <Input width="4rem" type="number" />
          <Label>mm</Label>
        </Line>
        <Line>
          <Label>Comprimento eletivo:</Label>
          <Input width="4rem" type="number" />
          <Label>mm</Label>
        </Line>
        <Line>
          <Label>Sobremetal:</Label>
          <Input width="4rem" type="number" />
          <Label>mm</Label>
        </Line>
      </DataColumn>
    </CollapsableData>
  );
}

MachinStabilityAnalysisData.propTypes = {
  collapse: PropTypes.object.isRequired,
};
