import { useState } from 'react';

import { CloseOutlined, DeleteOutlined } from '@ant-design/icons';
import { HiSearch } from 'react-icons/hi';
import { TbPencil } from 'react-icons/tb';
import { useMediaQuery } from 'react-responsive';
import { toast } from 'react-toastify';

import { Select, Loading } from '../../components/common';
import {
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

  const { data: products, isLoading } = useSearchProductByName({
    name: debouncedName,
    categories, // Enable products query only if the categories is not undefined
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

  const openModalEditProduct = (product) => {
    setSelectedProduct(product);
    setModalEditProduct(true);
  };
  const closeModalEditProduct = () => setModalEditProduct(false);
  const closeModalDeleteProduct = () => setModalDeleteProduct(false);

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
            maxWidth="25rem"
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

      {isLoading ? (
        <Loading />
      ) : (
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
              <DeleteButton>
                <DeleteOutlined
                  onClick={() => openModalDeleteProduct(product._id)}
                  size={30}
                />
              </DeleteButton>
            </Row>
          ))}
        </ProductList>
      )}

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
      <ModalStyle
        open={modalDeleteProduct}
        onCancel={closeModalDeleteProduct}
        footer={null}
        width={500}
        closeIcon={modalCloseButton}
        destroyOnClose
        centered
      >
        <ModalDeleteProduct _id={productId} close={closeModalDeleteProduct} />
      </ModalStyle>
    </Container>
  );
}
