import PropTypes from 'prop-types';

import { ErrorMessage } from '../../../pages/StabilityAnalysis/Styles';
import { useGlobalLanguage } from '../../../stores/globalLanguage';
import { CollapsableData, DataColumn, Input, Label, Line } from './Styles';
import { TranslateText } from './translations';

export default function MachinProductData({ collapse, register, errors }) {
  // Translation
  const { globalLanguage } = useGlobalLanguage();
  const translations = TranslateText({ globalLanguage });
  return (
    <CollapsableData collapse={collapse}>
      <DataColumn>
        <Line>
          <Label>{translations.product}:</Label>
          <Input
            id="product"
            {...register('product')}
            hasError={errors?.product?.message}
          />
        </Line>
        <ErrorMessage>{errors?.product?.message}</ErrorMessage>

        <Line>
          <Label>{translations.productNumber}:</Label>
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
          <Label>{translations.diameter}:</Label>
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
          <Label>{translations.totalLength}:</Label>
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
          <Label>{translations.electiveLength}:</Label>
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
          <Label>{translations.allowance}:</Label>
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
