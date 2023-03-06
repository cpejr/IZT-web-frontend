import React from 'react';

import { HiSearch } from 'react-icons/hi';
import { TbPencil } from 'react-icons/tb';

import {
  Container,
  Title,
  CategoryFilterContainer,
  Subsection,
  TypeFilter,
  Text,
  SearchProduct,
  ProductList,
  Row,
  EditButton,
} from './Styles';

export default function AdminList() {
  return (
    <Container>
      <Title>Lista de produtos</Title>

      <CategoryFilterContainer>
        <Subsection>
          <Text>Filtrar por categoria:</Text>
          <TypeFilter>TypeFilter</TypeFilter>
        </Subsection>

        <SearchProduct type="SearchProduct" placeholder="Pesquisar produto">
          <HiSearch size={25} />
        </SearchProduct>
      </CategoryFilterContainer>

      <ProductList>
        <Row>
          <Text>Produto 1</Text>
          <Text>Tipo 1</Text>
          <EditButton>
            <TbPencil size={25} />
          </EditButton>
        </Row>
      </ProductList>
    </Container>
  );
}
