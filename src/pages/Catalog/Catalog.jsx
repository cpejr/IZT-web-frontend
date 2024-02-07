import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { useGetCategories } from '../../hooks/query/categories';
import { useGlobalLanguage } from '../../stores/globalLanguage';
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
import { TranslateText } from './translations';
import translateText from '../../utils/translateAPI';
import buildGetCategoriesErrorMessage from './utils';
import { useState } from 'react';

export default function Catalog() {
  // Translations
  const { globalLanguage } = useGlobalLanguage();
  const translations = TranslateText({ globalLanguage });
  const translateLanguage = globalLanguage.toLowerCase();
  const [catedoryName, setCategoryName] = useState('');

  const navigate = useNavigate();

  const { data: categories, isLoading } = useGetCategories({
    onError: (err) => {
      const errorMessage = buildGetCategoriesErrorMessage(err);

      toast.error(errorMessage);
    },
  });

  var translateCategoryName = (nameCategory) => {
    translateText(nameCategory, translateLanguage)
      .then((translate) => {
        console.log(translate);
        return translate;
      })
      .catch((error) => {
        console.error('Erro ao traduzir:', error);
      });
  };

  let catName = categories?.map((category) =>
    translateCategoryName(category.name)
  );

  return (
    <Page>
      <Container>
        <Introduction>
          <Title>{translations.title}</Title>
          <Description>{translations.description}</Description>
        </Introduction>
        {isLoading ? (
          <h1
            style={{
              height: '66rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {translations.loading}
          </h1>
        ) : (
          <>
            <ButtonRow>
              {categories?.map((category) => (
                <Anchor key={category.name} href={`#${category.name}`}>
                  <Button>{catName}</Button>
                </Anchor>
              ))}
            </ButtonRow>
            {categories?.map((category) => (
              <ProductCategory key={category.name}>
                <Divider />
                <CategoryName>
                  {translateCategoryName(category.name)}
                </CategoryName>
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
