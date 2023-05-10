import { useState } from 'react';

import { CloseOutlined } from '@ant-design/icons';
import { HiSearch } from 'react-icons/hi';
import { TbPencil } from 'react-icons/tb';
import { useMediaQuery } from 'react-responsive';
import { toast } from 'react-toastify';

import { Select } from '../../components/common';
import {
  ModalDeleteCategory,
  ModalDeleteProduct,
  ModalEditProduct,
} from '../../components/features';
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
  DeleteButton,
} from './Styles';
import {
  buildGetProductsErrorMessage,
  buildGetCategoriesErrorMessage,
} from './utils';

export default function ListProduct() {
  const isSmallScreen = useMediaQuery({ maxWidth: 700 });
  const [selectedCategory, setSelectedCategory] = useState({});
  const [modalDeleteProduct, setModalDeleteProduct] = useState(false);
  const [productId, setProductId] = useState('');
  const [modalDeleteCategory, setModalDeleteCategory] = useState(false);
  const [categoryId, setCategoryId] = useState('');
  const [modalEditProduct, setModalEditProduct] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [name, setName] = useState('');
  const debouncedName = useDebounce(name);

  const { data: categories } = useGetCategories({
    onError: (err) => {
      const errorMessage = buildGetCategoriesErrorMessage(err);

      toast.error(errorMessage);
    },
  });

  const { data: products } = useSearchProductByName({
    name: debouncedName,
    category: selectedCategory?._id,
    onError: (err) => {
      const errorMessage = buildGetProductsErrorMessage(err);

      toast.error(errorMessage);
    },
  });

  const openModalDeleteProduct = (_id) => {
    setProductId(_id);
    setModalDeleteProduct(true);
  };

  const openModalDeleteCategory = (_id) => {
    setCategoryId(_id);
    setModalDeleteCategory(true);
  };

  const openModalEditProduct = (product) => {
    setSelectedProduct(product);
    setModalEditProduct(true);
  };
  const closeModalEditProduct = () => setModalEditProduct(false);
  const closeModalDeleteProduct = () => setModalDeleteProduct(false);
  const closeModalDeleteCategory = () => setModalDeleteCategory(false);

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
            <DeleteButton>
              <CloseOutlined
                onClick={() => openModalDeleteCategory(product.category._id)}
              />
            </DeleteButton>
            <Text>{product.category.name}</Text>

            {isSmallScreen ? (
              <StyledLink to="/administrador/editar-produto" state={product}>
                <TbPencil size={30} />
              </StyledLink>
            ) : (
              <>
                <DeleteButton>
                  <CloseOutlined
                    onClick={() => openModalDeleteProduct(product._id)}
                  />
                </DeleteButton>
                <EditButton>
                  <TbPencil
                    onClick={() => openModalEditProduct(product)}
                    size={30}
                  />
                </EditButton>
              </>
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
        closeIcon={<CloseOutlined style={{ color: 'white' }} />}
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
      <ModalStyle
        open={modalDeleteProduct}
        onCancel={closeModalDeleteProduct}
        footer={null}
        width={1000}
        closeIcon={<CloseOutlined />}
        destroyOnClose
        centered
      >
        <ModalDeleteProduct _id={productId} close={closeModalDeleteProduct} />
      </ModalStyle>
      <ModalStyle
        open={modalDeleteCategory}
        onCancel={closeModalDeleteCategory}
        footer={null}
        width={1000}
        closeIcon={<CloseOutlined />}
        destroyOnClose
        centered
      >
        <ModalDeleteCategory
          _id={categoryId}
          close={closeModalDeleteCategory}
        />
      </ModalStyle>
    </Container>
  );
}
