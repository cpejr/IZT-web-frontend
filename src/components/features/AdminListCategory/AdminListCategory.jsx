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
  Button,
  SearchIconButton,
  SearchSection,
} from './Styles';

export default function AdminListCategory() {
  return (
    <Container>
      <Title>Lista de categorias</Title>

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
          <Button>
            <TbPencil size={25} />
          </Button>
        </Row>
      </ProductList>
    </Container>
  );
}
