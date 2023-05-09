import { useState } from 'react';

import { CloseOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import {
  ModalDeleteCategory,
  ModalDeleteProduct,
} from '../../components/features';
import { useGetCategories } from '../../hooks/query/categories';
import {
  Page,
  Container,
  Introduction,
  Title,
  Description,
  ButtonRow,
  Anchor,
  Button,
  ProductCategory,
  CategoryName,
  Divider,
  ProductRow,
  Product,
  ProductImage,
  ProductName,
  ModalStyle,
} from './Styles';
import buildGetCategoriesErrorMessage from './utils';

export default function Catalog() {
  const navigate = useNavigate();
  const [modalDeleteProduct, setModalDeleteProduct] = useState(false);
  const [modalDeleteCategory, setModalDeleteCategory] = useState(false);
  const [productId, setProductId] = useState('');
  const [categoryId, setCategoryId] = useState('');

  const openModalDeleteProduct = (_id) => {
    setProductId(_id);
    setModalDeleteProduct(true);
  };
  const openModalDeleteCategory = (_id) => {
    setCategoryId(_id);
    setModalDeleteCategory(true);
  };
  const closeModalDeleteProduct = () => setModalDeleteProduct(false);
  const closeModalDeleteCategory = () => setModalDeleteCategory(false);

  const { data: categories, isLoading } = useGetCategories({
    onError: (err) => {
      const errorMessage = buildGetCategoriesErrorMessage(err);

      toast.error(errorMessage);
    },
  });

  return (
    <Page>
      <Container>
        <Introduction>
          <Title>Tudo o que você precisa está aqui!</Title>
          <Description>
            Bem-vindo ao catálogo da IZT Core! Aqui você encontrará uma ampla
            seleção de bocais de alta qualidade, projetados para atender a todas
            as suas necessidades.Navegue em nosso catálogo de produtos e
            encontre o bocal perfeito para sua aplicação.
          </Description>
        </Introduction>
        {isLoading ? (
          <h1
            style={{
              height: '660px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            Carregando...
          </h1>
        ) : (
          <>
            <ButtonRow>
              {categories?.map((category) => (
                <Anchor key={category.name} href={`#${category.name}`}>
                  <Button>
                    {category.name}
                    <CloseOutlined
                      style={{ fontSize: '1rem' }}
                      onClick={() => openModalDeleteCategory(category._id)}
                    />
                  </Button>
                </Anchor>
              ))}
            </ButtonRow>
            {categories?.map((category) => (
              <ProductCategory key={category.name}>
                <Divider />
                <CategoryName>{category.name}</CategoryName>
                <ProductRow>
                  {category?.products?.map((product) => (
                    <Product key={product.name}>
                      <CloseOutlined
                        onClick={() => openModalDeleteProduct(product._id)}
                      />
                      <ProductImage
                        src={product.pictures[0].url}
                        onClick={() => navigate(`/produto/${product._id}`)}
                      />
                      <ProductName
                        onClick={() => navigate(`/produto/${product._id}`)}
                      >
                        {product.name}
                      </ProductName>
                    </Product>
                  ))}
                </ProductRow>
              </ProductCategory>
            ))}
          </>
        )}
      </Container>
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
    </Page>
  );
}
