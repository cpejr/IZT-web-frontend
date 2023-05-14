import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

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
} from './Styles';
import buildGetCategoriesErrorMessage from './utils';

export default function Catalog() {
  const navigate = useNavigate();

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
                  <Button>{category.name}</Button>
                </Anchor>
              ))}
            </ButtonRow>
            {categories?.map((category) => (
              <ProductCategory key={category.name}>
                <Divider />
                <CategoryName>{category.name}</CategoryName>
                <ProductRow>
                  {category?.products?.map((product) => (
                    <Product
                      key={product.name}
                      onClick={() => navigate(`/produto/${product._id}`)}
                    >
                      <ProductImage src={product.pictures[0].url} />
                      <ProductName>{product.name}</ProductName>
                    </Product>
                  ))}
                </ProductRow>
              </ProductCategory>
            ))}
          </>
        )}
      </Container>
    </Page>
  );
}
