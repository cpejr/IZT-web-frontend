/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { CloseOutlined } from '@ant-design/icons';

import { HiSearch } from 'react-icons/hi';
import { TbPencil } from 'react-icons/tb';
import { useGetProducts } from '../../../hooks/query/products';

import {
  Container,
  Title,
  CategoryFilterContainer,
  Subsection,
  TypeFilter,
  Text,
  SearchProduct,
  ProductList,
  StyledLink,
  Row,
  SearchSection,
  EditButton,
  SearchIconButton,
  ModalStyle,
} from './Styles';

import ModalEditProduct from '../ModalEditProduct/ModalEditProduct';

export default function AdminListProduct() {
  const { data: products } = useGetProducts();

  const modalButton = {
    closeIcon: <CloseOutlined style={{ color: 'white' }} />,
  };

  const [modalEditProduct, setModalEditProduct] = useState(false);

  const openModalEditProduct = (e) => {
    e.preventDefault();
    setModalEditProduct(true);
  };

  const closeModalEditProduct = (e) => {
    e.preventDefault();
    setModalEditProduct(false);
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleWindowResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  const breakpoint = 700;

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
        {products?.map((product) => (
          <Row key={product._id}>
            <Text>{product.name}</Text>
            <Text>{product.category.name}</Text>

            {windowWidth <= breakpoint ? (
              <StyledLink to="/administrador/editar-produto">
                <TbPencil size={30} />
              </StyledLink>
            ) : (
              <EditButton>
                <TbPencil onClick={openModalEditProduct} size={30} />
              </EditButton>
            )}
          </Row>
        ))}
      </ProductList>

      <ModalStyle
        open={modalEditProduct}
        onCancel={closeModalEditProduct}
        width={1100}
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
        <ModalEditProduct />
      </ModalStyle>
    </Container>
  );
}
