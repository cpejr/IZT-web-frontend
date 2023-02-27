import React from 'react';
import { BudgetForm } from '../../components/features';
import { Container, ProductDetails, ProcessSteps } from './Styles';

function Product() {
  return (
    <Container>
      <ProductDetails>Product Details</ProductDetails>
      <BudgetForm />
      <ProcessSteps>Process Steps</ProcessSteps>
    </Container>
  );
}

export default Product;
