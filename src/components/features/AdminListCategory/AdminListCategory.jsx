import React from 'react';

import { HiSearch } from 'react-icons/hi';
import { TbPencil } from 'react-icons/tb';

import {
  Container,
  Title,
  CategoryFilterContainer,
  Text,
  SearchProduct,
  ProductList,
  Row,
  EditButton,
  SearchIconButton,
  SearchSection,
} from './Styles';

export default function AdminListCategory() {
  return (
    <Container>
      <Title>Lista de categorias</Title>

      <CategoryFilterContainer>
        <SearchSection>
          <SearchIconButton>
            <HiSearch size={25} />
          </SearchIconButton>
          <SearchProduct type="SearchProduct" placeholder="Pesquisar produto" />
        </SearchSection>
      </CategoryFilterContainer>

      <ProductList>
        <Row>
          <Text>Tipo 1</Text>
          <EditButton>
            <TbPencil size={30} />
          </EditButton>
        </Row>
      </ProductList>
    </Container>
  );
}
