import React, { useState } from 'react';
import { CloseOutlined } from '@ant-design/icons';

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
  ModalStyle,
} from './Styles';

import ModalEditCategory from '../ModalEditCategory/ModalEditCategory';

export default function AdminListCategory() {
  const modalButton = {
    closeIcon: <CloseOutlined style={{ color: 'white' }} />,
  };

  const [modalEditCategory, setModalEditCategory] = useState(false);

  const openModalEditCategory = (e) => {
    e.preventDefault();
    setModalEditCategory(true);
  };

  const closeModalEditCategory = (e) => {
    e.preventDefault();
    setModalEditCategory(false);
  };

  return (
    <Container>
      <Title>Lista de categorias</Title>

      <CategoryFilterContainer>
        <SearchSection>
          <SearchIconButton>
            <HiSearch size={25} />
          </SearchIconButton>
          <SearchProduct
            type="SearchProduct"
            placeholder="Pesquisar categoria"
          />
        </SearchSection>
      </CategoryFilterContainer>

      <ProductList>
        <Row>
          <Text>Tipo 1</Text>
          <EditButton onClick={openModalEditCategory}>
            <TbPencil size={30} />
          </EditButton>
        </Row>
      </ProductList>

      <ModalStyle
        open={modalEditCategory}
        onCancel={closeModalEditCategory}
        width={500}
        height={250}
        padding={0}
        footer={null}
        closeIcon={modalButton.closeIcon}
        bodyStyle={{
          alignItems: 'center',
          justifyContent: 'center',
          background: '#123645',
          color: 'white',
          padding: 0,
          borderRadius: 'none',
        }}
        centered
        destroyOnClose
      >
        <ModalEditCategory />
      </ModalStyle>
    </Container>
  );
}
