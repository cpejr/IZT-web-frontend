import PropTypes from 'prop-types';

import { CollapsableData, DataColumn, Input, Label, Line } from './Styles';

export default function MachinProductData({ collapse }) {
  return (
    <CollapsableData collapse={collapse}>
      <DataColumn>
        <Line>
          <Label>Produto:</Label>
          <Input 
          id= 'product'
          {...register("product")}
          />
        </Line>
        <Line>
          <Label>N° do produto:</Label>
          <Input 
          id= 'productNumber'
          {...register("productNumber")}
          />
        </Line>
        <Line>
          <Label>Diâmetro:</Label>
          <Input width="4rem" 
          id= 'diameter'
          {...register("diameter")}
          />
          <Label>mm</Label>
        </Line>
        <Line>
          <Label>Comprimento total:</Label>
          <Input width="4rem"
          id= 'totalLength'
          {...register("totalLength")}
          />
          <Label>mm</Label>
        </Line>
        <Line>
          <Label>Comprimento eletivo:</Label>
          <Input width="4rem"
          id= 'electiveLength'
          {...register("electiveLength")}
          />
          <Label>mm</Label>
        </Line>
        <Line>
          <Label>Sobremetal:</Label>
          <Input width="4rem" 
          id= 'allowance'
          {...register("allowance")}
          />
          <Label>mm</Label>
        </Line>
      </DataColumn>
    </CollapsableData>
  );
}

MachinProductData.propTypes = {
  collapse: PropTypes.object.isRequired,
};
