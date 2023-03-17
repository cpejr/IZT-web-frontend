/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { CloseOutlined } from '@ant-design/icons';

import { HiSearch } from 'react-icons/hi';
import { TbPencil } from 'react-icons/tb';
import { useSearchProductByName } from '../../../hooks/query/products';
import { useGetCategories } from '../../../hooks/query/categories';
import {
  Container,
  Title,
  CategoryFilterContainer,
  Subsection,
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
import useDebounce from '../../../hooks/useDebounce';
import { Select } from '../../common';

export default function AdminListProduct() {
  const [name, setName] = useState('');
  const { data: categories } = useGetCategories();

  const [selectedCategory, setSelectedCategory] = useState({});

  console.log(selectedCategory);

  const debouncedName = useDebounce(name);

  const { data: products } = useSearchProductByName({
    name: debouncedName,
    category: selectedCategory?._id,
  });

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
          <Select
            standart="Categoria"
            data={categories}
            getValue={setSelectedCategory}
            maxWidth="100%"
          />
        </Subsection>

        <SearchSection>
          <SearchIconButton>
            <HiSearch size={25} />
          </SearchIconButton>
          <SearchProduct
            onChange={(e) => setName(e.target.value)}
            placeholder="Pesquisar produto"
          />
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
