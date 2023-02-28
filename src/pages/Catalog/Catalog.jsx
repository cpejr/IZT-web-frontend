import React from 'react';
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

const categories = [
  {
    name: 'Type 1',
    products: [
      {
        name: 'Product 1',
        image:
          'https://madmais.vteximg.com.br/arquivos/ids/159284-0-0/BOCAL-PARA-LAMPADA-2S-BRANCO--4-.jpg?v=637618856063500000',
      },
      {
        name: 'Product 2',
        image:
          'https://www.decorlux.com.br/site2019/wp-content/uploads/2020/07/ddd.jpg',
      },
    ],
  },
  {
    name: 'Type 2',
    products: [
      {
        name: 'Product 1',
        image:
          'https://a-static.mlcdn.com.br/800x560/bocal-de-louca-porcelana-receptaculo-para-lampadas-e27-js-technology/thrjinformatica/11899658141/f1fad431169ad69f3347637ab71ec05c.jpg',
      },
      {
        name: 'Product 2',
        image:
          'https://www.decorlux.com.br/site2019/wp-content/uploads/2020/07/ddd.jpg',
      },
      {
        name: 'Product 3',
        image:
          'https://www.decorlux.com.br/site2019/wp-content/uploads/2020/07/ddd.jpg',
      },
    ],
  },
  {
    name: 'Type 3',
    products: [
      {
        name: 'Product 1',
        image:
          'https://www.decorlux.com.br/site2019/wp-content/uploads/2020/07/ddd.jpg',
      },
    ],
  },
  {
    name: 'Type 4',
    products: [
      {
        name: 'Product 1',
        image:
          'https://www.decorlux.com.br/site2019/wp-content/uploads/2020/07/ddd.jpg',
      },
      {
        name: 'Product 2',
        image:
          'https://www.decorlux.com.br/site2019/wp-content/uploads/2020/07/ddd.jpg',
      },
      {
        name: 'Product 3',
        image:
          'https://www.decorlux.com.br/site2019/wp-content/uploads/2020/07/ddd.jpg',
      },
      {
        name: 'Product 4',
        image:
          'https://www.decorlux.com.br/site2019/wp-content/uploads/2020/07/ddd.jpg',
      },
    ],
  },
  {
    name: 'Type 5',
    products: [
      {
        name: 'Product 1',
        image:
          'https://www.decorlux.com.br/site2019/wp-content/uploads/2020/07/ddd.jpg',
      },
      {
        name: 'Product 2',
        image:
          'https://www.decorlux.com.br/site2019/wp-content/uploads/2020/07/ddd.jpg',
      },
      {
        name: 'Product 3',
        image:
          'https://www.decorlux.com.br/site2019/wp-content/uploads/2020/07/ddd.jpg',
      },
    ],
  },
];

function Catalog() {
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
        <ButtonRow>
          {categories?.map((category) => (
            <Anchor key={category.name} href={`#${category.name}`}>
              <Button>{category.name}</Button>
            </Anchor>
          ))}
        </ButtonRow>
        {categories?.map((category) => (
          <ProductCategory key={category.name} id={category.name}>
            <Divider />
            <CategoryName>{category.name}</CategoryName>
            <ProductRow>
              {category.products.map((product) => (
                <Product key={product.name}>
                  <ProductImage src={product.image} />
                  <ProductName>{product.name}</ProductName>
                </Product>
              ))}
            </ProductRow>
          </ProductCategory>
        ))}
      </Container>
    </Page>
  );
}

export default Catalog;
