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
  SearchSection,
  EditButton,
  SearchIconButton,
} from './Styles';

export default function AdminListProduct() {
  return (
    <Container>
      <Title>Lista de produtos</Title>

      <CategoryFilterContainer>
        <Subsection>
          <Text>Filtrar por categoria:</Text>
          <TypeFilter>TypeFilter</TypeFilter>
        </Subsection>

        <SearchSection>
          <SearchIconButton>
            <HiSearch size={25} />
          </SearchIconButton>
          <SearchProduct type="SearchProduct" placeholder="Pesquisar produto" />
        </SearchSection>
      </CategoryFilterContainer>

      <ProductList>
        <Row>
          <Text>Produto 1</Text>
          <Text>Tipo 1</Text>
          <EditButton>
            <TbPencil size={30} />
          </EditButton>
        </Row>
      </ProductList>
    </Container>
  );
}
