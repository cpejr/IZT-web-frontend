import React from 'react';

import {
  Container,
  ProductDetails,
  BudgetForm,
  ProcessSteps,
} from '../Product/Styles';

function Product() {
  return (
    <Container>
      <ProductDetails>Product Details</ProductDetails>
      <BudgetForm>Budget Form</BudgetForm>
      <ProcessSteps>Process Steps</ProcessSteps>
    </Container>
  );
}

export default Product;
