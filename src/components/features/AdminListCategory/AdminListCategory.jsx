import React, { useState } from 'react';
import { CloseOutlined } from '@ant-design/icons';

import { HiSearch } from 'react-icons/hi';
import { TbPencil } from 'react-icons/tb';
import { useGetCategories } from '../../../hooks/query/categories';

import {
  Container,
  Title,
  CategoryFilterContainer,
  Text,
  SearchProduct,
  CategoryList,
  Row,
  EditButton,
  SearchIconButton,
  SearchSection,
  ModalStyle,
} from './Styles';

import ModalEditCategory from '../ModalEditCategory/ModalEditCategory';

export default function AdminListCategory() {
  const { data: categories } = useGetCategories();

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

      <CategoryList>
        {categories?.map((category) => (
          <Row key={category._id}>
            <Text>{category.name}</Text>
            <EditButton>
              <TbPencil onClick={openModalEditCategory} size={30} />
            </EditButton>
          </Row>
        ))}
      </CategoryList>

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
