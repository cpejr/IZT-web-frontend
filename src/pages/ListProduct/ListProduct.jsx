import { useState } from 'react';

import { CloseOutlined } from '@ant-design/icons';
import { HiSearch } from 'react-icons/hi';
import { TbPencil } from 'react-icons/tb';
import { useMediaQuery } from 'react-responsive';

import { Select } from '../../components/common';
import { ModalEditProduct } from '../../components/features';
import { useGetCategories } from '../../hooks/query/categories';
import { useSearchProductByName } from '../../hooks/query/products';
import useDebounce from '../../hooks/useDebounce';
import {
  Container,
  Title,
  CategoryFilterContainer,
  Subsection,
  Text,
  CategoryText,
  SearchProduct,
  ProductList,
  StyledLink,
  Row,
  SearchSection,
  EditButton,
  SearchIconButton,
  ModalStyle,
} from './Styles';

export default function ListProduct() {
  const isSmallScreen = useMediaQuery({ maxWidth: 700 });
  const [selectedCategory, setSelectedCategory] = useState({});
  const [modalEditProduct, setModalEditProduct] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [name, setName] = useState('');
  const debouncedName = useDebounce(name);

  const { data: categories } = useGetCategories();

  const { data: products } = useSearchProductByName({
    name: debouncedName,
    category: selectedCategory?._id,
  });

  const openModalEditProduct = (product) => {
    setSelectedProduct(product);
    setModalEditProduct(true);
  };
  const closeModalEditProduct = () => setModalEditProduct(false);

  const modalCloseButton = <CloseOutlined style={{ color: 'white' }} />;
  return (
    <Container>
      <Title>Lista de produtos</Title>

      <CategoryFilterContainer>
        <Subsection>
          <CategoryText>Filtrar por categoria:</CategoryText>
          <Select
            standart="Selecionar"
            data={categories}
            getValue={setSelectedCategory}
            maxWidth="250px"
          />
        </Subsection>

        <SearchSection>
          <SearchIconButton>
            <HiSearch size={25} />
          </SearchIconButton>
          <SearchProduct
            onChange={(e) => setName(e.target.value)}
            placeholder="Pesquisar Produto"
          />
        </SearchSection>
      </CategoryFilterContainer>

      <ProductList>
        {products?.map((product) => (
          <Row key={product._id}>
            <Text>{product.name}</Text>
            <Text>{product.category.name}</Text>

            {isSmallScreen ? (
              <StyledLink to="/administrador/editar-produto" state={product}>
                <TbPencil size={30} />
              </StyledLink>
            ) : (
              <EditButton>
                <TbPencil
                  onClick={() => openModalEditProduct(product)}
                  size={30}
                />
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
        closeIcon={modalCloseButton}
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
        <ModalEditProduct
          product={selectedProduct}
          close={closeModalEditProduct}
        />
      </ModalStyle>
    </Container>
  );
}
