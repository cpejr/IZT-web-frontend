import React from 'react';
import {
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

const products = [
  {
    Category: 'Type 1',
    Bocals: [
      {
        Name: 'Product 1',
        image:
          'https://madmais.vteximg.com.br/arquivos/ids/159284-0-0/BOCAL-PARA-LAMPADA-2S-BRANCO--4-.jpg?v=637618856063500000',
      },
      {
        Name: 'Product 2',
        image:
          'https://www.decorlux.com.br/site2019/wp-content/uploads/2020/07/ddd.jpg',
      },
    ],
  },
  {
    Category: 'Type 2',
    Bocals: [
      {
        Name: 'Product 1',
        image:
          'https://a-static.mlcdn.com.br/800x560/bocal-de-louca-porcelana-receptaculo-para-lampadas-e27-js-technology/thrjinformatica/11899658141/f1fad431169ad69f3347637ab71ec05c.jpg',
      },
      {
        Name: 'Product 2',
        image:
          'https://www.decorlux.com.br/site2019/wp-content/uploads/2020/07/ddd.jpg',
      },
      {
        Name: 'Product 3',
        image:
          'https://www.decorlux.com.br/site2019/wp-content/uploads/2020/07/ddd.jpg',
      },
    ],
  },
  {
    Category: 'Type 3',
    Bocals: [
      {
        Name: 'Product 1',
        image:
          'https://www.decorlux.com.br/site2019/wp-content/uploads/2020/07/ddd.jpg',
      },
    ],
  },
  {
    Category: 'Type 4',
    Bocals: [
      {
        Name: 'Product 1',
        image:
          'https://www.decorlux.com.br/site2019/wp-content/uploads/2020/07/ddd.jpg',
      },
      {
        Name: 'Product 2',
        image:
          'https://www.decorlux.com.br/site2019/wp-content/uploads/2020/07/ddd.jpg',
      },
      {
        Name: 'Product 3',
        image:
          'https://www.decorlux.com.br/site2019/wp-content/uploads/2020/07/ddd.jpg',
      },
      {
        Name: 'Product 4',
        image:
          'https://www.decorlux.com.br/site2019/wp-content/uploads/2020/07/ddd.jpg',
      },
    ],
  },
  {
    Category: 'Type 5',
    Bocals: [
      {
        Name: 'Product 1',
        image:
          'https://www.decorlux.com.br/site2019/wp-content/uploads/2020/07/ddd.jpg',
      },
      {
        Name: 'Product 2',
        image:
          'https://www.decorlux.com.br/site2019/wp-content/uploads/2020/07/ddd.jpg',
      },
      {
        Name: 'Product 3',
        image:
          'https://www.decorlux.com.br/site2019/wp-content/uploads/2020/07/ddd.jpg',
      },
    ],
  },
];

function Catalog() {
  return (
    <Container>
      <Introduction>
        <Title>Tudo o que você precisa está aqui!</Title>
        <Description>
          Bem-vindo ao catálogo da IZT Core! Aqui você encontrará uma ampla
          seleção de bocais de alta qualidade, projetados para atender a todas
          as suas necessidades.Navegue em nosso catálogo de produtos e encontre
          o bocal perfeito para sua aplicação.
        </Description>
      </Introduction>
      <ButtonRow>
        {products.map((product) => (
          <Anchor key={product.Category} href={`#${product.Category}`}>
            <Button>{product.Category}</Button>
          </Anchor>
        ))}
      </ButtonRow>
      {products.map((product) => (
        <ProductCategory key={product.Category}>
          <Divider />
          <CategoryName id={product.Category}>{product.Category}</CategoryName>
          <ProductRow>
            {product.Bocals.map((bocal) => (
              <Product key={bocal.Name}>
                <ProductImage src={bocal.image} />
                <ProductName>{bocal.Name}</ProductName>
              </Product>
            ))}
          </ProductRow>
        </ProductCategory>
      ))}
    </Container>
  );
}

export default Catalog;
