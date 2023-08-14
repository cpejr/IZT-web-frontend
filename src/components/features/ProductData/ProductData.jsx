import PropTypes from 'prop-types';

import { ErrorMessage } from '../../../pages/StabilityAnalysis/Styles';
import { CollapsableData, DataColumn, Input, Label, Line } from './Styles';

export default function MachinProductData({ collapse, register, errors }) {
  return (
    <CollapsableData collapse={collapse}>
      <DataColumn>
        <Line>
          <Label>Produto:</Label>
          <Input
            id="product"
            {...register('product')}
            hasError={errors?.product?.message}
          />
        </Line>
        <ErrorMessage>{errors?.product?.message}</ErrorMessage>

        <Line>
          <Label>N° do produto:</Label>
          <Input
            id="productNumber"
            {...register('productNumber', { valueAsNumber: true })}
            hasError={errors?.productNumber?.message}
            type="number"
            step="any"
          />
        </Line>
        <ErrorMessage>{errors?.productNumber?.message}</ErrorMessage>

        <Line>
          <Label>Diâmetro:</Label>
          <Input
            width="4rem"
            id="diameter"
            {...register('diameter', { valueAsNumber: true })}
            hasError={errors?.diameter?.message}
            type="number"
            step="any"
          />
          <Label>mm</Label>
        </Line>
        <ErrorMessage>{errors?.diameter?.message}</ErrorMessage>

        <Line>
          <Label>Comprimento total:</Label>
          <Input
            width="4rem"
            id="totalLength"
            {...register('totalLength', { valueAsNumber: true })}
            hasError={errors?.totalLength?.message}
            type="number"
            step="any"
          />
          <Label>mm</Label>
        </Line>
        <ErrorMessage>{errors?.totalLength?.message}</ErrorMessage>

        <Line>
          <Label>Comprimento eletivo:</Label>
          <Input
            width="4rem"
            id="electiveLength"
            {...register('electiveLength', { valueAsNumber: true })}
            hasError={errors?.electiveLength?.message}
            type="number"
            step="any"
          />
          <Label>mm</Label>
        </Line>
        <ErrorMessage>{errors?.electiveLength?.message}</ErrorMessage>

        <Line>
          <Label>Sobremetal:</Label>
          <Input
            width="4rem"
            id="allowance"
            {...register('allowance', { valueAsNumber: true })}
            hasError={errors?.allowance?.message}
            type="number"
            step="any"
          />
          <Label>mm</Label>
        </Line>
        <ErrorMessage>{errors?.allowance?.message}</ErrorMessage>
      </DataColumn>
    </CollapsableData>
  );
}

MachinProductData.propTypes = {
  collapse: PropTypes.object.isRequired,
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};
