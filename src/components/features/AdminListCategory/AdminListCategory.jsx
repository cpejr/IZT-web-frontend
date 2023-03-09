import React, { useState } from 'react';
import { Modal } from 'antd';

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

import ModalEditCategory from '../ModalCreateCategory/ModalCreateCategory';

export default function AdminListCategory() {
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
          <SearchProduct type="SearchProduct" placeholder="Pesquisar produto" />
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

      <Modal
        open={modalEditCategory}
        onCancel={closeModalEditCategory}
        footer={null}
        bodyStyle={{
          alignItems: 'center',
          justifyContent: 'center',
          background: '#123645',
          padding: 0,
          width: '500px',
          height: '250px',
          borderRadius: 'none',
        }}
        centered
        destroyOnClose
      >
        <ModalEditCategory />
      </Modal>
    </Container>
  );
}
